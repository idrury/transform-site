import IonIcon from "@reacticons/ionicons";

import gsap from "gsap";
import { Transition } from "react-transition-group";
import { useEffect, useRef } from "react";
import type { IoniconName } from "~/data/Ionicons";
import type { ActivatableElement } from "~/data/CommonTypes";

interface BasicMenuProps extends ActivatableElement {
  children: any;
  width: number | string;
  icon?: {
    name: IoniconName;
    color?: string;
    size: number;
  };
  zIndex?: number;
  disableClickOff?: boolean;
}

const BasicMenu = ({
  active,
  onClose,
  children,
  width,
  icon,
  zIndex = 20,
  disableClickOff = false,
}: BasicMenuProps) => {
  const transitionRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    gsap.from(transitionRef?.current, {
      alpha: 0,
      rotate: 20,
      duration: 0.5,
      y: -300,
      ease: "back.inOut",
    });
  };

  const handleExit = () => {
    gsap.to(transitionRef?.current, {
      opacity: 0,
      y: 300,
      duration: 0.5,
      rotate: 20,
      ease: "back.inOut",
    });
  };

  return (
    <div>
      {active && (
        <div className="moveableMenuBackground mediumFade" />
      )}
      <Transition
        nodeRef={transitionRef}
        in={active}
        timeout={300}
        onEnter={handleEnter}
        onExiting={handleExit}
        unmountOnExit
      >
        <div
          ref={transitionRef}
          style={{ zIndex: zIndex }}
          className="fillScreen center middle"
          onClick={() => {
            if (!disableClickOff) onClose();
          }}
        >
          <div
            className="menu s2 p1"
            style={{
              width: width,
              height: "auto",
            }}
          >
            <div onClick={() => onClose()} className="rightRow m0">
              <IonIcon
                className="buttonIcon clickable"
                name="close"
              />
            </div>
            <div style={{ padding: 10 }}>
              {icon && (
                <div className="center">
                  <IonIcon
                    style={{
                      width: icon.size,
                      height: icon.size,
                      color: icon.color || "red",
                    }}
                    name={icon.name}
                  />
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};
export default BasicMenu;
