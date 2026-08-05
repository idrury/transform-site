import { useMemo, useState } from "react";
import { useOutletContext } from "react-router";
import { SharedContextProps } from "~/data/CommonTypes";
import type { IoniconName } from "~/data/Ionicons";
import { Icon } from "~/presentation/elements/Icon";
import { Accordian } from "~/presentation/elements/Accordian/Accordian";
import FeatureInfo from "./FeatureInfo";
import type { Feature } from "./FeatureSelector";
import { CONTACT, HOW_IT_WORKS } from "~/data/Objects";
import "../../app-v2.css";

export interface HowItWorksStep {
  icon: IoniconName;
  /** Short wording for the left-hand rail */
  label: string;
  /** Card heading */
  title: string;
  description: string[];
  /** Reassurance line pinned under the body */
  note: string;
}

/** "01", "02", … — the counter shown beside each step. */
const stepNumber = (index: number) =>
  String(index + 1)

// The shrink popout reuses FeatureInfo, so each step is presented to it in
// the same shape as a feature.
const asFeature = (step: HowItWorksStep, index: number): Feature => ({
  icon: { name: step.icon, size: 50 },
  text: `${stepNumber(index)} — ${step.title}`,
  description: [...step.description],
  category: "How it works",
});

/******************************
 * HowItWorks component
 * The six-step process, as a rail of steps on the left and a stack of cards
 * on the right. Every card starts closed; hovering (or tapping) a step on the
 * rail opens its card. Below the shrink breakpoint the cards are dropped and
 * the rail opens the same content in a popout, as FeatureSelector does.
 */
export function HowItWorks() {
  const context: SharedContextProps = useOutletContext();
  const [active, setActive] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // On the rail: a popout on small screens, the card beside it on large ones.
  const select = (index: number) =>
    context.inShrink ? setOpenIndex(index) : setActive(index);

  // The steps as accordian rows — the icon tile is passed in as the row's
  // leading node so the accordian itself stays icon-library agnostic.
  const accordianItems = useMemo(
    () =>
      HOW_IT_WORKS.map((step) => ({
        title: step.title,
        content: [...step.description],
        icon: (
          <div className="icon-tile center middle">
            <Icon name={step.icon} size={18} color="var(--bkg)" />
          </div>
        ),
      })),
    [],
  );

  // Kept stable — FeatureInfo stores whatever feature it is handed, so a fresh
  // object every render would loop.
  const popoutStep = useMemo(
    () =>
      openIndex === null
        ? null
        : asFeature(HOW_IT_WORKS[openIndex], openIndex),
    [openIndex],
  );

  return (
    <div className="w-75 row gap-20 shrink-col ">
      {/* Left — headline + the step rail */}
      <div className="col gap-20 flex-card boxed p-20 m-20 outline-accent">
        <div className="col">
          <p className="m0" style={{color: 'var(--accent-lg)'}}>How it works</p>
          <h2 className={`${context.inShrink && "textCenter"} mt-10`}>
           Built for your <b style={{fontWeight: 600}}>biggest weekend</b>.
          </h2>
        </div>

        <div className="horizontal-line"/>

        <ul className="step-rail ml-10 col gap-20">
          {HOW_IT_WORKS.map((step, index) => (
            <li key={step.label}>
              <button
                className={`text-button step-muted row middle gap-10 ${
                  active === index ? "active" : ""
                }`}
                onMouseEnter={() =>
                  !context.inShrink && setActive(index)
                }
                onFocus={() => !context.inShrink && setActive(index)}
                onClick={() => select(index)}
              >
                <div
                  className={`step-dot ${active === index ? "active" : ""}`}
                />
                <p >{stepNumber(index)}</p>
                {step.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          className="accent row middle center gap-5 mt-10"
          role="button"
          href={CONTACT.bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="link" size={16} color="var(--bkg)" />
          Book a free discovery call
        </a>
      </div>

      {/* Right — the cards, closed until their step is picked */}
      {!context.inShrink && (
        <div className="col flex-card-2">
          <Accordian
            className="inset"
            items={accordianItems}
            numbered
            chevron={false}
            openOnHover
            openIndexes={active === null ? [] : [active]}
            onToggle={(index, open) =>
              setActive(open.includes(index) ? index : null)
            }
          />
        </div>
      )}

      {/* Shrink popout — same stepping controls as the feature board */}
      <FeatureInfo
        active={openIndex !== null}
        feature={popoutStep}
        index={openIndex}
        total={HOW_IT_WORKS.length}
        onClose={() => setOpenIndex(null)}
        onPrev={() =>
          setOpenIndex((i) => (i === null ? i : Math.max(0, i - 1)))
        }
        onNext={() =>
          setOpenIndex((i) =>
            i === null
              ? i
              : Math.min(HOW_IT_WORKS.length - 1, i + 1),
          )
        }
        hasPrev={openIndex !== null && openIndex > 0}
        hasNext={
          openIndex !== null && openIndex < HOW_IT_WORKS.length - 1
        }
      />
    </div>
  );
}
