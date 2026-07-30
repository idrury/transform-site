import { useEffect, useRef, useState } from "react";
import "../app-v2.css";
import FeatureSelector, {
  type FeatureSelectorHandle,
} from "~/presentation/software/FeatureSelector";
import SoftwareProjects from "~/presentation/software/SoftwareProjects";
import { AnimatedDots } from "~/presentation/elements/AnimatedDots";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext, useSearchParams } from "react-router";
import { ContactTab } from "~/presentation/landing/ContactTab";
import ReactPlayer from "react-player";
import { SavingCalculator } from "~/presentation/software/SavingCalculator";
import { CONTACT, FEATURES } from "~/data/Objects";
import { buildMeta, canonical, SITE_URL } from "~/business/seoBL";
import { SplashCursor } from "~/presentation/elements/SplashCursor";
import { GradualBlur } from "~/presentation/elements/GradualBlur";

import { Icon } from "~/presentation/elements/Icon";

const TITLE =
  "Nonprofit Website Development Adelaide | Transform Creative";
const DESCRIPTION =
  "Custom fundraising platforms for Australian charities — a Raisely & Funraisin alternative. Keep what your donors give instead of it going to a platform. Adelaide-based, nonprofit only.";

export function meta() {
  return buildMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: "/development",
    keywords:
      "custom donation platform Australia, custom fundraising website developer, Raisely alternative Australia, Funraisin alternative, reduce fundraising platform fees, nonprofit website development Adelaide, peer-to-peer fundraising platform Australia",
    twitterDescription:
      "Custom fundraising platforms for Australian charities — a Raisely & Funraisin alternative. Adelaide-based, nonprofit only.",
  });
}

export const links = () => [canonical("/development")];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom fundraising platform development",
  serviceType: "Custom fundraising platform development",
  description: DESCRIPTION,
  url: `${SITE_URL}/development`,
  areaServed: ["Australia", "South Australia"],
  audience: {
    "@type": "Audience",
    audienceType: "Nonprofits and charities",
  },
  provider: {
    "@type": "Organization",
    name: "Transform Creative",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adelaide",
      addressRegion: "SA",
      addressCountry: "AU",
    },
  },
};

