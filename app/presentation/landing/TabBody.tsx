import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";

export interface TabBodyProps {
    children: any;
    color: string
}

/******************************
 * TabBody component
 * @todo Create description
 */
export function TabBody({children, color}: TabBodyProps) {
  const context: SharedContextProps = useOutletContext();

  return <div className="boxed vh100 r0" style={{background: color}}>
    <div className="pt3">{children}</div>
  </div>;
}
