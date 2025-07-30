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
      <div
        className="w50 m3"
        style={{ position: "relative" }}
      >
        <h2
          className="textStart "
          style={{
            textAlign: "start",
            fontSize: 50,
            zIndex: 500,
          }}
        >
          From fifteen seconds reels to full scale
          productions, we're passionate about
          creating videos that gain attention and
          generate traction
        </h2>
        <div className="row  mt3">
          <img
            className="mb3"
            style={{
              width: '100%',
              maxWidth: 300
            }}
            src="https://picsum.photos/seed/4/800/600?grayscale"
          />
        </div>
      </div>
      <div className="div20" />
      <div className="boxedDark w50 m3 p3">
        <h2
          className="ml2 mt2"
          style={{ color: "#222222" }}
        >
          We can work with you to
        </h2>
        <ul className="textStart">
          <li>
            Produce high quality video content
          </li>
          <li>
            Develop engaging social media reels
          </li>
          <li>
            Create compelling promotional videos
          </li>
          <li>
            Produce training series and
            documentaries
          </li>
        </ul>
      </div>
    </TabBody>
  );
}
