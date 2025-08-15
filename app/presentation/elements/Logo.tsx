import type { SharedContextProps } from "~/data/CommonTypes";
import {
  useNavigate,
  useOutletContext,
} from "react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export interface LogoProps {
  size?: number;
}

/******************************
 * Logo component
 * @todo Create description
 */
export function Logo({ size = 100 }: LogoProps) {
  const context: SharedContextProps =
    useOutletContext();
  const navigate = useNavigate();

  gsap.registerPlugin(SplitText);

  const iconSpin = {
    rotate: -180,
    duration: 2,
    opacity: 0,
    ease: "bounce.out",
  };

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create(
        "#logo-title",
        {
          type: "words",
        }
      );

      gsap.from(titleSplit.words, {
        opacity: 0,
        y: -10,
        stagger: 0.1,
        ease: "bounce",
      });

      gsap.fromTo(
        "#logo-sub",
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "bounce",
        }
      );
    });

    gsap.from("#icon", iconSpin);
  }, []);

  function onIconHover() {
    gsap.to("#icon", {
      rotate: "+=180",
      ease: "circle.out",
      duration: .5
    });
  }

  return (
    <div>
      <div
        className="row clickable"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        onMouseEnter={() => onIconHover()}
      >
        <div
          style={{
            height: size * 2,
            width: size * 2,
            marginRight: `${Math.round(
              size / 5
            )}px`,
          }}
        >
          <img
            id="icon"
            className=""
            style={{
              height: `${size * 2}px`,
              width: `${size * 2}px`,
            }}
            alt="transform creative icon"
            src="/transform-icon-color-donut.png"
          />
        </div>
        <div>
          <h1
            id="logo-title"
            className="mt3"
            style={{
              padding: 0,
              margin: 0,
              color: "var(--primaryColor)",
              fontSize: `${size}pt`,
            }}
          >
            Transform
          </h1>
          <h2
            id="logo-sub"
            style={{
              fontSize: `${Math.round(
                size / 2
              )}pt`,
              color: "var(--primaryColor)",
            }}
          >
            Creative
          </h2>
        </div>
      </div>
    </div>
  );
}
