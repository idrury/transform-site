import type { SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";
import "./landing.css";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";

export interface DesignTabProps {}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function DesignTab({}: DesignTabProps) {
  const context: SharedContextProps = useOutletContext();
  const [playerPlay, setPlayerPlay] = useState(false);
  const [playerMuted, setPlayerMuted] = useState(true);
  const reactPlayer = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  function videoMouseOver() {
    setTimeout(() => {
      setPlayerPlay(true);
    }, 500);
  }

  function videoMouseOff() {
    setTimeout(() => setPlayerPlay(false), 500);
  }

  return (
    <section id="design" className="w50 col middle center">
      <div style={{ minHeight: 150, width: 100 }} />

      <Icon
        name="color-filter-outline"
        size={50}
        color="var(--primaryColor)"
      />
      <h4 className="mb3 mt3 textCenter">
        We turn colors, fonts and shapes into brands that people trust
      </h4>
      <p className="pb3 textCenter">
        Tell us who you are and we'll help you develop a style that is
        uniquely you.
      </p>
      <div className="w100 m3 col between">
        <div className="row shrinkCol between">
          <div
            className="w100 boxed row middle center grow-y"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {playerPlay && (
              <Icon
                name={playerMuted ? "volume-mute" : "volume-high"}
                onClick={() => setPlayerMuted(!playerMuted)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 50,
                }}
                className="boxed p1"
              />
            )}
            <img
              src="https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg"
              ref={reactPlayer}
              style={{
                minWidth: "100%",
                minHeight: "100%",
                objectFit: "cover",
              }}
              onMouseOver={() => videoMouseOver()}
              onMouseOut={() => videoMouseOff()}
              // muted={playerMuted}
              // loop

              //playing={playerPlay}
            />
          </div>
        </div>
        <div className="div10" />
        <div className="row shrinkCol between">
          <div
            className="w75 boxed col"
            style={{
              overflow: "hidden",
              minHeight: 200,
              maxHeight: 200,
            }}
          >
            <div className="">
              <h3 className="mt3 ml3">
                We have experience designing
              </h3>
              <ul className="textStart ml3 mr3 mb3">
                <li>Logos</li>
                <li>Style guides</li>
                <li>Iconography</li>
                <li>Print material</li>
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
                Find out more
              </h5>
              <Icon
                onClick={() => navigate("/design")}
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
