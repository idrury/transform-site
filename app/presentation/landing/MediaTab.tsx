import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { TabBody } from "./TabBody";

export interface MediaTabProps {
  color: string;
}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function MediaTab({
  color,
}: MediaTabProps) {
  const context: SharedContextProps =
    useOutletContext();

  return (
    <TabBody color={color}>
      <h4>
        From fifteen seconds reels to full scale
        productions, we're passionate about
        creating videos that gain attention and
        generate traction
      </h4>
    </TabBody>
  );
}
