import type { SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";
import "./landing.css";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export interface SoftwareTabProps {}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function SoftwareTab({}: SoftwareTabProps) {
  const context: SharedContextProps = useOutletContext();
  const reactPlayer = useRef(null);

  const [playerPlay, setPlayerPlay] = useState(false);
  const [playerMuted, setPlayerMuted] = useState(true);
  const navigate = useNavigate();

  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayerPlay(true);
          } else setPlayerPlay(false);
        });
      },
      { threshold: 0.1 }
    );
    if (reactPlayer.current) {
      observer.observe(reactPlayer.current);
    }
    return () => {
      if (reactPlayer.current) {
        observer.unobserve(reactPlayer.current);
      }
    };
  }, []);

  // Gsap animation
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create("#software-title", {
        type: "words",
      });

      gsap.from(titleSplit.words, {
        scrollTrigger: {
          scrub: 1,
          trigger: "#software",
          start: "top center",
          end: "+=300",
          toggleActions: "pause pause reverse pause",
        },
        opacity: 0,
        y: -10,
        stagger: 0.2,
      });
    });

    gsap.from("#software-icon", {
      scrollTrigger: {
        scrub: 1,
        trigger: "#software",
        start: "center bottom",
        end: "+=300",
        toggleActions: "pause pause reverse pause",
      },
      opacity: 0,
      y: -300,
    });

    gsap.from("#software-boxes", {
      scrollTrigger: {
        scrub: 1,
        trigger: "#software",
        start: "top 300",
        end: "+=300",
        toggleActions: "pause pause reverse pause",
      },
      opacity: 0,
      y: 300,
    });

    gsap.from("#software-sub", {
      scrollTrigger: {
        scrub: 1,
        trigger: "#software",
        start: "top 60%",
        end: "+=300",
        toggleActions: "pause pause reverse pause",
      },
      opacity: 0,
      y: 300,
    });
  }, []);

  return (
    <section id="software" className="w50 col middle ">
      <div style={{ minHeight: 150, width: 100 }} />

      <Icon
        id="software-icon"
        name="code-outline"
        size={40}
        color="var(--primaryColor)"
      />
      <h4 className="mb3 mt3 textCenter" id="software-title">
        We develop software that pushes boundaries and invites
        participation
      </h4>
      <p className="pb3 textCenter" id="software-sub">
        Bring us your website or app idea and we'll make it a reality.
      </p>

      <div className="w100 col" id="software-boxes">
        <div className="row shrinkCol between">
          <div
            className="w100 boxed row middle center"
            style={{
              aspectRatio: "16 / 9",
            }}
          >
            <ReactPlayer
              src="https://api.freeflex.com.au/storage/v1/object/public/transform/Software-video.mp4"
              ref={reactPlayer}
              onClick={() => {
                setPlayerMuted(!playerMuted);
                !playerPlay && setPlayerPlay(true);
              }}
              style={{
                minWidth: "100%",
                minHeight: "100%",
                objectFit: "cover",
              }}
              muted={playerMuted}
              loop
              playing={playerPlay}
            />
          </div>
        </div>
        <div className="div10" />
        <div className="row shrinkCol between">
          <div
            className="w75 boxed col animate"
            style={{
              overflow: "hidden",
              minHeight: 200,
              maxHeight: 200,
            }}
          >
            <div className="">
              <h3 className="mt3 ml3">
                We have experience developing
              </h3>
              <ul className="textStart ml3 mr3 mb3">
                <li>Donation management systems</li>
                <li>Custom CRMS</li>
                <li>Android and IOS apps</li>
                <li>Landing pages</li>
              </ul>
            </div>
          </div>
          <div className="div10" />
          <div className="boxedAccent w25">
            <div
              className={`${
                context.inShrink
                  ? "row middle between p3"
                  : "col between h100"
              }`}
            >
              <h5
                className={`${!context.inShrink && "pl3 pr3 pt3"}`}
                style={{
                  textAlign: "start",
                  zIndex: 500,
                }}
              >
                See more
              </h5>
              <Icon
                onClick={() => navigate("/portfolio?type=software")}
                name="arrow-forward-circle"
                size={40}
                color="var(--background)"
                className={`clickable ${
                  !context.inShrink && "pl3 pb3"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
