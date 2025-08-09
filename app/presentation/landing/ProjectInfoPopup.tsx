import type {
  ActivatableElement,
  Project,
  SharedContextProps,
} from "~/data/CommonTypes";

import "./landing.css";
import BasicMenu from "../elements/BasicMenu";
import { Icon } from "../elements/Icon";
import { useOutletContext } from "react-router";

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
  return (
    <BasicMenu
      width={context.inShrink ? "90%" : "60%"}
      active={active}
      onClose={() => onClose()}
      zIndex={100}
    >
      <div>
        <div className={`row shrinkCol mb2 ${project?.link ? "between" : "center"}`}>
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
            <div className="row middle center mb2 mt2">
              <a
                style={{ textDecoration: "none" }}
                className="p2 accentButton row center middle"
                target="_blank"
                href={project.link}
              >
                <Icon name="link" className="mr2" />
                View project
              </a>
            </div>
          )}
        </div>

        <div className="row shrinkCol ">
          <div className="col between w50">
            <div className="col">
              {project?.description.map((d, i) => (
                <p
                  key={i}
                  className={`mb2 ${
                    context.inShrink ? "textCenter" : "textStart"
                  }`}
                >
                  {d}
                </p>
              ))}
            </div>
            <div
              className={`row mb2 mt2 w100 ${
                context.inShrink && "center"
              }`}
            >
              <a
                style={{ textDecoration: "none" }}
                className="p2 accentButton row center middle w100"
                target="_blank"
                href={`/${project?.type || ""}`}
              >
                <Icon name="link" className="mr2" />
                More {project?.type}
              </a>
            </div>
          </div>

          <div className="div20" />
          
          <div
            className={`mb2 middle ${
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
