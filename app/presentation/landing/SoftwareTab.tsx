import type { SharedContextProps } from '~/data/CommonTypes';
import { useOutletContext } from 'react-router';
import { TabBody } from './TabBody';

export interface SoftwareTabProps {
color: string;
}

/******************************
 * DesignTab component
 * @todo Create description
 */
export function SoftwareTab ({color}:SoftwareTabProps)  {
 const context: SharedContextProps = useOutletContext();

  return (
  <TabBody color={color}>
    <h2>Software</h2>
  </TabBody>
  )
};