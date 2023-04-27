/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import {webHost} from 'config/apiAddress';
import {get_SEO_URL} from 'core/get_SEO_URL';
import {getRealImageUrl} from 'core/getRealImageUrl';
import {publicAPI} from 'core/publicAPI';
import LayoutClient from 'modules/layout/LayoutClient';
import {NextSeo} from 'next-seo';
import {Helmet} from 'react-helmet';
import {ROUTES} from 'routers/routes';

import AboutHome from './aboutHome';
import Banner from './Banner';
import Donors from './donors';
import Guest from './guest';
import New from './new';
import Partner from './partner';
import ReasonHome from './reasonHome';
import Speakers from './speakers';
import Utilities from './utilities';

function Landing({project = [], guest = [], speakers = [], other = {}, news = [], services = []}) {
  const {headerTitle, thumnail} = other;
  return <LayoutClient >
    <Helmet title={headerTitle}></Helmet>
    {project?.length > 0 ?
      <NextSeo
        openGraph={{
          type: 'article',
          url: get_SEO_URL(ROUTES.LANDING),
          title: headerTitle,
          description: 'Đẳng cấp vượt trên mọi giới hạn',
          article: {
            publishedTime: Date.now(),
            modifiedTime: Date.now(),
            authors: [
              'Trà Chiều Thương Gia'
            ]
          },
          images: [{
            url: getRealImageUrl(thumnail),
            width: 660,
            height: 330,
            alt: 'architecture , design, ...'
          }],
        }}
      /> : null}

    <div className=" ">
      <Banner />
      <div className='bg-[#F4EEE4] pb-10 lg:pb-0'>
        <AboutHome />
        <Speakers data={speakers} />
      </div>
      <Guest data={guest} />
      <Utilities data={project} />
      <New data={news} />
      <ReasonHome data={services} />
      <Donors />
      <Partner />

    </div>
  </LayoutClient>;
}
Landing.getInitialProps = async () => {
  const serverData = await axios.get(`${webHost}/api/hello`);
  const news = await publicAPI('content/list', {type: 27, pageSize: 100});
  const otherData = await publicAPI('content/list', {type: 90, pageSize: 10});
  const services = await publicAPI('content/list', {type: 67, pageSize: 100});
  const project = await publicAPI('content/list', {type: 0, pageSize: 100});
  let other = {};
  if (otherData) {
    const {list} = otherData;
    try {
      const {extra} = list[0];
      other = JSON.parse(extra);
    } catch {
      other = {};
    }
  }

  if (!serverData) {
    return {
      banner: [],
      speakers: [],
      guest: [],
      project: [],
      services: [],
      news: [],
      other: {}
    };
  }
  //const {banner} = serverData;
  //const {speakers} = serverData;
  //const {guest} = serverData;
  return {
    //banner: banner,
    //speakers: speakers,
    //guest: guest,
    //bannerM: banner?.map(item => ({...item, original: getRealImageUrl(item.mobile || item.image)})),
    project: project?.list || [],
    services: services?.list || [],
    news: news?.list || [],
    other
  };
};
export default Landing;