import type { SharedContextProps } from "~/data/CommonTypes";
import {
  useNavigate,
  useOutletContext,
} from "react-router";
import { Logo } from "./elements/Logo";
import { useEffect, useState } from "react";
import { CONTACT } from "~/data/Objects";

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
      <div className="ml3 mb2 mt2 mr3 row middle center w100">
        
       <a
                style={{ textDecoration: "none", fontSize: "12pt" }}
                className="p2 row center middle"
                target="_blank"
                href={`mailto:${CONTACT.email}`}
              >
                Contact
              </a>

          <button
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      
    </div>
  );
}
