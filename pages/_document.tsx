import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name='keywords'
            content='Avoid Regulatory Pitfalls and Fraud with CaaS.'
          />
          <meta
            name='keywords'
            content='Let our CaaS solution guide you easily through your complete
              Crypto Compliance Process'
          />

          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://caas-dashboard.herokuapp.com/'
          />
          <meta property='og:title' content='A & D Frorensics CaaS' />
          <meta
            property='og:description'
            content='Let our CaaS solution guide you easily through your complete
              Crypto Compliance Process.'
          />
          <meta
            property='og:image'
            content='https://caas-dashboard.herokuapp.com/og.png'
          />

          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://caas-dashboard.herokuapp.com/'
          />
          <meta property='twitter:title' content='A & D Frorensics CaaS' />
          <meta
            property='twitter:description'
            content='Avoid Regulatory Pitfalls and Fraud with CaaS.'
          />
          <meta
            property='twitter:image'
            content='https://caas-dashboard.herokuapp.com/og.png'
          />
          <meta
            name='description'
            content='Avoid Regulatory Pitfalls and Fraud with CaaS.'
          />
          {/*  */}
          <link rel='icon' href='/favicon.ico' />

          {/* Fonts */}
          <link
            rel='preload'
            href='/fonts/Aeonik-Air.otf'
            as='font'
            type='font/otf'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Aeonik-Regular.otf'
            as='font'
            type='font/otf'
            crossOrigin=''
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
