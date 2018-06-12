import React from 'react';
import Router from 'next/router'
import Link from 'next/link';
import EmployeeForm from '../components/employeeForm';
import Layout from '../components/Layout';

/**
 * The index page with the form
 */
export default function IndexPage()
{
  const topSection = <Link href="/result"><a>Go to the payslips list</a></Link>;

  return (
    <Layout title="Employee payslip calculator" topSection={topSection}>
      <EmployeeForm onSubmit={() => Router.push('/result')}/>
    </Layout>
  );
}
