import type { SharedContextProps } from "~/data/CommonTypes";
import {
  useNavigate,
  useOutletContext,
} from "react-router";
import { Icon } from "../elements/Icon";
import "./landing.css";
import {
  useEffect,
  useRef,
  useState,
} from "react";

export interface ContactTabProps {}

/******************************
 * ContactTab component
 * @todo Create description
 */
export function ContactTab({}: ContactTabProps) {
  const context: SharedContextProps =
    useOutletContext();
  const [playerPlay, setPlayerPlay] =
    useState(false);
  const [playerMuted, setPlayerMuted] =
    useState(true);
  const reactPlayer = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  function videoMouseOver() {
    setTimeout(() => {
      setPlayerPlay(true);
    }, 500);
  }

  function videoMouseOff() {
    setTimeout(() => setPlayerPlay(false), 500);
  }

  return (
    <section
      id="contact"
      className="w50 col middle center"
    >
      <div
        style={{ minHeight: 150, width: 100 }}
      />
      <div className="p3 col middle w100">
          <h2 className="textCenter mb2">Got questions?</h2>
          <h3 className="mb3"> We'd love to chat!</h3>
          <button className="row middle center p2 accentButton w100">
            <Icon name="mail" className="mr1" color="var(--background)"/>
            Email us</button>
      </div>
    </section>
  );
}
