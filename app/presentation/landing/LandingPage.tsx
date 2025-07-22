import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { TabPanel } from "./TabPanel";
import { BrandScroller } from "./BrandScroller";

export interface LandingPageProps {}

/******************************
 * LandingPage component
 * @todo Create description
 */
export function LandingPage({}: LandingPageProps) {
  const context: SharedContextProps = useOutletContext();

  return (
    <div>
      <div className="vh50 boxedAccent col middle center">
        <h1>Transform Creative</h1>
        <h4 className="mt3">
          Impactful digital content for Aussies doing good stuff.
        </h4>
      </div>
      <div className="col middle center vh80">
        <h2 className="mb3">
          We work with brands to improve your online presence accross
          every digital medium.
        </h2>
        <div className="mt3">
            <BrandScroller />
        </div>
      </div>
      <div className="col middle center mt2">
        <div className="textCenter mt3 w100">
          <TabPanel />
        </div>
      </div>
    </div>
  );
}
