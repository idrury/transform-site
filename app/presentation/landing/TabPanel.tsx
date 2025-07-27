import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { useState } from "react";
import { TabBody } from "./TabBody";
import { DesignTab } from "./DesignTab";
import { tabColors } from "~/data/Objects";
import { SoftwareTab } from "./SoftwareTab";
import { MediaTab } from "./MediaTab";
import { Icon } from "../elements/Icon";

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
  const [panel, setPanel] =
    useState<string>("media");
  const context: SharedContextProps =
    useOutletContext();

  return (
    <div className="ml2 mr2">
      <div className="middle between row">
        <div
          className="boxed w100 p2 clickable"
          style={{
            background: tabColors.media,
            ...tabStyles,
          }}
          onClick={() => setPanel("media")}
        >
          <h4
            className="middle center"
            style={{ color: "var(--background)" }}
          >
            <Icon
              name="videocam"
              color={"var(--background)"}
              size={23}
              className="mr2"
            />{" "}
            Media
          </h4>
        </div>
        <div
          className="boxed w100 p2 clickable"
          style={{
            background: tabColors.software,
            ...tabStyles,
          }}
          onClick={() => setPanel("software")}
        >
          <h4
            style={{ color: "var(--background)" }}
          >
            Software
          </h4>
        </div>
        <div
          onClick={() => setPanel("design")}
          className="w100 p2 clickable"
          style={{
            background: tabColors.design,
            ...tabStyles,
          }}
        >
          <h4
            style={{ color: "var(--background)" }}
          >
            Design
          </h4>
        </div>
      </div>
      {panel == "design" && (
        <DesignTab color={tabColors.design} />
      )}
      {panel == "software" && (
        <SoftwareTab color={tabColors.software} />
      )}
      {panel == "media" && (
        <MediaTab color={tabColors.media} />
      )}
    </div>
  );
}
