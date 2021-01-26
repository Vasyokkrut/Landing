import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' >
        <Head>
          <meta name="theme-color" content="#0000ff" />
          <meta name="description" content="landings and fullstack web developer" />
          <meta
            name="keywords"
            content="MongoDB, Express, React, Nodejs, MERN, landing, developer, fullstack"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
