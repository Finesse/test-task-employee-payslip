import React, {PureComponent} from 'react';

/**
 * Payslip for an employee data
 */
export default class PayslipRow extends PureComponent
{
  /**
   * @inheritDoc
   */
  render()
  {
    // The list of cells must correspond the list of head cells in the payslips table
    return <tr>
      <td>{this.props.name}</td>
      <td>{this.props.payPeriodStart.format('DD MMMM')} – {this.props.payPeriodEnd.format('DD MMMM')}</td>
      <td style={{textAlign: 'right'}}>{this.props.grossIncome}</td>
      <td style={{textAlign: 'right'}}>{this.props.incomeTax}</td>
      <td style={{textAlign: 'right'}}>{this.props.netIncome}</td>
      <td style={{textAlign: 'right'}}>{this.props.superAmount}</td>
    </tr>;
  }
}
