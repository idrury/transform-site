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
import "../../app-v2.css";

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

  async function onVideoClick(e: MouseEvent<HTMLVideoElement>) {
    e.stopPropagation();
    setPlayerMuted(false);
    if (!context.inShrink) setVideoClicked(!videoClicked);
  }

  return (
    <BasicMenu
      width={context.inShrink ? "100%" : "100vw"}
      active={active}
      onClose={() => onClose()}
      zIndex={100}
    >
      <div className="col middle" style={{ gap: 20, overflow: "auto" }}>
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
        <div className="col center middle mt-20 gap-10">
          <Icon
            name={
              project?.type == "media"
                ? "film-outline"
                : project?.type == "design"
                  ? "color-filter-outline"
                  : "code-outline"
            }
            className=""
            size={50}
            color="var(--accent)"
          />
          {/* Title + link */}
          <div className="col center middle ">
            <h4
              className="row middle center textCenter"
              style={{ textTransform: "capitalize" }}
            >
              {project?.name}
            </h4>
          </div>
        </div>

        {/* Description prose */}
        <div style={{ maxWidth: 680, width: "100%" }}>
          {project?.description.map((d, i) => (
            <p
              key={i}
              style={{ fontSize: "14pt", lineHeight: 1.7 }}
              className="mb2 textCenter"
            >
              {d}
            </p>
          ))}
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

        {/* Image gallery */}
        {project?.images && project.images.length > 0 && (
          <div
            className=""
            style={{
              display: "grid",
              gridTemplateColumns: context.inShrink
                ? "repeat(auto-fill, minmax(200px, 1fr))"
                : "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {project.images.map((img, idx) => (
              <div key={idx}>
                <img
                  style={{ width: "100%", aspectRatio: "16 / 9" }}
                  src={img}
                />
              </div>
            ))}
          </div>
        )}

        {/* More CTA */}
        <div className="row center w100">
          <a
          role="button"
          href={project?.type==="software" ? "/development" :`/Portfolio?type=${project?.type}`}
            className="accentButton row center middle"
            style={{ maxWidth: 400, width: "100%" }}
          >
            <Icon name="link" className="mr2" />
            More {project?.type}
          </a>
        </div>
      </div>
    </BasicMenu>
  );
}
