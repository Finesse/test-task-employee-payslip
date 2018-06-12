import App, {Container} from 'next/app'
import React from 'react';
import PayslipsContext from '../contexts/PayslipsList';

/**
 * Custom application
 *
 * @see https://github.com/zeit/next.js#custom-app
 */
export default class MyApp extends App
{
  /**
   * @inheritDoc
   */
  state = {
    lastPayslipId: 0,
    payslipsContext: {
      payslips: [],
      addPayslip: this.addPayslip.bind(this)
    }
  };

  /**
   * Adds a new payslip to the payslips list
   *
   * @param {Payslip} payslip
   */
  addPayslip(payslip)
  {
    // Ids are used to optimize the React performance in the views
    const payslipId = this.state.lastPayslipId + 1;

    const payslips = [
      {...payslip, id: payslipId},
      ...this.state.payslipsContext.payslips
    ];

    this.setState({
      lastPayslipId: payslipId,
      payslipsContext: {...this.state.payslipsContext, payslips}
    });
  }

  /**
   * @inheritDoc
   */
  render()
  {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <PayslipsContext.Provider value={this.state.payslipsContext}>
          <Component {...pageProps} />
        </PayslipsContext.Provider>
      </Container>
    );
  }
}
