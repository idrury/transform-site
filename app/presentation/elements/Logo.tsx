import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";

export interface LogoProps {
  size?: number;
}

/******************************
 * Logo component
 * @todo Create description
 */
export function Logo({ size = 100 }: LogoProps) {
  const context: SharedContextProps = useOutletContext();

  return (
    <div>
      <div className="row">
        <div
          style={{
            height: size * 2,
            width: size * 2,
            marginRight: `${Math.round(size / 5)}px`,
          }}
        >
          <img
            className=""
            style={{ height: `${(size * 2)}px`, width: `${(size * 2)}px` }}
            src="app/assets/transform-icon-color.png"
          />
        </div>
        <div>
          <h1
            className="mt3"
            style={{
              padding: 0,
              margin: 0,
              color: "var(--primaryColor)",
              fontSize: `${size}pt`,
            }}
          >
            Transform
          </h1>
          <h2
            style={{
              fontWeight: 400,
              fontSize: `${Math.round(size / 2)}pt`,
              color: "var(--primaryColor)",
            }}
          >
            Creative
          </h2>
        </div>
      </div>
    </div>
  );
}
