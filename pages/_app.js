import App, {Container} from 'next/app'
import React from 'react';
import EmployeesList from '../contexts/EmployeesList';

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
    lastEmployeeId: 0,
    employeeContext: {
      employees: [],
      addEmployee: this.addEmployee.bind(this)
    }
  };

  /**
   * Adds a new employee data to the employees list
   *
   * @param {{}} employee
   */
  addEmployee(employee)
  {
    // Ids are used to optimize the React performance in the views
    const employeeId = this.state.lastEmployeeId + 1;

    const employees = [
      {...employee, id: employeeId},
      ...this.state.employeeContext.employees
    ];

    this.setState({
      lastEmployeeId: employeeId,
      employeeContext: {...this.state.employeeContext, employees}
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
        <EmployeesList.Provider value={this.state.employeeContext}>
          <Component {...pageProps} />
        </EmployeesList.Provider>
      </Container>
    );
  }
}
