import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { TabBody } from "./TabBody";
import { Icon } from "../elements/Icon";

export interface MediaTabProps {}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function MediaTab({}: MediaTabProps) {
  const context: SharedContextProps = useOutletContext();

  return (
      <section id="media" className="w50 col middle center vh100">
        <h4 className="mb3 mt3 textCenter">
          From fifteen seconds reels to full scale productions, we're
          passionate about creating videos that gain attention and
          generate traction
        </h4>
        <p className="pb3">When we create media with you - it's your goals we have in mind.</p>
        <div className="w100 m3" style={{ position: "relative" }}>
          <div className="row shrinkCol between" style={{ height: 200 }}>
            <div className="boxed w25">
              <h3
                className="textStart p3"
                style={{
                  textAlign: "start",
                  zIndex: 500,
                }}
              >
                Work with us!
              </h3>
            </div>
            <div className="div10" />
            <div
              className="w75 boxed row middle center"
              style={{ overflow: "hidden", height: 200 }}
            >
              <img
                style={{
                  minHeight: "100%",
                  minWidth: "100%",
                }}
                src="https://picsum.photos/seed/4/800/600?grayscale"
              />
            </div>
          </div>
          <div className="div10" />
          <div className="row shrinkCol between" style={{ height: 200 }}>
            <div
              className="w75 boxed col"
              style={{ overflow: "hidden", height: 200 }}
            >
              <div className="p3">
                <ul className="textStart">
                  <li>Produce high quality video content</li>
                  <li>Develop engaging social media reels</li>
                  <li>Create compelling promotional videos</li>
                  <li>Produce training series and documentaries</li>
                </ul>
              </div>
            </div>
            <div className="div10" />
            <div className="boxedAccent w25">
              <div className="col between h100">
                <h5
                  className="textStart pl3 pt3 pr3"
                  style={{
                    textAlign: "start",
                    zIndex: 500,
                  }}
                >
                  Let's create something cool together.
                </h5>
                <Icon
                  onClick={() => console.log("Clicked")}
                  name="arrow-forward-circle"
                  size={40}
                  color="var(--background)"
                  className="clickable pl3 pb3"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
