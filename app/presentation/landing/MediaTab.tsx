import type { SharedContextProps } from '~/data/CommonTypes';
import { useOutletContext } from 'react-router';
import { TabBody } from './TabBody';

export interface MediaTabProps {
color: string;
}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function MediaTab ({color}:MediaTabProps)  {
 const context: SharedContextProps = useOutletContext();

  return (
  <TabBody color={color}>
    <h2>Media</h2>
  </TabBody>
  )
};