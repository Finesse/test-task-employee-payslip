import Document, {Head, Main, NextScript} from 'next/document'

/**
 * Custom document
 *
 * @see https://github.com/zeit/next.js#custom-document
 */
export default class MyDocument extends Document
{
  /**
   * @inheritDoc
   */
  render()
  {
    return (
      <html>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <link rel="stylesheet" href="/_next/static/style.css"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}
