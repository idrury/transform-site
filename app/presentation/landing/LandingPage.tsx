import type { SharedContextProps } from "~/data/CommonTypes";
import {
  useNavigate,
  useOutletContext,
} from "react-router";
import { TabPanel } from "./TabPanel";
import CircularGallery from "./CircularGallery";
import { Logo } from "../elements/Logo";
import { Icon } from "../elements/Icon";
import { DesignTab } from "./DesignTab";
import { MediaTab } from "./MediaTab";

export interface LandingPageProps {}

const IMAGES = [
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
];

/******************************
 * LandingPage component
 * @todo Create description
 */
export function LandingPage({}: LandingPageProps) {
  const context: SharedContextProps =
    useOutletContext();
  const navigate = useNavigate();

  return (
    <div>
      <div className="vh80 col middle center">
        <div className="w50 col middle center">
          <h2
            className="mt3 textCenter pl3 pr3"
            style={{
              color: "var(--primaryColor)",
              fontSize: 80,
            }}
          >
            Digital content that inspires change.
          </h2>
          <p className="p3 textCenter">
            We work with Aussie organisations to
            create <strong>media, software and designs</strong> that captivate your
            audience.
          </p>
          <div className="row center w50 m3">
            <button
              className="row middle ml2 mr3"
              onClick={() => navigate("#media")}
            >
              <Icon
                name="film-outline"
                className="mr1"
              />
              Media
            </button>
            <button className="row middle ml3 mr3">
              <Icon
                name="code-outline"
                className="mr1"
                onClick={() =>
                  navigate("#software")
                }
              />
              Software
            </button>
            <button className="row middle ml3 mr3">
              <Icon
                name="color-filter-outline"
                className="mr1"
                onClick={() =>
                  navigate("#design")
                }
              />
              Design
            </button>
          </div>
        </div>
      </div>
      <div className="col middle between pt2 pb2">
        <div className="mt3 w100">
          <CircularGallery images={IMAGES} />
        </div>
      </div>
      <div className="col middle center p3 mb3">
        <MediaTab />
      </div>
      </div>
  );
}
