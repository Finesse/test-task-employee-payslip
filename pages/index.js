import Head from 'next/head';
import Router from 'next/router'
import EmployeeForm from '../components/EmployeeForm';

/**
 * The index page with the form
 */
export default function IndexPage()
{
  return <div>
    <Head>
      <title>Employee payslip calculator</title>
    </Head>
    <h1>Employee payslip calculator</h1>
    <EmployeeForm onSubmit={() => Router.push({pathname: '/result'})}/>
  </div>;
}
