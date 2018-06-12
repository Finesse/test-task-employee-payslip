import App, {Container} from 'next/app'
import React from 'react'
import EmployeeContext from '../contexts/EmployeeData';
import '../styles/common.css';

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
		employeeContext: {
			employee: null,
			setEmployee: this.setEmployee.bind(this),
      test: true
		}
	};

  /**
   * Sets the new employee data
   *
   * @param {{}|null} employee
   */
	setEmployee(employee)
  {
    this.setState({
      employeeContext: {
        ...this.state.employeeContext,
        employee
      }
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
        <div className="app">
          <EmployeeContext.Provider value={this.state.employeeContext}>
						<Component {...pageProps} />
          </EmployeeContext.Provider>
        </div>
      </Container>
		);
	}
}
