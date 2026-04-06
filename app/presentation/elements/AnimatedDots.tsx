import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "./Icon";

export interface AnimatedDotsProps {
  autoPlayDelay?: number; // ms before first auto-bounce; 0 = disabled; default 3000
}

export function AnimatedDots({ autoPlayDelay = 3000 }: AnimatedDotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  function onDotsHover() {
    const ctx = containerRef.current;
    if (!ctx) return;
    const [e1, e2, e3] = Array.from(ctx.querySelectorAll(".dot-ellipse"));
    let tl = gsap.timeline();
    tl.to(e1, { y: "-=20px", ease: "power1.out", duration: 0.2 })
      .to(e2, { y: "-=20px", ease: "power1.out", duration: 0.2 }, "-=0.15")
      .to(e3, { y: "-=20px", ease: "power1.out", duration: 0.2 }, "-=0.15")
      .to(e1, { y: "0", ease: "bounce.out", duration: 0.6 })
      .to(e2, { y: "0", ease: "bounce.out", duration: 0.6 }, "-=0.5")
      .to(e3, { y: "0", ease: "bounce.out", duration: 0.6 }, "-=0.5");
  }

  useGSAP(
    () => {
      const ctx = containerRef.current;
      if (!ctx) return;
      const [e1, e2, e3] = Array.from(ctx.querySelectorAll(".dot-ellipse"));
      gsap
        .timeline()
        .from(e1, { y: "-30px", ease: "bounce.out", duration: 0.6, opacity: 0 }, 1)
        .from(e2, { y: "-30px", ease: "bounce.out", duration: 0.6, opacity: 0 }, "-=0.5")
        .from(e3, { y: "-30px", ease: "bounce.out", duration: 0.6, opacity: 0 }, "-=0.5");
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (autoPlayDelay <= 0) return;
    const id = setTimeout(() => onDotsHover(), autoPlayDelay);
    return () => clearTimeout(id);
  }, [autoPlayDelay]);

  return (
    <div
      ref={containerRef}
      className="row middle center"
      style={{ zIndex: 1 }}
      onMouseEnter={onDotsHover}
    >
      <div className="dot-ellipse" style={{ zIndex: 1 }}>
        <Icon name="ellipse" size={20} color="var(--accent)" />
      </div>
      <div className="dot-ellipse">
        <Icon name="ellipse" size={20} color="var(--thirdColor)" />
      </div>
      <div className="dot-ellipse">
        <Icon name="ellipse" size={20} color="var(--secondaryColor)" />
      </div>
    </div>
  );
}
