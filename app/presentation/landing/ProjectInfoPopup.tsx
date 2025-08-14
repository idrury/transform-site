import type {
  ActivatableElement,
  Project,
  SharedContextProps,
} from "~/data/CommonTypes";

import "./landing.css";
import BasicMenu from "../elements/BasicMenu";
import { Icon } from "../elements/Icon";
import { useNavigate, useOutletContext } from "react-router";
import { MouseEvent, useRef, useState } from "react";
import ReactPlayer from "react-player";

export interface ProjectInfoPopupProps extends ActivatableElement {
  project: Project | undefined;
}

/******************************
 * ProjectInfoPopup component
 * @todo Create description
 */
export function ProjectInfoPopup({
  active,
  project,
  onClose,
}: ProjectInfoPopupProps) {
  const context: SharedContextProps = useOutletContext();
  const navigate = useNavigate();
  const [playerMuted, setPlayerMuted] = useState(true);
  const [playerPlay, setPlayerPlay] = useState(false);
  const reactPlayer = useRef<HTMLVideoElement>(null);
  const [videoClicked, setVideoClicked] = useState(false);

  async function videoMouseOver(e: MouseEvent<HTMLVideoElement>) {
    setTimeout(() => {
      setPlayerPlay(true);
    }, 500);
  }

  async function videoMouseOff(e: MouseEvent<HTMLVideoElement>) {
    setTimeout(() => setPlayerPlay(false), 500);
  }

  async function onVideoClick(e:MouseEvent<HTMLVideoElement>) {
    e.stopPropagation();
    setPlayerMuted(false)
    if(!context.inShrink) setVideoClicked(!videoClicked);
  }

  return (
    <BasicMenu
      width={context.inShrink ? "90%" : "55%"}
      active={active}
      onClose={() => onClose()}
      zIndex={100}
    >
      <div className="p3">
        <div
          className={`row shrinkCol mb2 ${
            project?.link ? "between" : "center"
          }`}
        >
          <h4
            className={`row middle shrinkCol textCenter ${
              context.inShrink ? "center " : "between"
            }`}
            style={{ textTransform: "capitalize" }}
          >
            <Icon
              name={
                project?.type == "media"
                  ? "film-outline"
                  : project?.type == "design"
                  ? "color-filter-outline"
                  : "code-outline"
              }
              className=""
              size={35}
              color="var(--primaryColor)"
            />
            <div className="div10" />
            {project?.name}
          </h4>
          {project?.link && (
            <div className="row middle center mt3 mb3">
              <a
                style={{ textDecoration: "none" }}
                className="p2 accentButton row center middle"
                target="_blank"
                href={project.link}
              >
                <Icon name="link" className="mr2" />
                View live project
              </a>
            </div>
          )}
        </div>

        <div className="row shrinkCol">
          <div className="col between w50">
            <div className="col">
              {project?.description.map((d, i) => (
                <p
                  key={i}
                  style={{ fontSize: "14pt" }}
                  className={`mb2 ${
                    context.inShrink ? "textCenter" : "textStart"
                  }`}
                >
                  {d}
                </p>
              ))}
            </div>
            <button
              className="accentButton row center middle w100"
              onClick={() =>
                navigate(`/Portfolio?type=${project?.type}`)
              }
            >
              <Icon name="link" className="mr2" />
              More {project?.type}
            </button>
          </div>

          <div className="div20" />

          <div
            className={`middle ${
              context.inShrink ? "center" : "start w100"
            }`}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${
                context.inShrink ? "auto-fill" : "2"
              }, minmax(200px, 400px))`,
              gridTemplateRows: "",
              gap: 10,
            }}
          >
            {project?.video && (
              <div
                className="w100 boxed"
                style={{
                  overflow: "hidden",
                  aspectRatio: "16 / 9",
                }}
              >
                {playerPlay && (
                  <div style={{ zIndex: 20, position: "relative" }}>
                    <Icon
                      name={
                        playerMuted ? "volume-mute" : "volume-high"
                      }
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
                  src={project.video}
                  onMouseOver={(e) => videoMouseOver(e)}
                  onMouseOut={(e) => videoMouseOff(e)}
                  onClick={(e) => onVideoClick(e)}
                  muted={playerMuted}
                  loop
                  style={
                    videoClicked
                      ? {
                          width: "80vw",
                          height: "80vh",
                          objectFit: "cover",
                          cursor: "pointer",
                          position: "fixed",
                          top: "10vh",
                          left: "10vw",
                          zIndex: 100,
                          borderRadius: "var(--borderRadius)",
                        }
                      : {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          cursor: "pointer",
                        }
                  }
                  playing={true}
                />
              </div>
            )}
            {project?.images?.map((img, idx) => (
              <div key={idx}>
                <img
                  style={{ width: "100%", aspectRatio: "16 / 9" }}
                  src={img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BasicMenu>
  );
}
