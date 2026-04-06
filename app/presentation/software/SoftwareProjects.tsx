import { useState } from "react";
import { PROJECTS } from "~/data/Objects";
import type { Project } from "~/data/CommonTypes";
import { Icon } from "~/presentation/elements/Icon";
import { ProjectInfoPopup } from "~/presentation/landing/ProjectInfoPopup";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

export default function SoftwareProjects() {
  const [project, setProject] = useState<Project>();
  const [infoActive, setInfoActive] = useState(false);
  const softwareProjects = PROJECTS.filter((p) => p.type === "software");

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create("#software-projects-title", { type: "words" });
      gsap.from(titleSplit.words, {
        scrollTrigger: {
          scrub: 1,
          trigger: "#software-projects-title",
          start: "top 95%",
          end: "top 40%",
          toggleActions: "pause pause reverse pause",
        },
        opacity: 0,
        y: -10,
        stagger: 0.2,
      });
    });

    gsap.from("#software-projects-grid > div", {
      scrollTrigger: {
        trigger: "#software-projects-grid",
        start: "top bottom",
        once: true,
      },
      opacity: 0,
      y: -10,
      stagger: 0.1,
      ease: "power3",
      duration: 0.6,
    });
  }, []);

  return (
    <div className="col middle center gap-20 w-75 m-20" style={{minHeight: "80vh"}}>
      <h2 id="software-projects-title" style={{textAlign: "center"}}>Projects we're proud of</h2>
      <div className="grid-auto w-100" id="software-projects-grid">
        {softwareProjects.map((p,idx) => (
          <div
            key={`${idx}-${p.id}`}
            style={{
              minWidth: 300,
              aspectRatio: "16/9",
              borderRadius: 5,
              position: "relative",
            }}
          >
            <Icon
              name="information-circle"
              onClick={() => {setProject(p); setInfoActive(true)}}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 10,
              }}
              color="var(--accent)"
              className="clickable boxed p1"
            />
            <img
              onClick={() => {setProject(p); setInfoActive(true)}}
              src={p.images[0]}
              style={{
                cursor: "pointer",
                height: "100%",
                width: "100%",
                borderRadius: 5,
                objectFit: "cover",
              }}
              alt={`Image for ${p.name} created by Transform Creative in Adelaide, South Australia`}
            />
          </div>
        ))}
      </div>
      <ProjectInfoPopup
        project={project}
        onClose={() => setInfoActive(false)}
        active={infoActive}
      />
    </div>
  );
}
