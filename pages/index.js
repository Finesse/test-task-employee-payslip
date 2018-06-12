import React from 'react';
import Router from 'next/router'
import EmployeeForm from '../components/EmployeeForm';
import Layout from '../components/Layout';

/**
 * The index page with the form
 */
export default function IndexPage()
{
  return (
    <Layout title="Employee payslip calculator">
      <EmployeeForm onSubmit={() => Router.push({pathname: '/result'})}/>
    </Layout>
  );
}
