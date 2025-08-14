import type { SharedContextProps } from "~/data/CommonTypes";
import {
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router";
import { Logo } from "./elements/Logo";
import { useEffect, useState } from "react";
import { Icon } from "./elements/Icon";
import { CONTACT } from "~/data/Objects";

export interface HeaderBarProps {}

/******************************
 * HeaderBar component
 * @todo Create description
 */
export function HeaderBar({}: HeaderBarProps) {
  const context: SharedContextProps = useOutletContext();
  const location = useLocation();
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", updateScroll);
    updateScroll();
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div
      className={`row middle between sticky ${
        scroll > 100 && "boxed"
      }`}
      style={{
        zIndex: 100,
        backgroundColor: `${
          scroll > 100 ? "#d8d7cecc" : "#00000000"
        }`,
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="ml3 mb2 mt2 mr3 row middle between w100">
        <Logo size={30} />
        <div className="row">
          <button
            disabled={location.pathname == "/"}
            style={{
              color: `${
                location.pathname == "/" ? "var(--primaryColor)" : ""
              }`,
            }}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            disabled={location.pathname == "/portfolio"}
            style={{
              color: `${
                location.pathname == "/" ? "var(--primaryColor)" : ""
              }`,
            }}
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </button>
          <a
            style={{ textDecoration: "none" }}
            className="p2 row center accentButton middle"
            target="_blank"
            href={`mailto:${CONTACT.email}`}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
