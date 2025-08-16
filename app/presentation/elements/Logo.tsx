import { useNavigate } from "react-router";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export interface LogoProps {
  size?: number;
}
const iconSpin = {
  rotate: -180,
  duration: 2,
  opacity: 0,
  ease: "bounce.out",
};

/******************************
 * Logo component
 * @todo Create description
 */
export function Logo({ size = 100 }: LogoProps) {
  const navigate = useNavigate();

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        "#icon",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "bounce.out",
          rotate: -180,
          duration: 2,
        },1
      )
        .fromTo(
          "#logo-title-text",
          {
            opacity: 0,
            x: -100,
            ease: "power3",
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
          },"-=1"
        )
        .fromTo(
          "#logo-sub",
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "bounce",
          },"-=0.3"
        )
    });
  }, []);

  /*****************************
   * Make icon spin on hover
   */
  function onIconHover() {
    gsap.fromTo(
      "#icon",
      {
        rotate: 0,
      },
      {
        rotate: "90",
        ease: "elastic.out",
        duration: 2,
      }
    );
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
            marginRight: `${Math.round(size / 5)}px`,
          }}
        >
          <img
            id="icon"
            className=""
            style={{
              opacity: 0,
              height: `${size * 2}px`,
              width: `${size * 2}px`,
            }}
            alt="transform creative icon"
            src="/transform-icon-color-donut.png"
          />
        </div>
        <div>
          <h1
            id="logo-title-text"
            style={{
              opacity: 0,
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
              opacity: 0,
              fontSize: `${Math.round(size / 2)}pt`,
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
