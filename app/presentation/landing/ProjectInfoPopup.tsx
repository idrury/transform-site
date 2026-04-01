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
      width={context.inShrink ? "100%" : "100vw"}
      active={active}
      onClose={() => onClose()}
      zIndex={100}
    >
      <div className="p3 col middle" style={{ gap: 32 }}>

   {project?.link && (
            <div className="row middle center">
              <a
                style={{ textDecoration: "none" }}
                className="p2 accentButton row center middle"
                target="_blank"
                rel="noreferrer"
                href={project.link}
              >
                <Icon name="open-outline" className="mr2" />
                View live project
              </a>
            </div>
          )}
        {/* Title + link */}
        <div className="col center middle" style={{ gap: 12 }}>
          
          <h4
            className="row middle center"
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
       
        </div>

        {/* Hero video */}
        {project?.video && (
          <div
            className="boxed"
            style={{
              maxWidth: 800,
              width: "100%",
              overflow: "hidden",
              aspectRatio: "16 / 9",
              position: "relative",
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

        {/* Description prose */}
        <div style={{ maxWidth: 680, width: "100%" }}>
          {project?.description.map((d, i) => (
            <p key={i} style={{ fontSize: "14pt", lineHeight: 1.7 }} className="mb2 textCenter">
              {d}
            </p>
          ))}
        </div>

        {/* Image gallery */}
        {project?.images && project.images.length > 0 && (
          <div
            className="w100"
            style={{
              display: "grid",
              gridTemplateColumns: context.inShrink
                ? "repeat(auto-fill, minmax(200px, 1fr))"
                : "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {project.images.map((img, idx) => (
              <div key={idx}>
                <img style={{ width: "100%", aspectRatio: "16 / 9" }} src={img} />
              </div>
            ))}
          </div>
        )}

        {/* More CTA */}
        <div className="row center w100">
          <button
            className="accentButton row center middle"
            style={{ maxWidth: 400, width: "100%" }}
            onClick={() => navigate(`/Portfolio?type=${project?.type}`)}
          >
            <Icon name="link" className="mr2" />
            More {project?.type}
          </button>
        </div>

      </div>
    </BasicMenu>
  );
}
