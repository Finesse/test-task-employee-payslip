import React, {PureComponent} from 'react';
import PayslipsContext from '../../contexts/PayslipsList';
import PayslipRow from './PayslipRow';
import '../../styles/payslipsTable.css';

/**
 * List of employees payslips
 */
export default class PayslipsList extends PureComponent
{
  render()
  {
    return <PayslipsContext.Consumer>
      {({payslips}) => {
        if (!payslips.length) {
          return <p>
            No payslips have been calculated.
            Please go to the main page and add an employee data to calculate a payslip.
          </p>;
        }

        return <table className="payslipsTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Pay period</th>
              <th style={{textAlign: 'right'}}>Gross income</th>
              <th style={{textAlign: 'right'}}>Income tax</th>
              <th style={{textAlign: 'right'}}>Net income</th>
              <th style={{textAlign: 'right'}}>Super amount</th>
            </tr>
          </thead>
          <tbody>
            {payslips.map(payslip => (
              <PayslipRow key={payslip.id} {...payslip}/>
            ))}
          </tbody>
        </table>;
      }}
    </PayslipsContext.Consumer>;
  }
}
