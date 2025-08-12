import type { SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";
import "./landing.css";
import { useEffect, useRef, useState } from "react";
import { CONTACT } from "~/data/Objects";

export interface ContactTabProps {}

/******************************
 * ContactTab component
 * @todo Create description
 */
export function ContactTab({}: ContactTabProps) {
  const context: SharedContextProps = useOutletContext();
  const [playerPlay, setPlayerPlay] = useState(false);
  const [playerMuted, setPlayerMuted] = useState(true);
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
    <section id="contact" className="w50 col middle center">
      <div style={{ minHeight: 150, width: 100 }} />
      <div className="p3 col middle w100">
        <div className="row middle center shrinkCol">
          <Icon
            name="chatbubble-ellipses-outline"
            size={70}
            className="mr2"
            color="var(--primaryColor)"
          />
          <h2 className="textCenter mb2">Got questions?</h2>
        </div>
        <p className="mb3"> We'd love to chat!</p>
        <a
          style={{ textDecoration: "none" }}
          className="p2 accentButton row center middle"
          target="_blank"
          href={`mailto:${CONTACT.email}`}
        >
          <Icon name="mail-open" className="mr2" />
          Email us!
        </a>
      </div>
      <div style={{ height: 100 }} />
    </section>
  );
}
