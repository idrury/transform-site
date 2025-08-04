import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import IonIcon from "@reacticons/ionicons";
import { IoniconName } from "~/data/Ionicons";
import { CSSProperties } from "react";

export interface IconProps {
  name: IoniconName;
  style?:CSSProperties
  size?: number;
  color?:string;
  onClick?: () => void;
  className?: string;
}

/******************************
 * Icon component
 * @todo Create description
 */
export function Icon({
  name,
  style,
  color="var(--text)",
  className = "",
  size = 12,
  onClick
}: IconProps) {
  const context: SharedContextProps = useOutletContext();

  return (
    <div>
      <IonIcon
      onClick={() => onClick && onClick()}
        name={name}
        className={`${onClick && "clickable"} ${className}`}
        style={{
          ...style,
          height: `${size}pt`,
          width: `${size}pt`,
          display: "flex",
          color: color
        }}
      />
    </div>
  );
}
