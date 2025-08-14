import { Project, type SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { PROJECTS } from "~/data/Objects";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import { Icon } from "../elements/Icon";
import { ProjectInfoPopup } from "../landing/ProjectInfoPopup";

export interface MediaProps {}

/******************************
 * Media component
 * @todo Create description
 */
export function Media({}: MediaProps) {
  const context: SharedContextProps = useOutletContext();
  const [playing, setPlaying] = useState<number>();
  const [project, setProject] = useState<Project>();
  const [muted, setMuted] = useState(false);
  const reactPlayer = useRef(null);

  const navigate = useNavigate();

  function videoMouseOver(id: number) {
    console.log("Hi");
    setPlaying(id);
  }

  function videoMouseOff() {}

  return (
    <div className="w100 col middle center">
      <h1 className="mb3">Media</h1>
      <div className="m3 col middle center">
        <div
          className="grid-auto w75"
        >
          {PROJECTS.filter((p) => p.type == "media").map((p) => (
            <div
              style={{
                minWidth: 300,
                aspectRatio: "16/9",
                borderRadius: 5,
              }}
            >
              <div style={{ zIndex: 20, position: "relative" }}>
                <Icon
                  name={"information-circle"}
                  onClick={() => {
                    setProject(p);
                    setPlaying(undefined);
                  }}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 10,
                  }}
                  color="var(--primaryColor)"
                  className="clickable boxed p1"
                />
              </div>
              {p.video ? (
                <ReactPlayer
                  key={p.id}
                  src={p.video}
                  ref={reactPlayer}
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: 5,
                  }}
                  muted={true}
                  onMouseOver={() => videoMouseOver(p.id)}
                  onMouseOut={() => videoMouseOff()}
                  controls={true}
                  playing={p.id == playing}
                  light={
                    playing == p.id ? undefined : (
                      <img
                        onMouseOver={() => videoMouseOver(p.id)}
                        src={p.images[0]}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: 5,
                        }}
                      />
                    )
                  }
                />
              ) : (
                <img
                  onClick={() => setProject(p)}
                  src={p.images[0]}
                  style={{
                    cursor: "pointer",
                    height: "100%",
                    width: "100%",
                    borderRadius: 5,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <ProjectInfoPopup
        project={project}
        onClose={() => setProject(undefined)}
        active={!!project}
      />
    </div>
  );
}
