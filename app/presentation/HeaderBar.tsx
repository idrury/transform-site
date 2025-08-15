import { useNavigate } from "react-router";
import { Logo } from "./elements/Logo";
import { useEffect, useState } from "react";
import { CONTACT } from "~/data/Objects";
import { Icon } from "./elements/Icon";
import EditMenu from "./elements/EditMenu";

export interface HeaderBarProps {
  inShrink: boolean;
}

/******************************
 * HeaderBar component
 * @todo Create description
 */
export function HeaderBar({
  inShrink,
}: HeaderBarProps) {
  const [menuActive, setMenuActive] =
    useState(false);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
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
    <div>
      <div
        className={`row middle between sticky ${
          scroll > 100 && "boxed"
        }`}
        style={{
          zIndex: 50,
          backgroundColor: `${
            scroll > 100
              ? "#d8d7cecc"
              : "#00000000"
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
                onClick={() =>
                  setMenuActive(true)
                }
                size={25}
                color="var(--primaryColor)"
              />
            </div>
          ) : (
            <MenuOptions
              inShrink={inShrink}
              onClose={() => setMenuActive(false)}
            />
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

function MenuOptions({
  inShrink,
  onClose,
}: MenuOptionsProps) {
  const navigate = useNavigate();

  const textSize = inShrink ? "30px" : undefined;

  return (
    <div className="row shrinkCol">
      {inShrink && (
       <div style={{height: 50}}/>
      )}
      <button
        disabled={location.pathname == "/"}
        style={{
          fontSize: textSize,
          color: `${
            location.pathname == "/"
              ? "var(--primaryColor)"
              : ""
          }`,
        }}
        onClick={() => {navigate("/"); onClose()}}
      >
        Home
      </button>
      <div className="div10" />

      <button
        disabled={
          location.pathname == "/portfolio"
        }
        style={{
          fontSize: textSize,
          color: `${
            location.pathname == "/"
              ? "var(--primaryColor)"
              : ""
          }`,
        }}
        onClick={() => {navigate("/portfolio"); onClose()}}
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
