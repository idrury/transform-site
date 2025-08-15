import type { SharedContextProps } from '~/data/CommonTypes';
import { CONTACT } from '~/data/Objects';
import { supabaseSignOut } from '~/database/Auth';

export interface NavBarProps {
context: SharedContextProps;
}

/******************************
 * NavBar component
 * @todo Create description
 */
export function NavBar ({context}:NavBarProps)  {
  /*********************************
   * Sign the user out
   */
  async function handleSignOut() {
    try {
      await supabaseSignOut();
      context.popAlert("Signed out!");
    } catch (error) {
      context.popAlert(
        "An error occurred signing you out!",
        `Contact ${CONTACT.email} for support`,
        true
      );
    }
  }
  return (
   <div className="middle center">
        <div className="p2 m2 row boxed outline between middle w100">
          <div className="row middle">
            <h4>Custom Transform React App</h4>
          </div>
          <div className="row middle">
            {context.session ? (
              <div className='row middle'>
                <p className='mr2 boxedLight p2'>{context.session.user.email}</p>
                  <button className="p2" onClick={() => handleSignOut()}>
                    Sign out
                  </button>
              </div>
            ) : (
              <button className="p2" onClick={() => context.navigate("/")}>
                Not signed in
              </button>
            )}
          </div>
        </div>
      </div>
  )
};