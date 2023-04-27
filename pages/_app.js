
import '../src/styles/globals.scss';

import Layout from 'modules/layout';
import {useStore} from 'modules/store';
import Head from 'next/head';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Provider} from 'react-redux';

export default function MyApp({Component, pageProps}) {
  const store = useStore(pageProps.initialReduxState);

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
      <Provider store={store}>
        <Layout topLabel={pageProps.topLabel}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};