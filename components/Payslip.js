import React, {PureComponent} from 'react';
import calculatePayslip from "../models/calculatePayslip";

/**
 * Payslip for an employee data.
 *
 * Actually, this component can't be pure, because the employee prop is an object.
 * But we have arranged that our functions are pure, so the object are not changed and pure component won't cause problems.
 */
export default class Payslip extends PureComponent
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

    return <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Pay period:</strong> {payPeriod.start.format('DD MMMM')} – {payPeriod.end.format('DD MMMM')}</li>
      <li><strong>Gross income:</strong> {grossIncome}</li>
      <li><strong>Income tax:</strong> {incomeTax}</li>
      <li><strong>Net income:</strong> {netIncome}</li>
      <li><strong>Super amount</strong> {superAmount}</li>
    </ul>;
  }
}
