import type { SharedContextProps } from '~/data/CommonTypes';
import { useNavigate, useOutletContext } from 'react-router';
import { Icon } from '../elements/Icon';

export interface SoftwareProps {

}

/******************************
 * Software component
 * @todo Create description
 */
export function Software ({}:SoftwareProps)  {
 const context: SharedContextProps = useOutletContext();
 const navigate = useNavigate();

  return (
   <div className='w100 col middle center vh100'>
      <h1>Software</h1>
      <p className='mt3 mb3'>Coming soon...</p>
      <button className='accentButton row middle center' onClick={() => navigate("/")}><Icon name="home" className='mr1' />Home</button>
    </div>
  )
};