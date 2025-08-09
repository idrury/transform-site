import type {
  ActivatableElement,
  Project,
  SharedContextProps,
} from "~/data/CommonTypes";

import "./landing.css";
import BasicMenu from "../elements/BasicMenu";
import { Icon } from "../elements/Icon";

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
  return (
    <BasicMenu
      width={"90%"}
      active={active}
      onClose={() => onClose()}
      zIndex={100}
    >
      <>
        <div className="row between">
          <h4 className="mb2 row middle" style={{textTransform: "capitalize"}}>
            <Icon
              name={
                project?.type == "media"
                  ? "film-outline"
                  : project?.type == "design"
                  ? "color-filter-outline"
                  : "code-outline"
              }
              className="mr2"
              size={35}
              color="var(--primaryColor)"
            />
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
        <div className="grid mb2">
          {project?.images?.map((img, idx) => (
            <div key={idx}>
              <img style={{ width: "100%", aspectRatio: "16 / 9" }} src={img} />
            </div>
          ))}
        </div>
        <p>{project?.description}</p>
      </>
    </BasicMenu>
  );
}
