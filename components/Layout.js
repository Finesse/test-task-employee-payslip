import React from 'react';
import Head from 'next/head';
import '../styles/common.css';

/**
 * Common application layout
 */
export default function Layout({title, topSection, children})
{
  return <div className="app">
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
    {topSection ? <div className="app_topSection">{topSection}</div> : null}
    {children}
  </div>;
}
