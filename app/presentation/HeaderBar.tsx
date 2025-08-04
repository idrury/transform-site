import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { Logo } from "./elements/Logo";
import { useEffect, useState } from "react";

export interface HeaderBarProps {}

/******************************
 * HeaderBar component
 * @todo Create description
 */
export function HeaderBar({}: HeaderBarProps) {
  const navigate: SharedContextProps = useOutletContext();
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
  });

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
        <button>Home</button>
      </div>
    </div>
  );
}
