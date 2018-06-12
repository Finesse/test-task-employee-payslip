import React from 'react';
import {Field} from 'react-form';
import '../../styles/employeeForm.css';

/**
 * Styled text field the employee form
 */
export default function EmployeeFormTextField({label, validate, field, ...props})
{
  return <Field field={field} validate={validate}>
    {({value, error, setValue, setTouched}) => (
      <div>
        <div className="employeeForm_label">{label}</div>
        <input
          {...props}
          value={value || ''}
          onInput={event => setValue(event.target.value)}
          onBlur={() => setTouched()}
          className="employeeForm_input"
        />
        {error ? <div className="employeeForm_error">{error}</div> : null}
      </div>
    )}
  </Field>
}
