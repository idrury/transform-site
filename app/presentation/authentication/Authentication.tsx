import type { SharedContextProps } from "~/data/CommonTypes";
import { useOutletContext } from "react-router";
import { Icon } from "../elements/Icon";

export interface AuthenticationProps {}

/******************************
 * Authentication component
 * @todo Create description
 */
export function Authentication({}: AuthenticationProps) {
  const context: SharedContextProps = useOutletContext();

  return (
    <div>
      <div className="row middle">
        <Icon name="add-circle" size={40} className="buttonIcon"/>
          <h1>Authentication</h1>
      </div>
      <h2>Authentication</h2>

      <h3>Authentication</h3>

      <input />
      <textarea />
      <button>some button</button>
    </div>
  );
}
