import { useEffect, useMemo, useRef, useState } from "react";
import { useOutletContext } from "react-router";
import { type SharedContextProps } from "~/data/CommonTypes";
import "../../app-v2.css";

export type BlurPosition = "top" | "bottom" | "left" | "right";
export type BlurCurve =
  | "linear"
  | "bezier"
  | "ease-in"
  | "ease-out"
  | "ease-in-out";
export type BlurTarget = "parent" | "page";

export interface GradualBlurProps {
  /** Edge the blur is attached to. Default "bottom". */
  position?: BlurPosition;
  /** Base blur multiplier applied to every layer. Default 2. */
  strength?: number;
  /** Overlay size along the blur axis (height for top/bottom). Default "6rem". */
  height?: string;
  /** Explicit width. Defaults to 100% (vertical) or `height` (horizontal). */
  width?: string;
  /** Size used instead of `height` below the 1200px breakpoint. */
  shrinkHeight?: string;
  /** Renders nothing below the 1200px breakpoint. Stacked backdrop-filter
   *  passes are the expensive case on mobile GPUs — mainly iOS Safari. */
  disableOnShrink?: boolean;
  /** Number of stacked layers — higher is smoother, but costs more to paint. Default 5. */
  divCount?: number;
  /** Exponential ramp for a much stronger blur at the far edge. */
  exponential?: boolean;
  /** Distribution curve across the layers. Default "linear". */
  curve?: BlurCurve;
  /** Opacity of each layer. Default 1. */
  opacity?: number;
  /** true = fade in on mount, "scroll" = fade in when scrolled into view. */
  animated?: boolean | "scroll";
  /** Animation duration, e.g. "0.3s" or "300ms". Default "0.3s". */
  duration?: string;
  /** Animation easing. Default "ease-out". */
  easing?: string;
  /** Multiplies `strength` while hovered. Enables pointer events when set. */
  hoverIntensity?: number;
  /** "parent" = absolute inside the nearest positioned ancestor, "page" = fixed. */
  target?: BlurTarget;
  /** Default 10 — above page content, below the header/alerts (100) and popups (500). */
  zIndex?: number;
  /** Fired once an animated reveal has finished. */
  onAnimationComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const CURVE_FUNCTIONS: Record<BlurCurve, (p: number) => number> = {
  linear: (p) => p,
  bezier: (p) => p * p * (3 - 2 * p),
  "ease-in": (p) => p * p,
  "ease-out": (p) => 1 - Math.pow(1 - p, 2),
  "ease-in-out": (p) =>
    p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2,
};

const GRADIENT_DIRECTIONS: Record<BlurPosition, string> = {
  top: "to top",
  bottom: "to bottom",
  left: "to left",
  right: "to right",
};

/** Accepts CSS time strings ("0.3s", "300ms") and returns milliseconds. */
function durationToMs(duration: string) {
  const value = parseFloat(duration);
  if (Number.isNaN(value)) return 0;
  return duration.trim().endsWith("ms") ? value : value * 1000;
}

/**********************************************************
 * GradualBlur
 * Decorative progressive-blur overlay pinned to one edge of
 * its parent (or the viewport). Stacks `divCount` backdrop-filter
 * layers, each masked to a slice of the gradient, so content
 * fades out of focus rather than blurring all at once.
 */
export function GradualBlur({
  position = "bottom",
  strength = 2,
  height = "6rem",
  width,
  shrinkHeight,
  disableOnShrink = false,
  divCount = 5,
  exponential = false,
  curve = "linear",
  opacity = 1,
  animated = false,
  duration = "0.3s",
  easing = "ease-out",
  hoverIntensity,
  target = "parent",
  zIndex = 10,
  onAnimationComplete,
  className = "",
  style,
}: GradualBlurProps) {
  const context: SharedContextProps | undefined = useOutletContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  // Starts hidden whenever it is animated, so the opacity transition has
  // somewhere to travel from on the first paint.
  const [isVisible, setIsVisible] = useState(!animated);

  const isDisabled = !!disableOnShrink && !!context?.inShrink;
  const activeHeight =
    context?.inShrink && shrinkHeight ? shrinkHeight : height;

  /*******************************************************
   * Reveal — on mount, or once scrolled into view
   */
  useEffect(() => {
    const el = containerRef.current;
    if (!animated || isDisabled) return;

    if (animated !== "scroll") {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    // Re-runs when the breakpoint is crossed, so an instance that was
    // disabled still picks up an observer once it mounts.
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animated, isDisabled]);

  useEffect(() => {
    if (!isVisible || !animated || !onAnimationComplete) return;
    const id = setTimeout(onAnimationComplete, durationToMs(duration));
    return () => clearTimeout(id);
  }, [isVisible, animated, duration, onAnimationComplete]);

  /*******************************************************
   * Build one masked backdrop-filter layer per step
   */
  const blurLayers = useMemo(() => {
    const layers = [];
    const increment = 100 / divCount;
    const currentStrength =
      isHovered && hoverIntensity ? strength * hoverIntensity : strength;
    const curveFunc = CURVE_FUNCTIONS[curve] ?? CURVE_FUNCTIONS.linear;
    const direction = GRADIENT_DIRECTIONS[position] ?? "to bottom";

    for (let i = 1; i <= divCount; i++) {
      const progress = curveFunc(i / divCount);

      const blur = exponential
        ? Math.pow(2, progress * 4) * 0.0625 * currentStrength
        : 0.0625 * (progress * divCount + 1) * currentStrength;

      // Each layer is only visible for its own slice of the edge, with a
      // one-step overlap either side so the steps blend into each other.
      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      const mask = `linear-gradient(${direction}, ${gradient})`;

      layers.push(
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            maskImage: mask,
            WebkitMaskImage: mask,
            backdropFilter: `blur(${blur.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blur.toFixed(3)}rem)`,
            opacity,
            transition:
              animated && animated !== "scroll"
                ? `backdrop-filter ${duration} ${easing}`
                : undefined,
          }}
        />,
      );
    }

    return layers;
  }, [
    divCount,
    strength,
    hoverIntensity,
    isHovered,
    curve,
    position,
    exponential,
    opacity,
    animated,
    duration,
    easing,
  ]);

  const containerStyle = useMemo(() => {
    const isVertical = position === "top" || position === "bottom";

    const base: React.CSSProperties = {
      position: target === "page" ? "fixed" : "absolute",
      pointerEvents: hoverIntensity ? "auto" : "none",
      opacity: isVisible ? 1 : 0,
      transition: animated
        ? `opacity ${duration} ${easing}`
        : undefined,
      zIndex,
      [position]: 0,
      ...(isVertical
        ? {
            height: activeHeight,
            width: width || "100%",
            left: 0,
            right: 0,
          }
        : {
            width: width || activeHeight,
            height: "100%",
            top: 0,
            bottom: 0,
          }),
      ...style,
    };

    return base;
  }, [
    position,
    target,
    hoverIntensity,
    isVisible,
    animated,
    duration,
    easing,
    zIndex,
    activeHeight,
    width,
    style,
  ]);

  // After the hooks, so crossing the breakpoint never changes hook order.
  if (isDisabled) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`gradual-blur ${className}`.trim()}
      style={containerStyle}
      onMouseEnter={hoverIntensity ? () => setIsHovered(true) : undefined}
      onMouseLeave={hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div className="gradual-blur-inner">{blurLayers}</div>
    </div>
  );
}
