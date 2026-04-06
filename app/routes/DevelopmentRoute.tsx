import { useRef } from "react";
import { Icon } from "~/presentation/elements/Icon";
import { Route } from "../+types/root";
import "../app-v2.css";
import FeatureSelector, {
  type Feature,
} from "~/presentation/software/FeatureSelector";
import SoftwareProjects from "~/presentation/software/SoftwareProjects";
import { FeeStructure } from "~/presentation/software/FeeStructure";
import { AnimatedDots } from "~/presentation/elements/AnimatedDots";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import HeaderText from "~/presentation/landing/HeaderText";
import { ScrollMoreButton } from "~/presentation/elements/ScrollMoreButton";
import { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { ContactTab } from "~/presentation/landing/ContactTab";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Software Development in adelaide" },
    {
      name: "description",
      content:
        "Lightning fast, secure sites that build trust by reflecting not for profits true brand identity.",
    },
  ];
}

export default function DevelopmentRoute() {
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const feeStructureRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const headerTextRef = useRef<HTMLHeadingElement>(null);
  const context: SharedContextProps = useOutletContext();

  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create("#dev-header", {
        type: "words",
      });
      gsap.from(titleSplit.words, {
        scrollTrigger: {
          scrub: 1,
          start: "85vh",
          end: context.inShrink ? "+400" : "+1000",
          toggleActions: "pause pause reverse pause",
        },
        opacity: 0,
        y: -10,
        stagger: 0.2,
      });
    });

    gsap.fromTo(
      "#dev-more-btn",
      { opacity: 0, y: -10 },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
      },
    );
  }, []);

  const buttons: Feature[] = [
    {
      className: "center col middle",
      icon: { name: "card-outline", size: 50 },
      text: "No exorbitant 'platform fee'",
      description: [
        "'Percentage based' giving platforms make it easy to get started, but that ~4% fee adds up as you scale.",
        "We charge a modest fee, not a percentage of your donations, so you keep more of the money you raise.",
      ],
      component: (
        <div className="col middle ">
          <button
            className="row middle center gap-5 accentButton"
            onClick={() => {
              const top =
                (feeStructureRef.current?.getBoundingClientRect()
                  .top ?? 0) +
                window.scrollY -
                100;
              window.scrollTo({ top, behavior: "smooth" });
            }}
          >
            <Icon name="arrow-down" />
            Find out more about our pricing structure
          </button>
        </div>
      ),
    },

    {
      className: "center col middle",
      icon: {
        name: "sparkles-outline",
        size: 50,
      },
      text: "Your dream features",
      description: [
        "Your out of the box giving solution is generic - it can't support all of your amazing ideas. (We can).",
        "If you're sick of your admin team telling you 'it's not possible with the current system', let's chat.",
      ],
      component: (
        <ContactTab
          headerText="Let's chat."
          buttonText="Book a 'no obligations' chat."
          showHeader={false}
        />
      ),
    },
    {
      className: "center col middle",
      icon: {
        name: "lock-closed-outline",
        size: 50,
      },
      text: "Security customised for you",
      description: [
        "We know exactly how your users' data is stored and what's required to keep it safe.",
        "As your database grows you become a bigger target. Generic providers give you generic security. We take an active role in protecting you.",
      ],
      component: (
        <ContactTab
          headerText="Let's chat."
          buttonText="Book a 'no obligations' chat."
          showHeader={false}
        />
      ),
    },
    {
      className: "center col middle",
      icon: { name: "people-outline", size: 50 },
      text: "Face to face support",
      description: [
        "Our local team is here to help you, (and your clients).",
        "No more waiting on hold... Send us a 'slack message' and have your problems fixed in minutes.",
      ],
      component: (
        <ContactTab
          headerText="Let's chat."
          buttonText="Book a 'no obligations' chat."
          showHeader={false}
        />
      ),
    },
    {
      className: "center col middle",
      icon: { name: "flash-outline", size: 50 },
      text: "User focused optimisation",
      description: [
        "You current platform doesn't provide granular control over loading speed and dynamic user experience. (We do).",
        "In the modern era, a site that loads slowly can be the difference between a user making a donation or giving up. We're here to make sure your users get where you want them to.",
      ],
      component: (
        <div className="col middle ">
          <button
            className="row middle center gap-5 accentButton"
            onClick={() => {
              const top =
                (examplesRef.current?.getBoundingClientRect().top ??
                  0) +
                window.scrollY -
                100;
              window.scrollTo({ top, behavior: "smooth" });
            }}
          >
            <Icon name="arrow-down" />
            See examples of how we've helped other organisations
          </button>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{ minHeight: "85vh" }}
      className="col middle center gap-20 m-20 "
    >
      <div className="w-100 center col middle gap-20">
        <AnimatedDots autoPlayDelay={0} />
        <div className="col middle center" style={{ height: "70vh" }}>
          <HeaderText
            text={["Software development"]}
            typingSpeed={50}
            pauseDuration={500}
            showCursor={true}
            cursorCharacter="|"
            color="var(--accent)"
            textColors={["var(--accent)"]}
            as="h2"
            className="center"
          />
          <ScrollMoreButton
            id="dev-more-btn"
            targetRef={headerTextRef}
            label="More info"
            offset={context.inShrink ? 150 : 100}
          />
        </div>
        <div className="w-50">
          <h2
            id="dev-header"
            ref={headerTextRef}
            className=""
            style={{ textAlign: "center" }}
          >
            We love working with <b>Aussie not for profits</b> to
            create lightning fast, secure sites that{" "}
            <b>build trust</b> by reflecting your true brand identity.
          </h2>
        </div>

        <div className="" style={{ height: 100 }} />
      </div>
      <div
        className="horizontal-line mediumFade"
        style={{ top: -30 }}
      />
      <div className="w-75 center" ref={featureSectionRef}>
        <div className="p-20 w-100">
          <FeatureSelector features={buttons} />
        </div>
      </div>

      <div
        className="horizontal-line mediumFade mt-20"
        style={{ top: 0 }}
      />

      <div className="col middle" ref={examplesRef}>
        <SoftwareProjects />
      </div>

      <div
        className="horizontal-line mediumFade mb-20"
        style={{ top: 0 }}
      />

      <div className="w-75" ref={feeStructureRef}>
        <FeeStructure />
      </div>

      <div
        className="horizontal-line mediumFade"
        style={{ top: 0, marginTop: 100, marginBottom: 80 }}
      />

      <div className="w-100 col middle">
        <ContactTab />
      </div>
    </div>
  );
}
