import Link from 'next/link';
import React from 'react';
import EmployeeContext from '../contexts/EmployeeData';
import Layout from '../components/Layout';

/**
 * The result page
 */
export default function ResultPage()
{
  return (
    <Layout title="Employee payslip result">
      <EmployeeContext.Consumer>
        {({employee}) => (
          <div>
            <Link href="/"><a>Go back</a></Link>
            <div>Your name is {employee.firstName} {employee.lastName}</div>
          </div>
        )}
      </EmployeeContext.Consumer>
    </Layout>
  );
}
