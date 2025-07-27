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
  const context: SharedContextProps =
    useOutletContext();

  return (
    <div>
      <div className="vh50 boxedAccent col middle center m2">
        <div>
          <div className="row">
            <div
              className="mr3"
              style={{
                width: "140pt",
                height: "140pt",
              }}
            >
              <img
                style={{ height: 150, width: 50 }}
                src="app/assets/transform-icon-white.png"
              />
            </div>
            <div>
              <h1
                className="mt3"
                style={{
                  padding: 0,
                  margin: 0,
                  color: "var(--background)",
                  fontSize: "100pt",
                }}
              >
                Transform
              </h1>
              <h2
                style={{
                  fontWeight: 400,
                  fontSize: "40pt",
                  color: "var(--background)",
                }}
              >
                Creative
              </h2>
            </div>
          </div>
          <h4
            className="mt3"
            style={{ color: "var(--background)" }}
          >
            Digital content that inspires change
          </h4>
        </div>
      </div>
      <div className="col middle between m3 pt2 pb2">
        <h2 className="mt3 textCenter mb3" style={{color: 'var(--primaryColor)'}}>
          We work with Aussie organisations to
          create content that captures your audience's imagination.
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
