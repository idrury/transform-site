import type { SharedContextProps } from '~/data/CommonTypes';
import { useOutletContext } from 'react-router';

export interface FeeStructureProps {

}

/******************************
 * FeeStructure component
 * @todo Create description
 */
export function FeeStructure ({}:FeeStructureProps)  {
 const context: SharedContextProps = useOutletContext();

  return (
    <div>
          <h2 className='center'>Our transperant fee structure</h2>
          <div className="row shrink-wrap gap-10">
            <div
              className="col boxed w-100 p-20"
              style={{ textAlign: context.inShrink ? "center" : "start" }}
            >
              <p
                className="pl-10 pr-10"
                style={{
                  background: "var(--accent)",
                  color: "var(--bkg)",
                  borderRadius: "var(--borderRadius)",
                }}
              >
                ~20-40k per quarter
              </p>
              <h4>The intital build</h4>
              <p>Building the site from scratch</p>
            </div>

            <div
              className="col boxed w-100 p-20"
              style={{ textAlign: context.inShrink ? "center" : "start" }}
            >
              <p
                className="pl-10 pr-10"
                style={{
                  background: "var(--accent)",
                  color: "var(--bkg)",
                  borderRadius: "var(--borderRadius)",
                }}
              >
                ~3-4k per quarter
              </p>
              <h4>Ongoing maintenance</h4>

              <p>
                Because an ever changing world needs an constantly
                adapting site
              </p>
            </div>

            <div
              className="col boxed w-100 p-20"
              style={{ textAlign: context.inShrink ? "center" : "start" }}
            >
              <p
                className="pl-10 pr-10"
                style={{
                  background: "var(--accent)",
                  color: "var(--bkg)",
                  borderRadius: "var(--borderRadius)",
                }}
              >
                ~2% of your online giving
              </p>
              <h4>Payment gateway</h4>
              <p>
                For collecting online donations payment gateways like
                stripe charge a small fee
              </p>
            </div>
          </div>
        </div>
  )
};