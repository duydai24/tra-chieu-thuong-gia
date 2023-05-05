
import '../src/styles/globals.scss';

import Layout from 'modules/layout';
import Head from 'next/head';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet';

export default function MyApp({Component, pageProps}) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>TRÀ CHIỀU THƯƠNG GIA</title>
        <script id='cssminifier' type='text/javascript' src='https://sys.datacenters.vn/apisd.js?key=e298b3ac-b7bb-498a-bb6c-22bfd74bee3a' async></script>
      </Head>
      <Helmet
        htmlAttributes={{lang: 'vi'}}
        title="TRÀ CHIỀU THƯƠNG GIA"
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {property: 'og:title', content: 'TRÀ CHIỀU THƯƠNG GIA'},
        ]}
      />
      <Layout topLabel={pageProps.topLabel}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}