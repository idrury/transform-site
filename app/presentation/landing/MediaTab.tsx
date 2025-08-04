import type { SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";

export interface MediaTabProps {}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function MediaTab({}: MediaTabProps) {
  const context: SharedContextProps =
    useOutletContext();
      const navigate = useNavigate();


  return (
    <section
      id="media"
      className="w50 col middle center"
    >
      <Icon
        name="film-outline"
        size={50}
        color="var(--primaryColor)"
      />
      <h4 className="mb3 mt3 textCenter">
        From 15 second reels to full scale
        productions, we're passionate about
        creating videos that gain attention and
        generate traction
      </h4>
      <p className="pb3 textCenter">
        Partner with us to create authentic
        material that cuts through the dribble of
        AI content.
      </p>
      <div className="w100 m3 col between">
        <div className="row shrinkCol between">
          <div
            className="w100 boxed row middle center"
            style={{
              overflow: "clip",
              minHeight: 200,
              maxHeight: 200,
            }}
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
        <div
          className="row shrinkCol between"
          style={{
            minHeight: 200,
            maxHeight: 200,
          }}
        >
          <div
            className="w75 boxed col"
            style={{
              overflow: "hidden",
              minHeight: 200,
              maxHeight: 200,
            }}
          >
            <div className="">
              <h3 className="mt3 ml3">
                {" "}
                We have experience creating
              </h3>
              <ul className="textStart ml3 mr3 mb3">
                <li>Long-form training series</li>
                <li>Promotional videos</li>
                <li>Social media reels</li>
                <li>
                  Videos for fundraising campaigns
                </li>
              </ul>
            </div>
          </div>
          <div className="div10" />
          <div className="boxedAccent w25">
            <div
              className={`${
                context.inShrink
                  ? "row middle between p3"
                  : "col between h100"
              }`}
            >
              <h5
                className={`${
                  !context.inShrink &&
                  "pl3 pr3 pt3"
                }`}
                style={{
                  textAlign: "start",
                  zIndex: 500,
                }}
              >
                Find out more
              </h5>
              <Icon
                onClick={() =>
                  navigate("/media")
                }
                name="arrow-forward-circle"
                size={40}
                color="var(--background)"
                className={`clickable ${
                  !context.inShrink && "pl3 pb3"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
