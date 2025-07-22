import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { useState } from "react";
import { logError, supabaseSignIn } from "~/database/Auth";
import { Icon } from "../elements/Icon";

export interface AuthenticationProps {}

/******************************
 * Authentication component
 * @todo Create description
 */
export function Authentication({}: AuthenticationProps) {
  const [email, setEmail] = useState<string>();
  const context: SharedContextProps = useOutletContext();

  async function signIn() {
    if (!email) return;

    try {
      await supabaseSignIn(email);
      context.popAlert(
        "Success",
        "We've sent a sign in link to your email address"
      );
    } catch (error) {
      logError(error, ["supabaseSignIn"]);
      context.popAlert(
        "Success",
        "We've sent a sign in link to your email address"
      );
    }
  }

  return (
    <div className="m2 col middle center">
      <div className="w30 center col vh80">
        <h2 className="textCenter">Sign in</h2>
        <p className="textCenter mt3 mb3">
          Enter your email address and we'll send you a 'magic' sign
          in link!
        </p>
        <form
          action="submit"
          onSubmit={(f) => {
            f.preventDefault();
            signIn();
          }}
        >
          <input
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email address"
            autoFocus
            autoComplete="email"
          />
          <button
            className="row middle center w100 mt2 accentButton"
            onClick={() => context.popAlert("THIS WORKS")}
          >
            <Icon name="mail" className="mr1" />
            <p>Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
}
