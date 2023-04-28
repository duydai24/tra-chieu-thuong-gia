/* eslint-disable @next/next/no-img-element */
import LayoutClient from 'modules/layout/LayoutClient';
import {NextSeo} from 'next-seo';
import {Helmet} from 'react-helmet';

import AboutHome from './aboutHome';
import Banner from './Banner';
import Donors from './donors';
import Guest from './guest';
import New from './new';
import Partner from './partner';
import ReasonHome from './reasonHome';
import Speakers from './speakers';
import Utilities from './utilities';

function Landing() {

  return <LayoutClient >
    <Helmet title='TRÀ CHIỀU THƯƠNG GIA'></Helmet>
    <NextSeo
      openGraph={{
        type: 'article',
        url: 'trachieuthuonggia.vn',
        title: 'TRÀ CHIỀU THƯƠNG GIA',
        description: 'Đẳng cấp vượt trên mọi giới hạn',
        article: {
          publishedTime: Date.now(),
          modifiedTime: Date.now(),
          authors: [
            'Trà Chiều Thương Gia'
          ]
        },
        images: [{
          url: '',
          width: 660,
          height: 330,
          alt: 'architecture , design, ...'
        }],
      }}
    />
    <div className=" ">
      <Banner />
      <div className='bg-[#F4EEE4] pb-10 lg:pb-0'>
        <AboutHome />
        <Speakers />
      </div>
      <Guest />
      <Utilities />
      <New />
      <ReasonHome />
      <Donors />
      <Partner />

    </div>
  </LayoutClient>;
}

export default Landing;