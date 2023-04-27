/* eslint-disable @next/next/no-img-element */
import {webHost} from 'config/apiAddress';
import {get_SEO_URL} from 'core/get_SEO_URL';
import {getImageNewIfExists, getRealImageUrl} from 'core/getRealImageUrl';
import {publicAPI} from 'core/publicAPI';
import {OEmbed} from 'lib/Content/OEmbed';
import LayoutClient from 'modules/layout/LayoutClient';
import {useRouter} from 'next/router';
import {NextSeo} from 'next-seo';
import {useEffect} from 'react';
import Helmet from 'react-helmet';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import {FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share';
import {ROUTES} from 'routers/routes';
import {getDateFull} from 'utils/isDate';

function Detail({banner = {}, data = {}, tags = [], posts = []}) {

  const router = useRouter();
  let _postWtags = [];
  for (let index = 0; index < tags.length; index++) {
    const element = tags[index];
    const postFilter = posts.filter(x => x.tags.some(y => y.tagId === element.id));
    _postWtags.push({tagName: element.label, posts: postFilter});

  }
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

  const {content, label, lastModify, code} = data;

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
        images: [{
          // url: getRealImageUrl(data.imageN.path + '.webp'),
          width: 660,
          height: 330,
          alt: data?.label
        }],
      }}
    />
    {banner.imageN?.path ? <div className='w-screen h-96' style={{
      backgroundImage: `url(${getRealImageUrl(banner.imageN.path + '.webp')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top'
    }} /> : null}

    <div className="container mx-auto bg-white pt-20 pb-10">
      <div className='side-bar grid gap-14'>
        <div>
          <p className='font-bold text-3xl mb-2'> {label}</p>
          <div className='flex justify-between items-center pb-7 mb-10 border-b border-solid border-blue-footer'>
            <span className='text-10'>{getDateFull(lastModify)}</span>
            <ShareSocial facebookLink={''} twitterLink={''} instagramLink={''} linkerdinLink={''} code={code} />
          </div>
          <OEmbed className="p-content" html={content} />
        </div>
        <div >
          {_postWtags.map((item, index) =>
            <div key={index}>
              <p className='border-b border-blue-footer border-solid py-3 text-blue-footer pb-6'>{item.tagName}</p>
              {item.posts.map((postItem) =>
                <div key={postItem.id} className='flex my-5 cursor-pointer' onClick={() => router.push(ROUTES.NewsLink(postItem.code))}>
                  <img alt='img-other' src={getRealImageUrl(getImageNewIfExists(postItem))}
                    width={100} height={100} className='mr-5 rounded-md' />
                  <div>
                    <p className='text-base font-bold mb-5 line-clamp-1'>{postItem.label}</p>
                    <p className='line-clamp-2'>
                      {postItem.summary}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    {/*<Form />*/}
  </LayoutClient>
    ;
}
Detail.getInitialProps = async ({query}) => {
  const {code} = query;
  const data = await publicAPI('content/get', {code, id: -1});
  const {list: banner} = await publicAPI('content/list', {type: 11, pageSize: 1});
  const tags = await publicAPI('content/list', {type: 18, pageSize: 100});
  const posts = await publicAPI('content/list', {type: 27, pageSize: 100});

  return {
    banner: banner?.length > 0 ? banner[0] : {},
    data,
    posts: posts.list,
    tags: tags.list,
  };
};

function ShareSocial({code}) {
  return (
    <div className='flex'>
      {<FacebookShareButton url={webHost + code}>
        <FaFacebookF size={11} className='w-4 h-4 share-icon rounded-sm border border-solid border-blue-footer' />
      </FacebookShareButton>}
      {<TwitterShareButton url={webHost + code}>
        <FaTwitter size={11} className='w-4 h-4 share-icon rounded-sm border border-solid border-blue-footer' />
      </TwitterShareButton>}
      {<LinkedinShareButton url={webHost + code}>
        <FaLinkedin size={11} className='w-4 h-4 share-icon rounded-sm border border-solid border-blue-footer' />
      </LinkedinShareButton>}
      {<InstapaperShareButton url={webHost + code}>
        <FaInstagram size={11} className='w-4 h-4 share-icon rounded-sm border border-solid border-blue-footer' />
      </InstapaperShareButton>}
    </div>
  );
}
export default Detail;