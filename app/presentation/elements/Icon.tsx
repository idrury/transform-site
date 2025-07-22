import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import IonIcon from "@reacticons/ionicons";
import { IoniconName } from "~/data/Ionicons";

export interface IconProps {
  name: IoniconName;
  size?: number;
  isClickable?:boolean;
  className?: string;
}

/******************************
 * Icon component
 * @todo Create description
 */
export function Icon({ name, className="", size=10,isClickable=false }: IconProps) {
  const context: SharedContextProps = useOutletContext();

  return (
    <div>
      <IonIcon
        name={name}
        className={className}
        style={{ height: `${size}pt`, width: `${size}pt` }}
      />
    </div>
  );
}
