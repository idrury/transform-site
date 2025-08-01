import type { SharedContextProps } from '~/data/CommonTypes';
import { useOutletContext } from 'react-router';
import { Logo } from './elements/Logo';

export interface HeaderBarProps {

}

/******************************
 * HeaderBar component
 * @todo Create description
 */
export function HeaderBar ({}:HeaderBarProps)  {
 const context: SharedContextProps = useOutletContext();

  return (
   <div className='row middle between sticky' style={{zIndex: 100}}>
      <div className='m3 row middle between w100'>
          <Logo size={30}/>
          <button>Home</button>
      </div>
    </div>
  )
};