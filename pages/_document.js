/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable react/no-unknown-property */
import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';
//import Script from 'next/script';

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="vi"  >
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          {this.helmetHeadComponents}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next {
              height: 100%;
              min-height:100vh;
              background: #ffffff;
            }
          `}</style>
          <div id='recaptcha-container'></div>

        </body>
      </Html>
    );
  }
}