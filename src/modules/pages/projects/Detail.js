/* eslint-disable @next/next/no-img-element */
import {get_SEO_URL} from 'core/get_SEO_URL';
import {getRealImageUrl} from 'core/getRealImageUrl';
import {publicAPI} from 'core/publicAPI';
import {OEmbed} from 'lib/Content/OEmbed';
import LayoutClient from 'modules/layout/LayoutClient';
import {useRouter} from 'next/router';
//import Script from 'next/script';
import {NextSeo} from 'next-seo';
import {useEffect} from 'react';
import Helmet from 'react-helmet';
import {ROUTES} from 'routers/routes';

function Detail({banner = {}, data = {}}) {

  const router = useRouter();
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        router.push(ROUTES.LANDING);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };

  }, []);

  return <LayoutClient>
    <Helmet
      title={'ĐÔ LƯƠNG CENTRAL PARK'}
    />
    <NextSeo
      openGraph={{
        type: 'article',
        url: get_SEO_URL(ROUTES.DetailLink(data?.code)),
        title: data?.label || 'ĐÔ LƯƠNG CENTRAL PARK',
        description: 'Khu đô thị hạt nhân tiên phong kiến tạo trung tâm mới đô thị Đô Lương',
        article: {
          publishedTime: data?.lastModify,
          modifiedTime: data?.lastModify,
          /// expirationTime: cre,
          section: (data?.tags ? data?.tags.map(item => item.label).join(' ') : ''),
          authors: [
            'ĐÔ LƯƠNG CENTRAL PARK'
          ]
        },
        // images: [{
        //   url: getRealImageUrl(data.imageN.path + '.webp'),
        //   width: 660,
        //   height: 330,
        //   alt: data.label
        // }],
      }}
    />
    {banner.imageN?.path ? <div className='w-screen h-96' style={{
      backgroundImage: `url(${getRealImageUrl(banner.imageN.path + '.webp')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top'
    }} /> : null}
    <div className="container mx-auto bg-white  py-10  text-gray-700   relative md:mt-12 ">
      <p></p>
      <OEmbed className="p-content" html={data?.content} />
    </div>

  </LayoutClient>
    ;
}
Detail.getInitialProps = async ({query}) => {
  const {code} = query;
  const data = await publicAPI('content/get', {code, id: -1});
  const _typeData = data?.type === 7 ? 0 : data?.type;
  const {list: banner} = await publicAPI('content/list', {type: 11, pageSize: 1});
  const {list: others} = await publicAPI('content/list', {type: _typeData, pageSize: 100});
  return {
    banner: banner?.length > 0 ? banner[0] : {},
    data,
    others,
  };
};

export default Detail;