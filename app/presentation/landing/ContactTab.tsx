import type { SharedContextProps } from "~/data/CommonTypes";
import { useNavigate, useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";
import "./landing.css";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { CONTACT } from "~/data/Objects";

export interface ContactTabProps {
  iconSize?: number;
  headerText?: string;
  showHeader?: boolean;
  buttonText?: string;
  secondaryButtonText?: string;
  style?: CSSProperties;
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
  secondaryButtonText = "Book a free discovery call",
  style,
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
    <section id="contact" className="w-100 col middle center ">
      <div className="col middle w100">
        {showHeader && (
          <div>
            <div className="col middle center mb2 ">
              <Icon
                name="chatbubble-ellipses-outline"
                size={iconSize}
                className="mb2"
                color="var(--accent)"
              />
              <h2 className="textCenter">{headerText}</h2>
            </div>
          </div>
        )}
        <div className="w-50 col middle ">
          <div className="row middle center gap-5 w-100">
            <button className="row middle w-50">
              <a
                style={{
                  textDecoration: "none",
                  flex: 1,
                  padding: 10,
                  ...style,
                }}
                role="button"
                className="accent gap-5 row center middle"
                target="_blank"
                rel="noreferrer"
                href={`mailto:${CONTACT.email}`}
              >
                <Icon
                  name="mail-open"
                  className=""
                  size={20}
                  color={style?.color || undefined}
                />
                {buttonText}
              </a>
            </button>
            <a
              className="outline-secondary row middle gap-5  w-50 center                 "
              role="button"
              style={{
                color: "var(--txt)",
                background: "none",
              }}
              href={CONTACT.bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
                 <Icon
                  name="link"
                  className=""
                  size={20}
                  color={style?.color || undefined}
                />
              {secondaryButtonText}
            </a>
          </div>
        </div>
        <div>
          <div className="row middle center clickable">
            <p onClick={copyEmail}>{CONTACT.email}</p>
            <button
              style={{ color: style?.color }}
              onClick={copyEmail}
              title="Copy email address"
              className="pt2 pb2"
            >
              <Icon
                name={copied ? "checkmark-outline" : "copy-outline"}
                color={style?.background}
                size={15}
              />
            </button>
          </div>
        </div>
      </div>
      <div style={{ height: 100 }} />
    </section>
  );
}
