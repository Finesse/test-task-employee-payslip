import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import PayslipsList from '../components/payslipsList';

/**
 * The result page
 */
export default function ResultPage()
{
  const topSection = <Link href="/"><a>« Go back</a></Link>;

  return (
    <Layout title="Employee payslip result" topSection={topSection}>
      <PayslipsList/>
    </Layout>
  );
}
