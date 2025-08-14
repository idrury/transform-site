import type { SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";
import "./landing.css";
import ReactPlayer from "react-player";
import { MouseEvent, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export interface MediaTabProps {}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function MediaTab({}: MediaTabProps) {
  const context: SharedContextProps = useOutletContext();
  const [playerPlay, setPlayerPlay] = useState(false);
  const [playerMuted, setPlayerMuted] = useState(true);
  const [playerCursorOn, setPlayerCursorOn] = useState(false);
  const reactPlayer = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const titleSplit = SplitText.create("#media-title", {
      type: "words",
    });

     gsap.from("#media-icon", {
      scrollTrigger: {
        scrub: 1,
        trigger: "#media",
        start: "center bottom",
        end: "+=300",
        toggleActions: "pause pause reverse pause",
      },
      opacity: 0,
      y: -300,
    });

      gsap.from("#media-boxes", {
      scrollTrigger: {
        scrub: 1,
        trigger: "#media",
        start: "top 300",
        end: "+=300",
        toggleActions: "pause pause reverse pause",
      },
      opacity: 0,
      y: 300,
    });

      gsap.from("#media-sub", {
      scrollTrigger: {
        scrub: 1,
        trigger: "#media",
        start: "top 60%",
        end: "+=300",
        toggleActions: "pause pause reverse pause",
      },
      opacity: 0,
      y: 300,
    });

    gsap.from(titleSplit.words, {
      scrollTrigger: {
        scrub: 1,
        trigger: "#media",
        start: "top center",
        end: "+=300",
        toggleActions: "pause pause reverse pause",
      },
      opacity: 0,
      y: -10,
      stagger: 0.2,
    });
  }, []);

  async function videoMouseOver(e: MouseEvent<HTMLVideoElement>) {
    setTimeout(() => {
      setPlayerPlay(true);
    }, 500);
  }

  async function videoMouseOff(e: MouseEvent<HTMLVideoElement>) {
    setTimeout(() => setPlayerPlay(false), 500);
  }

  return (
    <section id="media" className="w50 col middle">
      <div style={{ minHeight: 150, width: 100 }} />

      <Icon
      id="media-icon"
        name="film-outline"
        size={50}
        color="var(--primaryColor)"
      />
      <h4 className="mb3 mt3 textCenter" id="media-title">
        We create videos that gain attention and generate traction
      </h4>
      <p className="pb3 textCenter" id="media-sub">
        Partner with us to create authentic material that cuts through
        the dribble of AI content.
      </p>
      <div className="w100 col" id="media-boxes">
        <div className="row">
          <div
            className="w100 boxed grow-y"
            style={{
              overflow: "hidden",
            }}
          >
            {playerPlay && (
              <div style={{ zIndex: 20, position: "relative" }}>
                <Icon
                  name={playerMuted ? "volume-mute" : "volume-high"}
                  onClick={() => setPlayerMuted(!playerMuted)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 10,
                  }}
                  className="boxed p1"
                />
              </div>
            )}
            <ReactPlayer
              ref={reactPlayer}
              src="https://api.freeflex.com.au/storage/v1/object/public/transform/Transform-reel-web.mp4"
              onMouseOver={(e) => videoMouseOver(e)}
              onMouseOut={(e) => videoMouseOff(e)}
              muted={playerMuted}
              loop
              style={{
                minWidth: "100%",
                minHeight: "100%",
                objectFit: "cover",
              }}
              playing={playerPlay}
            />
          </div>
        </div>
        <div className="div10" />
        <div className="shrinkCol between h100">
          <div
            className="w75 boxed animate col"
            style={{
              overflow: "hidden",
              minHeight: 200,
              maxHeight: 200,
            }}
          >
            <div className="">
              <h3 className="mt3 ml3">We have experience creating</h3>
              <ul className="textStart ml3 mr3 mb3">
                <li>Long-form training series</li>
                <li>Promotional videos</li>
                <li>Social media reels</li>
                <li>Videos for fundraising campaigns</li>
              </ul>
            </div>
          </div>
          <div className="div10" />
          <div className="row boxedAccent w25">
            <div
              className={`${
                context.inShrink
                  ? "row middle between p3 w100"
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
                onClick={() => navigate("/portfolio?type=media")}
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
