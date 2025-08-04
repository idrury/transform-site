import type { SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";
import "./landing.css";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";

export interface SoftwareTabProps {}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function SoftwareTab({}: SoftwareTabProps) {
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
    <section id="software" className="w50 col middle ">
      <div style={{ minHeight: 150, width: 100 }} />

      <Icon
        name="code-outline"
        size={50}
        color="var(--primaryColor)"
      />
      <h4 className="mb3 mt3 textCenter">
        We develop software that pushes boundaries and invites
        participation
      </h4>
      <p className="pb3 textCenter">
        Bring us your website or app idea and we'll make it a reality.
      </p>
      <div className="w100 col between">
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
                Find out more
              </h5>
              <Icon
                onClick={() => navigate("/software")}
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
