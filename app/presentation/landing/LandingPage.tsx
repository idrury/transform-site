import { Project, type SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import CircularGallery from "./CircularGallery";
import { Icon } from "../elements/Icon";
import { DesignTab } from "./DesignTab";
import { MediaTab } from "./MediaTab";
import { SoftwareTab } from "./SoftwareTab";
import { ContactTab } from "./ContactTab";
import { ProjectInfoPopup } from "./ProjectInfoPopup";
import { useState } from "react";

export interface LandingPageProps {}

const PROJECTS: Project[] = [
  {
    id: 0,
    name: "proj1",
    images: [
      `https://picsum.photos/seed/2/800/600?grayscale`,
      `https://picsum.photos/seed/3/800/600?grayscale`,
      `https://picsum.photos/seed/4/800/600?grayscale`,
    ],
    type: "software",
    description: "Bridge long text big img",
    link: "https://www.lightworksproductions.au",
  },
  {
    id: 1,
    type: "design",
    name: "proj 2",
    images: [`https://picsum.photos/seed/2/800/600?grayscale`],
    description: "Desk Setup",
  },
  {
    id: 2,
    name: "proj 3",
    type: "media",
    images: [`https://picsum.photos/seed/3/800/600?grayscale`],
    description: "Waterfall",
  },
  {
    id: 3,
    type: "software",
    name: "proj 4",
    images: [`https://picsum.photos/seed/4/800/600?grayscale`],
    description: "Strawberries",
  },
];

/******************************
 * LandingPage component
 * @todo Create description
 */
export function LandingPage({}: LandingPageProps) {
  const context: SharedContextProps = useOutletContext();
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [viewProjectActive, setViewProjectActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="vh80 col middle center">
        <div className="w50 col middle center">
          <div className="row middle center">
            <Icon
              name="ellipse"
              size={20}
              color="var(--primaryColor)"
            />
            <Icon
              name="ellipse"
              size={20}
              color="var(--thirdColor)"
            />

            <Icon
              name="ellipse"
              size={20}
              color="var(--secondaryColor)"
            />
          </div>
          <h2
            className="mt3 textCenter pl3 pr3"
            style={{
              color: "var(--primaryColor)",
            }}
          >
            Digital content that inspires change.
          </h2>
          <p className="p3 textCenter">
            We work with Aussie organisations to create media,
            software and designs that captivate your audience.
          </p>
          <div className="row center w50 m3">
            <button
              className="row middle ml2 mr3"
              onClick={() => navigate("#media")}
            >
              <Icon name="film-outline" className="mr1" />
              Media
            </button>
            <button
              className="row middle ml3 mr3"
              onClick={() => navigate("#software")}
            >
              <Icon name="code-outline" className="mr1" />
              Software
            </button>
            <button
              className="row middle ml3 mr3"
              onClick={() => navigate("#design")}
            >
              <Icon name="color-filter-outline" className="mr1" />
              Design
            </button>
          </div>
        </div>
      </div>
      <div className="col middle between pt2 pb2">
        <div className="mt3 w100">
          <CircularGallery
            projects={PROJECTS}
            onProjectClick={(id) => {
              setViewProjectActive(true);
              setSelectedProject(PROJECTS.find((p) => p.id == id));
            }}
          />
        </div>
      </div>
      <div className="col middle p3 mb3">
        <MediaTab />
        <SoftwareTab />
        <DesignTab />
        <ContactTab />
      </div>
      <ProjectInfoPopup
        active={viewProjectActive}
        project={selectedProject}
        onClose={() => {
          setViewProjectActive(false);
          setTimeout(() => setSelectedProject(undefined), 300);
        }}
      />
    </div>
  );
}
