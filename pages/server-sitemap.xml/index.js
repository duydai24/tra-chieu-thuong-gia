import {get_SEO_URL} from 'core/get_SEO_URL';
import {publicAPI} from 'core/publicAPI';
import {getServerSideSitemap} from 'next-sitemap';
import {ROUTES} from 'routers/routes';

export const getServerSideProps = async (ctx) => {

  const urls = await publicAPI('content/sitemap');
  const maps = [
    {
      loc: 'https://trachieuthuonggia.vn/',
      lastmod: new Date().toISOString(),
    },

  ];
  if (urls?.length) {
    urls.forEach(code => {
      maps.push({
        loc: get_SEO_URL(ROUTES.DetailLink(code)),
        lastmod: new Date().toISOString(),
      });
    });
  }
  return getServerSideSitemap(ctx, maps);
};

export default () => { };