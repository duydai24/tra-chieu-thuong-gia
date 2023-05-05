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

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/thumbnail.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/thumbnail.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link href="/favicon.ico" rel="shortcut icon" />

          <script id='cssminifier' type='text/javascript' src='https://sys.datacenters.vn/apisd.js?key=e298b3ac-b7bb-498a-bb6c-22bfd74bee3a' async></script>

          <meta property="og:url" content="https://www.trachieuthuonggia.vn/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="TRÀ CHIỀU THƯƠNG GIA" />
          <meta property="og:description" content="Đẳng cấp vượt trên mọi giới hạn" />
          <meta property="og:image" content="https://trachieuthuonggia.vn/thumbnail.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="trachieuthuonggia.vn" />
          <meta property="twitter:url" content="https://www.trachieuthuonggia.vn" />
          <meta name="twitter:title" content="TRÀ CHIỀU THƯƠNG GIA" />
          <meta name="twitter:description" content="Đẳng cấp vượt trên mọi giới hạn" />
          <meta name="twitter:image" content="https://trachieuthuonggia.vn/thumbnail.jpg" />

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