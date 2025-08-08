import type {
  ActivatableElement,
  Project,
  SharedContextProps,
} from "~/data/CommonTypes";

import "./landing.css";
import BasicMenu from "../elements/BasicMenu";

export interface ProjectInfoPopupProps
  extends ActivatableElement {
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
  if (!project) return;

  return (
    <BasicMenu
      width={"90%"}
      active={active}
      onClose={() => onClose()}
    >
      <div>
        <div className="row between">
            <h4 className="mb2">{project.name}</h4>
               {project.link && (
          <div className="row middle center mb2 mt2">
              <a
              style={{textDecoration: "none"}}
                className="p2 accentButton"
                target="_blank"
                href={project.link}
              >
                View {project.name} at site
              </a>
          </div>
        )}
        </div>
        <div className="grid mb2">
          {project.images?.map((img) => (
            <div>
              <img
                style={{ width: "100%" }}
                src={img}
              />
            </div>
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </BasicMenu>
  );
}
