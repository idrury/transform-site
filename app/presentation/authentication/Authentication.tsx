import type { SharedContextProps } from '~/data/CommonTypes';
import { useOutletContext } from 'react-router';

export interface AuthenticationProps {

}

/******************************
 * Authentication component
 * @todo Create description
 */
export function Authentication ({}:AuthenticationProps)  {
 const context: SharedContextProps = useOutletContext();

  return (
   <div>
      <h1>Authentication</h1>
      
    </div>
  )
};