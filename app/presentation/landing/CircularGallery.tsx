import { useEffect, useRef, useState } from "react";
import "./CircularGallery.css";
import { Project } from "~/data/CommonTypes";
import { Icon } from "../elements/Icon";
import { projectToIcon } from "~/business/commonBL";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  }, [projects]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#images-main",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power3",
      },
      2
    );
  }, []);

  const scrollerCss = `scroller__inner paused fast`;

  return (
    <div className={`scroller scroll`} id="images-main">
      <div className={`${scrollerCss}`}>
        {galleryProjects.map((img, idx) => (
          <div
            key={`${img.id} - ${idx}`}
            /*@ts-ignore*/
            ref={(el) => (itemRefs.current[idx] = el)}
            className="container clickable"
            onMouseOver={() => {
              setHoveredImage(img.id);
            }}
            onMouseOut={() => setHoveredImage(undefined)}
            onClick={() => onProjectClick(img.id)}
          >
            {hoveredImage == img.id && (
              <div className="">
                <h3
                  style={{ zIndex: 20, color: "#eeeeee" }}
                  className="overlayDiv mediumFade"
                >
                  <Icon
                    name={projectToIcon(img.type)}
                    color="#eeeeee"
                    className="mr2"
                  />
                  {img.name}
                </h3>
                <div
                  className="overlayDiv"
                  style={{
                    opacity: 0.6,
                    zIndex: 10,
                    background: "var(--primaryColor)",
                  }}
                />
              </div>
            )}
            <img
              className="gallery-image"
              style={{
                filter: `${
                  hoveredImage == img.id ? "contrast(0.8)" : "none"
                }`,
              }}
              src={`${img.images[0]}`}
              alt={`image of ${img.name} - a piece of digital content created by transform creative australia`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
