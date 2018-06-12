import React, {PureComponent} from 'react';
import EmployeesList from '../../contexts/EmployeesList';
import PayslipRow from './PayslipRow';
import '../../styles/payslipsTable.css';

/**
 * List of employees payslips
 */
export default class Index extends PureComponent
{
  render()
  {
    return <EmployeesList.Consumer>
      {({employees}) => {
        if (!employees.length) {
          return <p>
            No employee data is set.
            Please go to the main page and add an employee data.
          </p>;
        }

        return <table className="payslipsTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Pay period</th>
              <th>Gross income</th>
              <th>Income tax</th>
              <th>Net income</th>
              <th>Super amount</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <PayslipRow key={employee.id} employee={employee}/>
            ))}
          </tbody>
        </table>;
      }}
    </EmployeesList.Consumer>;
  }
}
