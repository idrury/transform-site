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
        
      </div>
    </div>
  );
}
