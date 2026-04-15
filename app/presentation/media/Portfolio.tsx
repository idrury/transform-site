import { Project, type SharedContextProps } from "~/data/CommonTypes";
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router";
import { PROJECTS } from "~/data/Objects";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../elements/Icon";
import { ProjectInfoPopup } from "../landing/ProjectInfoPopup";
import HeaderText from "../landing/HeaderText";
import { ContactTab } from "../landing/ContactTab";
import { AnimatedDots } from "../elements/AnimatedDots";
import { ScrollMoreButton } from "../elements/ScrollMoreButton";
import { AnimatedPageIcon } from "../elements/AnimatedPageIcon";

export interface PortfolioProps {}

/******************************
 * Portfolio component
 * @todo Create description
 */
export function Portfolio({}: PortfolioProps) {
  const context: SharedContextProps = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const [playing, setPlaying] = useState<number>();
  const [project, setProject] = useState<Project>();
  const [projectPopupActive, setProjectPopupActive] = useState(false);
  const filter = searchParams.get("type");
  const reactPlayer = useRef(null);
  const filterSectionRef = useRef<HTMLDivElement>(null);

  function videoMouseOver(id: number) {
    setPlaying(id);
  }

  function videoMouseOff() {}

  return (
    <div className="w100 col middle" style={{ minHeight: "100vh" }}>
      <AnimatedDots autoPlayDelay={0} />


      <div
        className="col middle center shrinkCol"
        style={{ height: "80vh" }}
      >
        <AnimatedPageIcon size={100} />
        <HeaderText
          text={["Portfolio"]}
          typingSpeed={50}
          className="mb3 mt3"
          pauseDuration={500}
          showCursor={true}
          cursorCharacter="|"
          color="var(--accent)"
          textColors={["var(--accent)"]}
          as="h1"
        />
        <p className="textCenter ml3 mr3 w-100">
          A selection of some of our favourite work.
        </p>
        <ScrollMoreButton
          targetRef={filterSectionRef}
          offset={100}
          label="View"
        />
      </div>
      <div className="row center w50 m3" ref={filterSectionRef}>
        <button
          className={`row middle ml2 mr3 ${
            filter == "media" && "boxedAccent"
          }`}
          onClick={() => {
            if (filter == "media") {
              setSearchParams({}, { preventScrollReset: true });
            } else {
              setSearchParams(
                { type: "media" },
                { preventScrollReset: true },
              );
            }
          }}
        >
          <Icon name="film-outline" className="mr1" />
          Media
        </button>
        <button
          className={`row middle ml2 mr3 ${
            filter == "software" && "boxedAccent p-0"
          }`}
          onClick={() => {
            if (filter == "software") {
              setSearchParams({}, { preventScrollReset: true });
            } else {
              setSearchParams(
                { type: "software" },
                { preventScrollReset: true },
              );
            }
          }}
        >
          <Icon name="code-outline" className="mr1" />
          Software
        </button>
        {/* <button
          className={`row middle ml2 mr3 ${
            filter == "design" && "boxedAccent"
          }`}
          onClick={() => {
            if(filter== "design") {
              setFilter(null) 
              setSearchParams("?");
            }
            else {
            setFilter("design");
            setSearchParams("type=design");
            }
          }}
        >
          <Icon
            name="color-filter-outline"
            className="mr1"
          />
          Design
        </button> */}
      </div>
      <div className="m3 col middle center">
        <div className="grid-auto w75">
          {PROJECTS.filter((p) =>
            filter ? p.type == filter : true,
          ).map((p) => (
            <div
              key={`${p.name}-${p.id}`}
              style={{
                minWidth: 300,
                aspectRatio: "16/9",
                borderRadius: 5,
              }}
            >
              <div
                style={{
                  zIndex: 20,
                  position: "relative",
                }}
              >
                <Icon
                  name={"information-circle"}
                  onClick={() => {
                    setProject(p);
                    setProjectPopupActive(true);
                    setPlaying(undefined);
                  }}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 10,
                  }}
                  color="var(--accent)"
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
                        alt={`Cover image for ${p.name} created by Transform Creative in Adelaide, South Australia`}
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
                  alt={`Image for ${p.name} - ${p.type} created by Transform Creative in Adelaide, South Australia`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="horizontal-line mediumFade mt-20" />
      <div
        className="col middle center"
        style={{ minHeight: "80vh" }}
      >
        <ContactTab />
      </div>
      <div className="horizontal-line mediumFade mb-20" />

      <ProjectInfoPopup
        project={project}
        onClose={() => setProjectPopupActive(false)}
        active={projectPopupActive}
      />
    </div>
  );
}