export default function DevelopmentRoute() {
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const savingsRef = useRef<HTMLDivElement>(null);
  const context: SharedContextProps = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  // Page-wide CTA into the feature popout — hidden while it's open so it
  // doesn't sit on top of the popout's own controls.
  const featureSelector = useRef<FeatureSelectorHandle>(null);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  // The CTA rides in once the hero is scrolled past, and steps back out of the
  // way as the page bottoms out so the footer is readable.
  useEffect(() => {
    const onScroll = () => {
      const fromBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);
      setCtaInView(
        window.scrollY > window.innerHeight * 0.7 &&
          fromBottom >= 100,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (searchParams.get("section") !== "savings") return;
    const top =
      (savingsRef.current?.getBoundingClientRect().top ?? 0) +
      window.scrollY -
      100;
    window.scrollTo({ top, behavior: "smooth" });
  }, [searchParams]);

  // React player vars
  const reactPlayer = useRef(null);
  const [playerPlay, setPlayerPlay] = useState(true);
  const [playerMuted, setPlayerMuted] = useState(true);

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create("#dev-header", {
        type: "words",
      });
      gsap.from(titleSplit.words, {
        scrollTrigger: {
          scrub: 1,
          start: "70vh",
          end: context.inShrink ? "+800" : "+1000",
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

  return (
    <div
      style={{ minHeight: "85vh" }}
      className="col middle center gap-20"
    >
      {/* Pointer-trailing fluid sim. Click-through, and skipped entirely
                below the 1200px breakpoint — it repaints every frame. */}
      <SplashCursor
        DENSITY_DISSIPATION={1}
        VELOCITY_DISSIPATION={3}
        CURL={1}
        SPLAT_FORCE={2500}
        RAINBOW_MODE={false}
        COLOR="#2d3625"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <div className="center col middle w-100">
        <div
          className="col middle center"
          style={{ minHeight: "90vh" }}
        >
          <div
            className="r-default absolute clip media-scrim media-blur-center"
            style={{
              top: 95,
              left: 5,
              right: 5,
              height: "calc(100vh - 100px)",
            }}
          >
            <ReactPlayer
              src="https://hzfjmmakqwsmucxorhlb.supabase.co//storage/v1/object/public/transform/Software-video.mp4"
              ref={reactPlayer}
              onClick={() => {
                setPlayerMuted(!playerMuted);
                !playerPlay && setPlayerPlay(true);
              }}
              className="media-cover r-default"
              width="100%"
              height="100%"
              muted={playerMuted}
              loop
              playing={playerPlay}
            />
          </div>
          <div className="row middle between w-100 gap-20 shrink-col">
            <div
              className="col gap-20 middle shrink-col mb-20 pb-20"
              style={{ zIndex: 10 }}
            >
              <AnimatedDots autoPlayDelay={3000} />

              <div className="pl-20 pr-20 col middle gap-10">
                <h1
                  className="shrink-col textCenter w-75"
                  style={{ color: "var(--accent-sm)" }}
                >
                  Own your{" "}
                  <strong style={{ fontWeight: 600 }}>
                    fundraising platform
                  </strong>
                  . Maximise your mission.
                </h1>
                <p
                  className="textCenter w-75 mt-10 mb-10"
                  style={{ color: "var(--accent-sm)" }}
                >
                  <b style={{ fontWeight: 600 }}>
                    Custom fundraising platforms
                  </b>{" "}
                  for Australian charities that redirect third-party
                  fees back{" "}
                  <b style={{ fontWeight: 600 }}>to your cause</b>.
                </p>
              </div>
              <div className="w-50">
                <div className="row gap-10 shrink-col ml-20 mr-20 ">
                  <button
                    className="accent row center gap-5 middle w-50"
                    onClick={() =>
                      setSearchParams({ section: "savings" })
                    }
                  >
                    <Icon name="arrow-down" size={16} />
                    What could my org save?
                  </button>
                  {/* {{TODO: Isaac to confirm the existing Google Calendar
                      appointment link is the right destination for a
                      "15-min fee audit", or supply a different one}} */}
                  <a
                    className="outline-secondary row middle gap-5  w-50 center                 "
                    role="button"
                    style={{
                      color: "var(--accent-sm)",
                      background: "none",
                    }}
                    href={CONTACT.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      name="link"
                      size={16}
                      color="var(--accent-sm)"
                    />
                    Book your free demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-20 mr-20  col middle">
          <div
            className="w-75 mb-20 pb-20 mt-20 pt-20 gap-10 col middle center"
            ref={savingsRef}
          >
            <h2
              className="textCenter accent mb-10 w-75"
              style={{ color: "var(--txt)" }}
            >
              We're on a mission to help Aussie non-profits{" "}
              <strong>make donations go further.</strong>
            </h2>
            <p
              className="textCenter accent mb-10 w-75"
              style={{ color: "var(--txt)" }}
            >
              Third-party platforms nudge your donors to chip in extra
              "to cover costs" — and pocket it. On a platform you own,{" "}
              <strong style={{ color: "var(--accent)" }}>
                that generosity stays with your cause
              </strong>
              .
            </p>
            <SavingCalculator />
          </div>
        </div>
      </div>
      <div
        className="horizontal-line mediumFade "
        style={{ top: -30, marginTop: 50, marginBottom: 30 }}
      />
      {/* w-100 (not margins) so this column has a definite width — otherwise it
          shrink-wraps the grid and the whole panel resizes per category */}
      <div className="m-20">
        <div className="w-100 col middle">
          <div
            className="w-75 center boxed accent"
            ref={featureSectionRef}
          >
            <div className="m-20">
              <FeatureSelector
                features={FEATURES}
                ref={featureSelector}
                onOpenChange={setFeaturesOpen}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="horizontal-line mediumFade "
        style={{ marginTop: 50, marginBottom: 0 }}
      />
      <div
        className="col middle w-100"
        ref={examplesRef}
        style={{ overflow: "clip" }}
      >
        <h2
          className="textCenter"
          style={{ margin: "50px 0 0px 0", color: "var(--txt)" }}
        >
          Custom fundraising platforms{" "}
          <b
            className=""
            style={{ fontWeight: 600, color: "var(--accent)" }}
          >
            we've built.
          </b>
        </h2>
        <p
          className="pb-20 pt-5"
          style={{ color: "var(--accent-lg)" }}
        >
          And are secretly really proud of...
        </p>
        <SoftwareProjects />
      </div>

      <div
        className="horizontal-line mediumFade"
        style={{ top: 0, marginTop: 100, marginBottom: 80 }}
      />

      <div className="w-100 col middle">
        <ContactTab headerText="Book a 30 minute discovery call" />
      </div>

      <button
        className={`accent row middle center gap-5 floating-cta s-10 outline ${
          featuresOpen || !ctaInView ? "faded-out" : ""
        }`}
        onClick={() => featureSelector.current?.openFirst()}
      >
        <Icon name="sparkles" size={16} color="var(--bkg)" />
        Features we offer
      </button>
      {/* Edge blurs. Both sit under the header, footer and popups
          (zIndex 10), so only page content is softened.
          Each layer is its own backdrop-filter pass, so the counts are
          kept low and both are dropped on mobile, where stacked
          backdrop-filters on fixed elements cost the most. */}
      <GradualBlur
        target="page"
        position="top"
        height="8rem"
        strength={1}
        divCount={3}
        curve="bezier"
        animated
        duration="1.5s"
        disableOnShrink
      />
      <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        strength={1.5}
        divCount={5}
        curve="bezier"
        exponential
        animated
        duration="1.5s"
        disableOnShrink
      />
    </div>
  );
}
