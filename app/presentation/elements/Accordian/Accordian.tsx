import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import gsap from "gsap";
import "./accordian.css";

export interface AccordianItem {
  /** Row heading */
  title: string;
  /** Body — an array of paragraphs, or any node you want rendered */
  content: ReactNode | string[];
  /** Optional leading node: an icon, a tile, an avatar … */
  icon?: ReactNode;
  /** Only needed when two rows share a title */
  id?: string;
}

export interface AccordianProps {
  items: AccordianItem[];
  /** Hairline between rows. Default true. */
  lines?: boolean;
  /** Prefix each title with "1", "2", … Default false. */
  numbered?: boolean;
  /** Chevron on the right of each row. Default true. */
  chevron?: boolean;
  /** Allow more than one row open at a time. Default false. */
  multiple?: boolean;
  /** Rows open before any interaction (uncontrolled use only). */
  defaultOpen?: number | number[];
  /** Hovering a row opens it, as well as clicking. Default false. */
  openOnHover?: boolean;
  /** Controlled mode — the rows currently open. Omit to let the accordian own it. */
  openIndexes?: number[];
  /** Fires with the row that was toggled and the resulting open set. */
  onToggle?: (index: number, open: number[]) => void;
  /** Open/close animation length in seconds. Default 0.35. */
  duration?: number;
  className?: string;
}

const toArray = (value?: number | number[]) =>
  value === undefined ? [] : Array.isArray(value) ? value : [value];

/******************************
 * Accordian component
 * A stack of rows that each open to reveal their content. Self-contained —
 * it needs only React, GSAP and the sibling accordian.css, so the folder can
 * be dropped into any project as-is. Works uncontrolled, or controlled via
 * `openIndexes` + `onToggle` when something outside it (a rail, a search box)
 * decides what is open.
 */
export function Accordian({
  items,
  lines = true,
  numbered = false,
  chevron = true,
  multiple = false,
  defaultOpen,
  openOnHover = false,
  openIndexes,
  onToggle,
  duration = 0.35,
  className = "",
}: AccordianProps) {
  const controlled = openIndexes !== undefined;
  const [internalOpen, setInternalOpen] = useState<number[]>(() =>
    toArray(defaultOpen),
  );
  const open = controlled ? openIndexes : internalOpen;

  const setOpen = (index: number, shouldOpen: boolean) => {
    const next = shouldOpen
      ? multiple
        ? [...open.filter((i) => i !== index), index]
        : [index]
      : open.filter((i) => i !== index);

    if (!controlled) setInternalOpen(next);
    onToggle?.(index, next);
  };

  return (
    <div className={`accordian ${lines ? "" : "no-lines"} ${className}`}>
      {items.map((item, index) => {
        const isOpen = open.includes(index);

        return (
          <AccordianRow
            key={item.id ?? item.title}
            item={item}
            index={index}
            isOpen={isOpen}
            numbered={numbered}
            chevron={chevron}
            duration={duration}
            onSelect={() => setOpen(index, !isOpen)}
            onHover={() => openOnHover && !isOpen && setOpen(index, true)}
          />
        );
      })}
    </div>
  );
}

interface RowProps {
  item: AccordianItem;
  index: number;
  isOpen: boolean;
  numbered: boolean;
  chevron: boolean;
  duration: number;
  onSelect: () => void;
  onHover: () => void;
}

/** One row — owns the GSAP tween on its own panel. */
function AccordianRow({
  item,
  index,
  isOpen,
  numbered,
  chevron,
  duration,
  onSelect,
  onHover,
}: RowProps) {
  const panel = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useLayoutEffect(() => {
    const element = panel.current;
    if (!element) return;

    // First pass just sets the resting state, so nothing animates on mount.
    if (!mounted.current) {
      mounted.current = true;
      gsap.set(element, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      });
      return;
    }

    gsap.killTweensOf(element);
    gsap.to(element, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration,
      ease: "power2.inOut",
    });
  }, [isOpen, duration]);

  const paragraphs = Array.isArray(item.content) ? item.content : null;

  return (
    <article className="accordian-row" onMouseEnter={onHover}>
      <button
        type="button"
        className="accordian-head"
        aria-expanded={isOpen}
        aria-controls={`accordian-panel-${index}`}
        onClick={onSelect}
      >
        {item.icon}
        {numbered && <b className="accordian-number">{index + 1}</b>}
        <h3 className="accordian-title">{item.title}</h3>
        {chevron && (
          <svg
            className={`accordian-chevron ${isOpen ? "open" : ""}`}
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </button>

      <div
        ref={panel}
        id={`accordian-panel-${index}`}
        className="accordian-panel"
      >
        <div className="accordian-body">
          {paragraphs
            ? paragraphs.map((para) => <p key={para}>{para}</p>)
            : (item.content as ReactNode)}
        </div>
      </div>
    </article>
  );
}

export default Accordian;
