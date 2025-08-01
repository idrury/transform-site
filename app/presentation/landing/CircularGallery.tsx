import { useEffect, useState } from "react";
import "./CircularGallery.css";

interface CircularGalleryProps {
  images: { image: string; text: string }[];
}

export default function CircularGallery({
  images,
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
        scroller.removeAttribute("data-animated");
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
  }, [images]);

  return (
    <div
      className={`scroller scroll slow`}
    >
      <div className="scroller__inner">
        {images.map((img, id) => (
          <div
          key={id}
            className="container clickable"
            onMouseOver={() =>
              setHoveredImage(id)
            }
            onMouseOut={() =>
              setHoveredImage(undefined)
            }
          >
            {hoveredImage == id && (
              <div className="">
                <h3
                  style={{ zIndex: 20 }}
                  className="overlayDiv mediumFade"
                >
                  {img.text}
                </h3>
                <div
                  className="overlayDiv"
                  style={{
                    opacity: 0.3,
                    zIndex: 10,
                    background: "var(--smallAccent)"
                  }}
                />
              </div>
            )}
            <img
              style={{ width: 400, height: 250,zIndex:1 }}
              src={`${img.image}`}
              alt={`image of ${img.text}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
