import { useState, useRef, useLayoutEffect } from "react";
import { Icon } from "~/presentation/elements/Icon";
import type { IoniconName } from "~/data/Ionicons";

export interface Feature {
  className?: string;
  icon: { name: IoniconName; size: number };
  text: string;
  description: string[];
}

interface Props {
  features: Feature[];
}

export default function FeatureSelector({ features }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const btn = buttonRefs.current[selectedIndex];
    if (btn) {
      setPillStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [selectedIndex]);

  const selected = features[selectedIndex];

  return (
    <div className="col gap-20 w-100">
      <div style={{ position: "relative" }}>
        <div className="row gap-10 center wrap">
          {features.map((feature, index) => (
            <button
              key={index}
              ref={(el) => { buttonRefs.current[index] = el; }}
              className={`gap-10 center col middle ${feature.className ?? ""}`}
              style={{ width: 150,color: index===selectedIndex ? "var(--primaryColor)" : undefined }}
              onClick={() => setSelectedIndex(index)}
            >
              <Icon name={feature.icon.name} size={feature.icon.size} color={index===selectedIndex ? "var(--primaryColor)" : undefined} />
              {feature.text}
            </button>
          ))}
        </div>

        {/* Sliding pill indicator */}
        <div
          style={{
            position: "absolute",
            bottom: -8,
            left: pillStyle.left,
            width: pillStyle.width,
            height: 2,
            backgroundColor: "var(--primaryColor)",
            borderRadius: 999,
            transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* Description panel */}
      <div
        key={selectedIndex}
        className="col gap-10 center middle fade-sm w-100"
        style={{ minHeight: 80, textAlign: "center" }}
      >
        <div className="w-50">
          <div className="p-20">
            {selected.description.map((para, i) => (
              <h3 className="center mb-20" key={i}>{para}</h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
