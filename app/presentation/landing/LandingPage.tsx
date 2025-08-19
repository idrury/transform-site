import { Project, type SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import CircularGallery from "./CircularGallery";
import { Icon } from "../elements/Icon";
import { DesignTab } from "./DesignTab";
import { MediaTab } from "./MediaTab";
import { SoftwareTab } from "./SoftwareTab";
import { ContactTab } from "./ContactTab";
import { ProjectInfoPopup } from "./ProjectInfoPopup";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "~/data/Objects";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import HeaderText from "./HeaderText";

export interface LandingPageProps {}

/******************************
 * LandingPage component
 * @todo Create description
 */
export function LandingPage({}: LandingPageProps) {
  const context: SharedContextProps = useOutletContext();
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [viewProjectActive, setViewProjectActive] = useState(false);
  const titleSplit = useRef(null);
  const navigate = useNavigate();

  gsap.registerPlugin(SplitText);

  useEffect(() => {
    setTimeout(() => {
      onDotsHover();
    }, 3000);
  }, []);

  /*******************************************************
   * GSAP
   */
  useGSAP(() => {
    let tl = gsap.timeline();

    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create("#title", {
        type: "words",
      });

      tl.to("#title", { opacity: 1 }, 1.5).fromTo(
        titleSplit.words,
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
        },
        "-=1"
      );
    });

    tl.from(
      "#ellipse-1",
      {
        y: "-30px",
        ease: "bounce.out",
        duration: 0.6,
        opacity: 0,
      },
      1
    )
      .from(
        "#ellipse-2",
        {
          y: "-30px",
          ease: "bounce.out",
          duration: 0.6,
          opacity: 0,
        },
        "-=0.5"
      )
      .from(
        "#ellipse-3",
        {
          y: "-30px",
          ease: "bounce.out",
          duration: 0.6,
          opacity: 0,
        },
        "-=0.5"
      )
      .to(".lateFade", { opacity: 1, duration: 1, ease: "power3" });
  }, []);

  function onDotsHover() {
    let tl = gsap.timeline();
    tl.to("#ellipse-1", {
      y: "-=20px",
      ease: "power1.out",
      duration: 0.2,
    })
      .to(
        "#ellipse-2",
        {
          y: "-=20px",
          ease: "power1.out",
          duration: 0.2,
        },
        "-=0.15"
      )
      .to(
        "#ellipse-3",
        {
          y: "-=20px",
          ease: "power1.out",
          duration: 0.2,
        },
        "-=0.15"
      )
      .to("#ellipse-1", {
        y: "0",
        ease: "bounce.out",
        duration: 0.6,
      })
      .to(
        "#ellipse-2",
        {
          y: "0",
          ease: "bounce.out",
          duration: 0.6,
        },
        "-=0.5"
      )
      .to(
        "#ellipse-3",
        {
          y: "0",
          ease: "bounce.out",
          duration: 0.6,
        },
        "-=0.5"
      );
  }

  return (
    <div>
      <div className="col middle center">
        <div className="w50 col middle center">
          <div
            className="row middle center"
            style={{ zIndex: 1 }}
            onMouseEnter={() => onDotsHover()}
          >
            <Icon
              id="ellipse-1"
              name="ellipse"
              style={{ zIndex: 1 }}
              size={20}
              color="var(--primaryColor)"
            />
            <Icon
              id="ellipse-2"
              name="ellipse"
              size={20}
              color="var(--thirdColor)"
            />

            <Icon
              id="ellipse-3"
              name="ellipse"
              size={20}
              color="var(--secondaryColor)"
            />
          </div>
          <div style={{ minHeight: 50 }}>
            <HeaderText
              text={["Digital content for positive change."]}
              typingSpeed={50}
              className="m3"
              pauseDuration={500}
              showCursor={false}
              cursorCharacter="|"
              color="var(--primaryColor)"
              textColors={["var(--primaryColor)"]}
            />
          </div>
          <p
            id="title"
            className="p3 textCenter"
            style={{ opacity: 0 }}
          >
            On a mission to help a thousand Aussie organisations
            achieve meaningful change by crafting compelling online
            resources.
          </p>
          <div className="row center w50 m3">
            <button
              id="landing-software-button"
              className="row middle ml3 mr3 lateFade"
              style={{ opacity: 0 }}
              onClick={() => navigate("#software")}
            >
              <Icon name="code-outline" className="mr1" />
              Software
            </button>
            <button
              id="landing-media-button"
              className="row middle ml2 mr3 lateFade"
              style={{ opacity: 0 }}
              onClick={() => navigate("#media")}
            >
              <Icon name="film-outline" className="mr1" />
              Media
            </button>

            <button
              id="landing-design-button"
              className="row middle ml3 mr3 lateFade"
              style={{ opacity: 0 }}
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
            projects={PROJECTS.slice(0, 8)}
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
        <div style={{ minHeight: 150, width: 100 }} />
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
