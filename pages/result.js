import Link from 'next/link';
import React from 'react';
import EmployeeContext from '../contexts/EmployeeData';
import Layout from '../components/Layout';
import Payslip from '../components/Payslip';
import NoEmployeeError from '../components/NoEmployeeError';

/**
 * The result page
 */
export default function ResultPage()
{
  return (
    <Layout title="Employee payslip result">
      <Link href="/"><a>« Go back</a></Link>
      <EmployeeContext.Consumer>
        {({employee}) => employee
          ? <Payslip employee={employee}/>
          : <NoEmployeeError/>
        }
      </EmployeeContext.Consumer>
    </Layout>
  );
}
