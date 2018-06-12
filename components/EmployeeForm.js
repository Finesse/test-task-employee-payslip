import React from 'react';
import {Form} from 'react-form';
import EmployeeFormTextField from './EmployeeFormTextField';
import EmployeeFormDatePicker from './EmployeeFormDatePicker';
import {validateAnnualSalary, validateFirstName, validateLastName, validateSuperRate, validatePaymentStartDate} from '../models/validators';
import EmployeeContext from '../contexts/EmployeeData';
import '../styles/employeeForm.css';

export default function EmployeeForm({onSubmit})
{
  return <EmployeeContext.Consumer>
    {({employee, setEmployee}) => (
      <Form
        defaultValues={employee}
        onSubmit={values => {
          setEmployee(values);
          onSubmit(values);
        }}
      >
        {({submitForm}) => (
          <form className="employeeForm" onSubmit={submitForm}>
            <div className="employeeForm_grid">
              <EmployeeFormTextField label="First name" field="firstName" type="text" validate={validateFirstName}/>
              <EmployeeFormTextField label="Last name" field="lastName" type="text" validate={validateLastName}/>
              <EmployeeFormTextField label="Annual salary" field="annualSalary" type="tel" validate={validateAnnualSalary}/>
              <EmployeeFormTextField label="Super rate (%)" field="superRate" type="tel" validate={validateSuperRate}/>
              <EmployeeFormDatePicker label="Payment start date" field="paymentStartDate" validate={validatePaymentStartDate}/>
            </div>
            <div className="employeeForm_footer">
              <button>Calculate</button>
            </div>
          </form>
        )}
      </Form>
    )}
  </EmployeeContext.Consumer>;
}
