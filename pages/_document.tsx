import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
          ></link>
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    )
  }
}
