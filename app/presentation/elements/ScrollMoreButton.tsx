import { Icon } from "./Icon";

export interface ScrollMoreButtonProps {
  targetRef: React.RefObject<HTMLElement | null>;
  label?: string;
  id?: string;
  offset?: number;
  className?: string;
}

export function ScrollMoreButton({
  targetRef,
  label = "More info",
  id,
  offset = 70,
  className = "row gap-5 middle",
}: ScrollMoreButtonProps) {
  return (
    <button
      id={id}
      className={className}
      onClick={() => {
        const top =
          (targetRef.current?.getBoundingClientRect().top ?? 0) +
          window.scrollY -
          offset;
        window.scrollTo({ top, behavior: "smooth" });
      }}
    >
      <Icon name="arrow-down" />
      {label}
    </button>
  );
}
