import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export interface AnimatedPageIconProps {
  size?: number;
}

/******************************
 * AnimatedPageIcon
 * Displays the Transform donut icon, spinning 180° and fading in on mount.
 */
export function AnimatedPageIcon({ size = 100 }: AnimatedPageIconProps) {
  const iconRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      iconRef.current,
      { opacity: 0, rotate: -180 },
      { opacity: 1, rotate: 0, duration: 0.5, ease: "power2.out" },
    );
  }, []);

  return (
    <img
      ref={iconRef}
      src="/transform-icon-color-donut.png"
      style={{ height: size, opacity: 0 }}
      alt="Transform Creative icon"
    />
  );
}
