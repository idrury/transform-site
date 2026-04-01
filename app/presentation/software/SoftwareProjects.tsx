import { useState } from "react";
import { PROJECTS } from "~/data/Objects";
import type { Project } from "~/data/CommonTypes";
import { Icon } from "~/presentation/elements/Icon";
import { ProjectInfoPopup } from "~/presentation/landing/ProjectInfoPopup";

export default function SoftwareProjects() {
  const [project, setProject] = useState<Project>();
  const softwareProjects = PROJECTS.filter((p) => p.type === "software");

  return (
    <div className="col middle center gap-20 w-75 m-20">
      <h2>Projects we're proud of</h2>
      <div className="grid-auto w-100">
        {softwareProjects.map((p) => (
          <div
            key={p.id}
            style={{
              minWidth: 300,
              aspectRatio: "16/9",
              borderRadius: 5,
              position: "relative",
            }}
          >
            <Icon
              name="information-circle"
              onClick={() => setProject(p)}
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
              onClick={() => setProject(p)}
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
        onClose={() => setProject(undefined)}
        active={!!project}
      />
    </div>
  );
}
