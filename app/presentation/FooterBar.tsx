import type { SharedContextProps } from "~/data/CommonTypes";
import {
  useNavigate,
  useOutletContext,
} from "react-router";
import { Logo } from "./elements/Logo";
import { useEffect, useState } from "react";

export interface FooterBarProps {}

/******************************
 * FooterBar component
 * @todo Create description
 */
export function FooterBar({}: FooterBarProps) {
  const context: SharedContextProps =
    useOutletContext();
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(0);

  return (
    <div
      className={`row middle between boxedAccent`}
      style={{
        zIndex: 100,
      }}
    >
      <div className="ml3 mb2 mt2 mr3 row middle between w100">
        <div>
          <button
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
          <button
            onClick={() => navigate("/about")}
          >
            About
          </button>

          <button
            onClick={() => navigate("/home")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
