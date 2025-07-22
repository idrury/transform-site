import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { useState } from "react";
import { TabBody } from "./TabBody";
import { DesignTab } from "./DesignTab";
import { tabColors } from "~/data/Objects";
import { SoftwareTab } from "./SoftwareTab";
import { MediaTab } from "./MediaTab";

export interface TabPanelProps {}

const tabStyles = {
  borderRadius: "10px 10px 0 0",
  padding: "30px 0",
};

/******************************
 * TabPanel component
 * @todo Create description
 */
export function TabPanel({}: TabPanelProps) {
  const [panel, setPanel] = useState<string>("media");
  const context: SharedContextProps = useOutletContext();

  return (
    <div>
      <div className="middle between row">
        <div
          className="boxed w100 p2 clickable"
          style={{ background: tabColors.media, ...tabStyles }}
          onClick={() => setPanel("media")}
        >
          <h4>Media</h4>
        </div>
        <div
          className="boxed w100 p2 clickable"
          style={{ background: tabColors.software, ...tabStyles }}
          onClick={() => setPanel("software")}
        >
          <h4>Software</h4>
        </div>
        <div
          onClick={() => setPanel("design")}
          className="boxed w100 p2 clickable"
          style={{ background: tabColors.design, ...tabStyles }}
        >
          <h4>Design</h4>
        </div>
      </div>
      {panel == "design" && <DesignTab color={tabColors.design} />}
      {panel == "software" && (
        <SoftwareTab color={tabColors.software} />
      )}
      {panel == "media" && <MediaTab color={tabColors.media} />}
    </div>
  );
}
