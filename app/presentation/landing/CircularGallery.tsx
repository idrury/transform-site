import { useEffect, useState } from "react";
import "./CircularGallery.css";
import { Project } from "~/data/CommonTypes";

interface CircularGalleryProps {
  projects:Project[];
  onProjectClick: (id:number) => void;
}

export default function CircularGallery({
  projects,
  onProjectClick,
}: CircularGalleryProps) {
  const [hoveredImage, setHoveredImage] =
    useState<number>();

  useEffect(() => {
    const scrollers =
      document.querySelectorAll(".scroller");

    if (
      !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      scrollers.forEach((scroller) => {
        const scrollerInner =
          scroller.querySelector(
            ".scroller__inner"
          );

        if (!scrollerInner) return;

        const scrollerContent = Array.from(
          scrollerInner.children
        );

        console.log(scrollerInner.children)

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(
            true
          ) as HTMLElement;
          duplicatedItem.setAttribute(
            "aria-hidden",
            "true"
          );
          scrollerInner.appendChild(
            duplicatedItem
          );
        });
      });
    }


    // Cleanup function to remove animation and duplicated nodes
    return () => {
      scrollers.forEach((scroller) => {
        const scrollerInner =
          scroller.querySelector(
            ".scroller__inner"
          );
        if (!scrollerInner) return;
        // Remove all nodes with aria-hidden="true"
        Array.from(
          scrollerInner.children
        ).forEach((child) => {
          if (
            (child as HTMLElement).getAttribute(
              "aria-hidden"
            ) === "true"
          ) {
            scrollerInner.removeChild(child);
          }
        });
      });
    };
  }, [projects]);

  return (
    <div className={`scroller scroll slow`}>
      <div className="scroller__inner">
        {projects.map((img, id) => (
          <div
            key={id}
            className="container clickable"
            onMouseOver={() =>
              setHoveredImage(id)
            }
            onMouseOut={() =>
              setHoveredImage(undefined)
            }
            onClick={() => onProjectClick(id)}
          >
            {hoveredImage == id && (
              <div className="">
                <h3
                  style={{ zIndex: 20 }}
                  className="overlayDiv mediumFade"
                >
                  {img.name}
                </h3>
                <div
                  className="overlayDiv"
                  style={{
                    opacity: 0.3,
                    zIndex: 10,
                    background:
                      "var(--smallAccent)",
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
