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
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
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

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
//MyDocument.getInitialProps = async (ctx) => {
//  // Resolution order
//  //
//  // On the server:
//  // 1. app.getInitialProps
//  // 2. page.getInitialProps
//  // 3. document.getInitialProps
//  // 4. app.render
//  // 5. page.render
//  // 6. document.render
//  //
//  // On the server with error:
//  // 1. document.getInitialProps
//  // 2. app.render
//  // 3. page.render
//  // 4. document.render
//  //
//  // On the client
//  // 1. app.getInitialProps
//  // 2. page.getInitialProps
//  // 3. app.render
//  // 4. page.render

//  // Render app and page and get the context of the page with collected side effects.
//  //const sheets = new ServerStyleSheets();
//  const originalRenderPage = ctx.renderPage;

//  ctx.renderPage = () =>
//    originalRenderPage({
//      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//    });

//  const initialProps = await Document.getInitialProps(ctx);

//  return {
//    ...initialProps,
//    // Styles fragment is rendered after the app and page rendering finish.
//    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
//  };
//};