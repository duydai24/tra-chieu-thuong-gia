/* eslint-disable @next/next/no-img-element */
import { getImageNewIfExists, getRealImageUrl } from 'core/getRealImageUrl';
import { publicAPI } from 'core/publicAPI';
import NavLink from 'lib/NavLink';
import Title, { BorderTitle } from 'lib/Title';
import LayoutClient from 'modules/layout/LayoutClient';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ROUTES } from 'routers/routes';
import { getDateFull } from 'utils/isDate';

function News({ news = [], tags = [], newsHightLight = [], banner = {} }) {
    const router = useRouter();
    const [data, setData] = useState(news);
    const [activeTag, setActiveTag] = useState(0);
    const _tags = tags.filter(x => x.isActive === true);

    const onNav = (to) => {
        router.push(ROUTES.NewsLink(to));
    };
    const onFilter = (tag) => {
        let filterData = [];
        filterData = news.filter(x => x.tags.some(y => y.tagId === tag));
        setData(filterData);
        setActiveTag(tag);
    };
    const onClearFilter = () => {
        setData(news);
        setActiveTag(0);
    };

    return (
        <LayoutClient  >
            {banner.imageN?.path ? <div className='w-screen h-96' style={{
                backgroundImage: `url(${getRealImageUrl(banner.imageN.path + '.webp')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }} /> : null}
            <div className=' '>
                <div className='container pt-14'>
                    <div className=''>
                        <Title text={'Tin tức nổi bật'} className={'mb-10'} />
                        <BorderTitle className={'  mb-14'} />
                    </div>
                    <div className=' grid grid-cols-4 grid-news-home gap-5  pb-20 '>
                        {newsHightLight.map((item, index) =>
                            <div className={'p-4 bg-white rounded-md  grid-news-item grid-news-item-' + index} key={index} >
                                <img src={getRealImageUrl(getImageNewIfExists(item))} alt='video' className='w-full cursor-pointer' width={245} height={185} onClick={() => onNav(item.code)} />
                                <div className='mt-8 content'>
                                    <div className='flex justify-between mt-5 mb-2 time'>
                                        <span className='text-10'>{item.tags && item.tags.map((item) => item.label + ' ')}</span>
                                        <span className='text-10'>{getDateFull(item.lastModify)}</span>
                                    </div>
                                    <p className='text-base text-blue-footer font-semibold cursor-pointer' onClick={() => onNav(item.code)}>{item.label}</p>
                                    <p className='mt-4 mb-2 text-base des line-clamp-4'>{item.summary}</p>

                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex justify-center mb-8'>
                        <span className={'px-3 py-2 hover:cursor-pointer ' + (activeTag === 0 ? ' text-yellow-500 font-semibold' : ' ')} onClick={onClearFilter}>Tất cả</span>
                        {_tags.map((item) =>
                            <span className={'px-3 py-2 hover:cursor-pointer ' + (activeTag === item.id ? 'text-yellow-500 font-semibold' : ' ')} key={item.id} onClick={() => onFilter(item.id)}>{item.label}</span>
                        )}
                    </div>
                    <div className=' grid grid-cols-3 gap-10'>
                        {data.map((item) =>
                            <div className={'p-4 bg-white rounded-md news-item  '} key={item.id} >
                                <img src={getRealImageUrl(getImageNewIfExists(item))} alt='video' className='w-full rounded-md' onClick={() => onNav(item.code)} />
                                <div className='mt-8 content'>
                                    <div className='flex justify-between mt-5 mb-2 time'>
                                        <span className='text-10'>{item.tags ? item.tags[0].label : ' '}</span>
                                        <span className='text-10'>{getDateFull(item.lastModify)}</span>
                                    </div>
                                    <p className='text-base text-blue-footer font-semibold'>{item.label}</p>
                                    <p className='mt-4 mb-2 text-base des line-clamp-3'>{item.summary}</p>
                                </div>
                                <NavLink text={'Xem tiếp'} className={'underline text-blue-text'} to={ROUTES.NewsLink(item.code)} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LayoutClient>

    );
}

News.getInitialProps = async () => {

    const news = await publicAPI('content/list', { type: 27, pageSize: 100 });
    const newsHightLight = await publicAPI('content/list', { type: 28, pageSize: 100 });
    const tags = await publicAPI('content/list', { type: 18, pageSize: 100 });
    const banner = await publicAPI('content/list', { type: 11, pageSize: 100 });

    if (!news) {
        return {
            news: [],
            tags: [],
            banner: [],
            newsHightLight: []
        };
    }

    return {
        news: news.list,
        tags: tags.list,
        banner: banner.list[0],
        newsHightLight: newsHightLight.list
    };
};

export default News;