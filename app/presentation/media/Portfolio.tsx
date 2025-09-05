import {
  Project,
  type SharedContextProps,
} from "~/data/CommonTypes";
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router";
import { PROJECTS } from "~/data/Objects";
import ReactPlayer from "react-player";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { Icon } from "../elements/Icon";
import { ProjectInfoPopup } from "../landing/ProjectInfoPopup";
import HeaderText from "../landing/HeaderText";
import { ContactTab } from "../landing/ContactTab";

export interface PortfolioProps {}

/******************************
 * Portfolio component
 * @todo Create description
 */
export function Portfolio({}: PortfolioProps) {
  const context: SharedContextProps =
    useOutletContext();
  const [searchParams, setSearchParams] =
    useSearchParams();

  const [playing, setPlaying] =
    useState<number>();
  const [project, setProject] =
    useState<Project>();
  const [filter, setFilter] = useState<
    string | null
  >(searchParams.get("type"));
  const reactPlayer = useRef(null);

  function videoMouseOver(id: number) {
    setPlaying(id);
  }

  function videoMouseOff() {}

  return (
    <div
      className="w100 col middle"
      style={{ minHeight: "100vh" }}
    >
      <div className="row middle center shrinkCol">
        <Icon
          name="albums-outline"
          className="mr2"
          size={context.inShrink ? 30 : 50}
          color="var(--primaryColor)"
        />
        <HeaderText
          text={["Portfolio"]}
          typingSpeed={50}
          className="mb3 mt3"
          pauseDuration={500}
          showCursor={true}
          cursorCharacter="|"
          color="var(--primaryColor)"
          textColors={["var(--primaryColor)"]}
        />
      </div>
      <p className="textCenter ml3 mr3">
        A selection of work we have completed for
        businesses and organisations accross South
        Australia.
      </p>
      <div className="row center w50 m3">
        <button
          className={`row middle ml2 mr3 ${
            filter == "media" && "boxedAccent"
          }`}
          onClick={() => {
            if(filter== "media") {
              setFilter(null) 
              setSearchParams("?");
            }
            else {
            setFilter("media");
            setSearchParams("type=media");
            }
          }}
        >
          <Icon
            name="film-outline"
            className="mr1"
          />
          Media
        </button>
        <button
          className={`row middle ml2 mr3 ${
            filter == "software" && "boxedAccent"
          }`}
          onClick={() =>  {
            if(filter== "software") {
              setFilter(null) 
              setSearchParams("?");
            }
            else {
            setFilter("software");
            setSearchParams("type=software");
            }
          }}
        >
          <Icon
            name="code-outline"
            className="mr1"
          />
          Software
        </button>
        <button
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
        </button>
      </div>
      <div className="m3 col middle center">
        <div className="grid-auto w75">
          {PROJECTS.filter((p) =>
            filter ? p.type == filter : true
          ).map((p) => (
            <div
              key={p.id}
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
                  onMouseOver={() =>
                    videoMouseOver(p.id)
                  }
                  onMouseOut={() =>
                    videoMouseOff()
                  }
                  controls={true}
                  playing={p.id == playing}
                  light={
                    playing ==
                    p.id ? undefined : (
                      <img
                        onMouseOver={() =>
                          videoMouseOver(p.id)
                        }
                        src={p.images[0]}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: 5,
                        }}
                        alt={`Cover image for ${p.name} created by Transform Creative in Australia`}
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
                  alt={`Image for ${p.name} - ${p.type} created by Transform Creative in Australia`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <ContactTab />
      <ProjectInfoPopup
        project={project}
        onClose={() => setProject(undefined)}
        active={!!project}
      />
    </div>
  );
}
