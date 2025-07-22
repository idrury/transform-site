import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { useState } from "react";

export interface BrandScrollerProps {}

const BRANDS = [
  {
    src: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    name: "New brand 1",
    slug: "new-brand-1",
  },
  {
    src: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    name: "New brand 1",
    slug: "new-brand-1",
  },
  {
    src: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    name: "New brand 1",
    slug: "new-brand-1",
  },
];

/******************************
 * BrandScroller component
 * @todo Create description
 */
export function BrandScroller({}: BrandScrollerProps) {
  const context: SharedContextProps = useOutletContext();
  const [overlay, setOverlay] = useState<number>();

  return (
    <div
      className="grid w100 middle center"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 450px))",
      }}
    >
      {BRANDS.map((brand, idx) => (
        <div
          className="container boxed"
          key={idx}
          style={{ width: 500, height: 300,overflow: "hidden" }}
          onMouseEnter={() => setOverlay(idx)}
          onMouseLeave={() => setOverlay(undefined)}
        >
          {overlay == idx && (
            <div className="overlayDiv" style={{opacity: 0.8}}>
            </div>
          )}
          {overlay == idx && (
            <div className="overlayDiv mediumFade" style={{background: 'none', zIndex: 20}}>
              <p>{brand.name}</p>
            </div>
          )}

              <img
              style={{maxWidth: "100%"}}
                src={brand.src}
              />

        </div>
      ))}
    </div>
  );
}
