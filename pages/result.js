import Link from 'next/link';
import React from 'react';
import EmployeeContext from '../contexts/EmployeeData';

/**
 * The result page
 */
export default function ResultPage()
{
  return <EmployeeContext.Consumer>
    {({employee}) => (
      <div>
        <Link href="/"><a>Go back</a></Link>
        <div>Your name is {employee.firstName} {employee.lastName}</div>
      </div>
    )}
  </EmployeeContext.Consumer>;
}
