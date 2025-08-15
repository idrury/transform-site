import { useRef } from "react";
import { Transition } from "react-transition-group";
import gsap from "gsap";
import type { ActivatableElement } from "~/data/CommonTypes";

interface EditMenuProps
  extends ActivatableElement {
  children: any;
  width: number | string;
  height: number;
  isLoading?: boolean;
}

function EditMenu({
  active,
  onClose,
  children,
  width,
  height,
  isLoading = false,
}: EditMenuProps) {
  const transitionRef =
    useRef<HTMLDivElement>(null);

  function handleMainClick(e: any) {
    e.stopPropagation();
  }

  const handleEnter = () => {
    gsap.fromTo(transitionRef?.current, {
      opacity: 0,
      duration:0.5,
    }, {
      opacity: 1,
            duration:0.5,
    });
  };

  const handleExit = () => {
    gsap.to(transitionRef?.current, {
      opacity: 0,
            x: "100%",
      duration: 0.1,
      ease: "ease.inOut",
    });
  };

  return (
    <div>
      {active && (
        <div style={{zIndex: 100}} className="moveableMenuBackground mediumFade" />
      )}
      <Transition
        nodeRef={transitionRef}
        in={active}
        timeout={300}
        onEnter={handleEnter}
        onExit={handleExit}
        unmountOnExit
      >
        <div
          ref={transitionRef}
          className="fillScreen boxed"
          style={{zIndex: 101}}
          onClick={() => onClose()}
        >
          <div className="m0 p0">
            <div
              onClick={(e) => handleMainClick(e)}
            >
              <div
                className=""
                style={{
                  width: width,
                  height: "100vh",
                }}
              >
                <div className="">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
export default EditMenu;
