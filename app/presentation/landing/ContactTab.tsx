import type { SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";
import "./landing.css";
import { useEffect, useRef, useState } from "react";
import { CONTACT } from "~/data/Objects";

export interface ContactTabProps {
  iconSize?: number;
  headerText?: string;
  showHeader?: boolean;
  buttonText?: string;
}

/******************************
 * ContactTab component
 * @todo Create description
 */
export function ContactTab({
  iconSize = 50,
  headerText = "Got questions? Let's talk.",
  showHeader = true,
  buttonText = "Email us!",
}: ContactTabProps) {
  const context: SharedContextProps = useOutletContext();
  const [playerPlay, setPlayerPlay] = useState(false);
  const [playerMuted, setPlayerMuted] = useState(true);
  const [copied, setCopied] = useState(false);
  const reactPlayer = useRef(null);
  const navigate = useNavigate();

  function copyEmail() {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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
    <section id="contact" className="w-100 col middle center">
      <div className="p3 col middle w100">
        {showHeader && (
          <div>
            <div className="col middle center mb2">
              <Icon
                name="chatbubble-ellipses-outline"
                size={iconSize}
                className="mb2"
                color="var(--accent)"
              />
              <h2 className="textCenter mb2">{headerText}</h2>
            </div>
          </div>
        )}
        <div className="w-50">
          <div className="m2 row middle" style={{ gap: 8 }}>
            <a
              style={{ textDecoration: "none", flex: 1 }}
              className="p-10 w-100 accentButton row center middle"
              target="_blank"
              rel="noreferrer"
              href={`mailto:${CONTACT.email}`}
            >
              <Icon name="mail-open" className="mr2" />
              {buttonText}
            </a>
          </div>
        </div>
        <div className="row middle center clickable">
          <p onClick={copyEmail}>{CONTACT.email}</p>
          <button
            onClick={copyEmail}
            title="Copy email address"
            className="pt2 pb2"
          >
            <Icon
              name={copied ? "checkmark-outline" : "copy-outline"}
              size={15}
            />
          </button>
        </div>
      </div>
      <div style={{ height: 100 }} />
    </section>
  );
}
