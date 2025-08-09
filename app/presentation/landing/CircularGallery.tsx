import { useEffect, useRef, useState } from "react";
import "./CircularGallery.css";
import { Project } from "~/data/CommonTypes";
import { Icon } from "../elements/Icon";
import { projectToIcon } from "~/business/commonBL";

interface CircularGalleryProps {
  projects: Project[];
  onProjectClick: (id: number) => void;
}

export default function CircularGallery({
  projects,
  onProjectClick,
}: CircularGalleryProps) {
  const [hoveredImage, setHoveredImage] = useState<number>();
  const [galleryProjects, setGalleryProjects] = useState<Project[]>([
    ...projects,
    ...projects,
  ]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
      const galleryProjects = [...projects, ...projects];

  }, [projects]);

  const scrollerCss = `scroller__inner paused fast`;

  return (
    <div className={ `scroller scroll`}>
      <div className={`${scrollerCss}`}>
        {galleryProjects.map((img, idx) => (
          <div
            key={`${img.id} - ${idx}`}
            /*@ts-ignore*/
            ref={(el) => (itemRefs.current[idx] = el)}
            className="container clickable"
            onMouseOver={() => setHoveredImage(img.id)}
            onMouseOut={() => setHoveredImage(undefined)}
            onClick={() => onProjectClick(img.id)}
          >
            {hoveredImage == img.id && (
              <div className="">
                <h3
                  style={{ zIndex: 20, color: "#e9e9e9" }}
                  className="overlayDiv mediumFade"
                >
                  <Icon name={projectToIcon(img.type)} color="#e9e9e9" className="mr2"/>
                  {img.name}
                </h3>
                <div
                  className="overlayDiv"
                  style={{
                    opacity: 0.3,
                    zIndex: 10,
                    background: "var(--smallAccent)",
                  }}
                />
              </div>
            )}
            <img
              style={{
                width: 400,
                height: 250,
                zIndex: 1,
              }}
              src={`${img.images[0]}`}
              alt={`image of ${img.description}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
