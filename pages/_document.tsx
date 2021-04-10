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
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <link href="http://fonts.cdnfonts.com/css/merriweather?styles=14569,14567" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,300&family=Open+Sans:wght@300&display=swap"
            rel="stylesheet"
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
