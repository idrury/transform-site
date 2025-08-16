import { useNavigate } from "react-router";
import { Logo } from "./elements/Logo";
import { useEffect, useState } from "react";
import { CONTACT } from "~/data/Objects";
import { Icon } from "./elements/Icon";
import EditMenu from "./elements/EditMenu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Z_BINARY } from "zlib";

export interface HeaderBarProps {
  inShrink: boolean;
}

/******************************
 * HeaderBar component
 * @todo Create description
 */
export function HeaderBar({ inShrink }: HeaderBarProps) {
  const [menuActive, setMenuActive] = useState(false);

  const [scroll, setScroll] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#header-menu",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3",
      },
      1
    );
  }, []);

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
    <div className="sticky" style={{ height: 120, zIndex: 100,top:0 }} id="header-menu">
      <div
        className={`row middle between fixed w100 ${
          scroll > 100 && "boxed"
        }`}
        style={{
          zIndex: 50,
          top: 0,
          backgroundColor: `${
            scroll > 100 ? "#d8d7cecc" : "#00000000"
          }`,
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="ml3 mb2 mt2 mr3 row middle between w100">
          <Logo size={30} />
          {inShrink ? (
            <div>
              <Icon
                name="menu-outline"
                className="clickable"
                onClick={() => setMenuActive(true)}
                size={25}
                color="var(--primaryColor)"
              />
            </div>
          ) : (
            <div>
              <MenuOptions
                inShrink={inShrink}
                onClose={() => setMenuActive(false)}
              />
            </div>
          )}
        </div>
      </div>
      <EditMenu
        width={"100%"}
        height={300}
        active={menuActive}
        onClose={() => setMenuActive(false)}
      >
        <div>
          <MenuOptions
            inShrink={inShrink}
            onClose={() => setMenuActive(false)}
          />
        </div>
      </EditMenu>
    </div>
  );
}

interface MenuOptionsProps {
  inShrink: boolean;
  onClose: () => void;
}

function MenuOptions({ inShrink, onClose }: MenuOptionsProps) {
  const navigate = useNavigate();

  const textSize = inShrink ? "30px" : undefined;

  return (
    <div className="row shrinkCol w100">
      {inShrink && <div style={{ height: 50 }} />}
      <button
        disabled={location.pathname == "/"}
        style={{
          fontSize: textSize,
          color: `${
            location.pathname == "/" ? "var(--primaryColor)" : ""
          }`,
        }}
        onClick={() => {
          navigate("/");
          onClose();
        }}
      >
        Home
      </button>
      <div className="div10" />

      <button
        disabled={location.pathname == "/portfolio"}
        style={{
          fontSize: textSize,
          color: `${
            location.pathname == "/" ? "var(--primaryColor)" : ""
          }`,
        }}
        onClick={() => {
          navigate("/portfolio");
          onClose();
        }}
      >
        Portfolio
      </button>
      <div className="div20" />
      <a
        style={{
          textDecoration: "none",
          fontSize: textSize,
        }}
        className="p2 row center accentButton middle"
        target="_blank"
        href={`mailto:${CONTACT.email}`}
      >
        Contact
      </a>
      {inShrink && (
        <div className="col w100 middle center mt2">
          <Icon
            name="close-outline"
            className="clickable"
            onClick={() => onClose()}
            color="var(--primaryColor)"
            size={50}
          />
        </div>
      )}
    </div>
  );
}
