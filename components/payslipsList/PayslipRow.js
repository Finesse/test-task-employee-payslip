import React, {PureComponent} from 'react';
import calculatePayslip from '../../models/calculatePayslip';

/**
 * Payslip for an employee data.
 *
 * Actually, this component can't be pure, because the employee prop is an object.
 * But we have arranged that our functions are pure, so the object are not changed and pure component won't cause problems.
 */
export default class PayslipRow extends PureComponent
{
  /**
   * @inheritDoc
   */
  render()
  {
    const {
      name,
      payPeriod,
      grossIncome,
      incomeTax,
      netIncome,
      superAmount
    } = calculatePayslip(this.props.employee);

    // The list of cells must correspond the list of head cells in the payslips table
    return <tr>
      <td>{name}</td>
      <td>{payPeriod.start.format('DD MMMM')} – {payPeriod.end.format('DD MMMM')}</td>
      <td>{grossIncome}</td>
      <td>{incomeTax}</td>
      <td>{netIncome}</td>
      <td>{superAmount}</td>
    </tr>;
  }
}
