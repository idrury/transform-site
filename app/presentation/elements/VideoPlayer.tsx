import type { SharedContextProps } from '~/data/CommonTypes';
import { useOutletContext } from 'react-router';

export interface VideoPlayerProps {

}

/******************************
 * VideoPlayer component
 * @todo Create description
 */
export function VideoPlayer ({}:VideoPlayerProps)  {
 const context: SharedContextProps = useOutletContext();

  return (
   <div>
      
    </div>
  )
};