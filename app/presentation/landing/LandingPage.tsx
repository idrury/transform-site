import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { TabPanel } from "./TabPanel";
import CircularGallery from "./CircularGallery";

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
              className="mt1"
                style={{ height: 190, width: 190 }}
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
        <h2
          className="mt3 textCenter mb3"
          style={{ color: "var(--primaryColor)" }}
        >
          We work with Aussie organisations to
          create content that captivates your
          audience.
        </h2>
        <div className="mt3 w100 vh50">
          <CircularGallery
            images={[
              {
                image: `https://picsum.photos/seed/1/800/600?grayscale`,
                text: "Bridge long text big img",
              },
              {
                image: `https://picsum.photos/seed/2/800/600?grayscale`,
                text: "Desk Setup",
              },
              {
                image: `https://picsum.photos/seed/3/800/600?grayscale`,
                text: "Waterfall",
              },
              {
                image: `https://picsum.photos/seed/4/800/600?grayscale`,
                text: "Strawberries",
              },
              {
                image: `https://picsum.photos/seed/5/800/600?grayscale`,
                text: "Deep Diving",
              },
              {
                image: `https://picsum.photos/seed/16/800/600?grayscale`,
                text: "Train Track",
              },
              {
                image: `https://picsum.photos/seed/17/800/600?grayscale`,
                text: "Santorini",
              },
              {
                image: `https://picsum.photos/seed/8/800/600?grayscale`,
                text: "Blurry Lights",
              },
              {
                image: `https://picsum.photos/seed/9/800/600?grayscale`,
                text: "New York",
              },
              {
                image: `https://picsum.photos/seed/10/800/600?grayscale`,
                text: "Good Boy",
              },
              {
                image: `https://picsum.photos/seed/21/800/600?grayscale`,
                text: "Coastline",
              },
              {
                image: `https://picsum.photos/seed/12/800/600?grayscale`,
                text: "Palm Trees",
              },
            ]}
          />
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
