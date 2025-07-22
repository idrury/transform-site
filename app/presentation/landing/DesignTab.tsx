import type { SharedContextProps } from '~/data/CommonTypes';
import { useOutletContext } from 'react-router';
import { TabBody } from './TabBody';

export interface DesignTabProps {
color: string;
}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function DesignTab ({color}:DesignTabProps)  {
 const context: SharedContextProps = useOutletContext();

  return (
  <TabBody color={color}>
    <h2>Design</h2>
  </TabBody>
  )
};