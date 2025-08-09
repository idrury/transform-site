import type { SharedContextProps } from "~/data/CommonTypes";
import {
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router";
import { Logo } from "./elements/Logo";
import { useEffect, useState } from "react";

export interface HeaderBarProps {}

/******************************
 * HeaderBar component
 * @todo Create description
 */
export function HeaderBar({}: HeaderBarProps) {
  const context: SharedContextProps =
    useOutletContext();
  const location = useLocation();
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    console.log(location);
    const updateScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener(
      "scroll",
      updateScroll
    );
    updateScroll();
    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );
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
        <div>
          <button
          disabled={                location.pathname == "/contact"
}
            style={{
              color: `${
                location.pathname == "/contact"
                  ? "var(--primaryColor)"
                  : ""
              }`,
            }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>

          <button
          disabled={                location.pathname == "/"
}
            style={{
              color: `${
                location.pathname == "/"
                  ? "var(--primaryColor)"
                  : ''
              }`,
            }}
            onClick={() => navigate("/home")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
