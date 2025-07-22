import type { SharedContextProps } from '~/data/CommonTypes';
import { useOutletContext } from 'react-router';

export interface LandingPageProps {

}

/******************************
 * LandingPage component
 * @todo Create description
 */
export function LandingPage ({}:LandingPageProps)  {
 const context: SharedContextProps = useOutletContext();

  return (
   <div>
      <div>
          <h1>Transform Creative</h1>
      </div>
      <h4>Impactful digital content for Aussies doing good stuff.</h4>
      
    </div>
  )
};