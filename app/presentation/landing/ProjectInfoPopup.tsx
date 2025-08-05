import type { ActivatableElement, SharedContextProps } from "~/data/CommonTypes";

import "./landing.css";
import BasicMenu from "../elements/BasicMenu";

export interface ProjectInfoPopupProps extends ActivatableElement {
name: string,
description: string,
images: string[],
link?:string

}

/******************************
 * ProjectInfoPopup component
 * @todo Create description
 */
export function ProjectInfoPopup({active, name, description, images, link,onClose}: ProjectInfoPopupProps) {

  return (
    <BasicMenu width={"100%"} active={active} onClose={() => onClose}>
        <div>
            <h2>{name}</h2>
            <div className="grid">
                {images.map(img => (
                    <div>
                        <img src={img}/>
                    </div>
                ))}
            </div>
            <p>{description}</p>
            {link && <button>
                </button>}
        </div>
    </BasicMenu>
  );
}
