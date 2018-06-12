import React from 'react';
import DatePicker from 'react-datepicker';
import {Field} from 'react-form';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/employeeForm.css';

/**
 * Styled date picker for the employee form
 */
export default function EmployeeFormDatePicker({label, validate, field})
{
  return <Field field={field} validate={validate}>
    {({value, error, setValue, setTouched}) => (
      <div>
        <div className="employeeForm_label">{label}</div>
        <DatePicker
          selected={value ? moment(value) : undefined}
          onChange={date => setValue(date)}
          onBlur={() => setTouched()}
          dateFormat="MMMM D, YYYY"
          className="employeeForm_input"
        />
        {error ? <div className="employeeForm_error">{error}</div> : null}
      </div>
    )}
  </Field>
}
