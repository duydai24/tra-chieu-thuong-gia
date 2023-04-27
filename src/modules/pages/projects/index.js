/* eslint-disable @next/next/no-img-element */
import {getImageNewIfExists, getRealImageUrl} from 'core/getRealImageUrl';
import {publicAPI} from 'core/publicAPI';
import LayoutClient from 'modules/layout/LayoutClient';
import React, {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

function Project({project = [], banner = {}}) {

    const numSplit = 6;
    const firstData = project.slice(0, numSplit);
    const [data, setData] = useState(firstData);
    const [currentPage, setCurrentPage] = useState(1);

    const onPaginatedData = (i) => {
        setCurrentPage(i);
        var indexFirtSplit = (i - 1) * numSplit;
        var indexLastSplit = indexFirtSplit + numSplit;
        const paginatedData = project.slice(indexFirtSplit, indexLastSplit);
        setData(paginatedData);
        window.scrollTo({top: 0, left: 0});
    };

    const _paginatedNum = [];
    for (let index = 1; index <= Math.floor(project.length / numSplit) + 1; index++) {
        _paginatedNum.push(index);
    }

    return (
        <LayoutClient  >
            <div className='w-screen h-96' style={{
                backgroundImage: `url(${getRealImageUrl(getImageNewIfExists(banner))})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }} />

            <div className=' pt-10 mb-20'>
                <div className='container  '>
                    {/*<div className='flex justify-center'>
                        <span
                            className={'px-5  py-2 hover:cursor-pointer ' + (tag === 0 ? 'text-yellow-500 font-bold' : ' ')}
                            onClick={onClearFilter}>
                            Tất cả
                        </span>
                        {tags.length > 0 && tags.map((item) =>
                            <span
                                className={'px-5  py-2 hover:cursor-pointer ' + (tag === item.id ? 'text-yellow-500 font-bold' : ' ')}
                                key={item.id}
                                onClick={() => onFilter(item.id)}>
                                {item.label}
                            </span>
                        )}
                    </div>*/}
                    <div className='mt-16 grid grid-cols-3 gap-7'>
                        {data.map((item, index) =>
                            <ProjectItem key={index} data={item} className={index} />
                        )}
                    </div>
                    <div className='mt-14 flex justify-center items-center'>
                        {currentPage > 1 && <IoIosArrowBack
                            color='#000' className='hover:cursor-pointer'
                            fontSize={20}
                            onClick={() => onPaginatedData(currentPage - 1)} />}
                        {_paginatedNum.map((item, index) =>
                            <span key={index}
                                className={'px-4 py-1 mx-2 hover:cursor-pointer ' +
                                    (currentPage === item ? 'bg-blue-header text-white ' : ' ')}
                                onClick={() => onPaginatedData(item)}>{item}</span>
                        )}
                        {(currentPage < (Math.floor(project.length / numSplit) + 1)) &&
                            <IoIosArrowForward color='#000' className='hover:cursor-pointer'
                                fontSize={20} onClick={() => onPaginatedData(currentPage + 1)} />}
                    </div>
                </div>
            </div>
            {/*<Form />*/}
        </LayoutClient>
    );
}

function ProjectItem({data, className}) {
    const {label} = data;

    return (
        <div className={'product-item item-p-' + className}>
            <div className='relative'>
                <img src={getRealImageUrl(getImageNewIfExists(data))} alt='product' className='w-full h-full' width={570} height={388} />
                <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white px-16 product-item-content'>

                </div>
            </div>

            <p className='text-xl text-center line-clamp-2 pt-2     '>{label}</p>
        </div>
    );
}

Project.getInitialProps = async () => {

    const type = 0;
    const project = await publicAPI('content/list', {type: type, pageSize: 100});
    const tags = await publicAPI('content/list', {type: 16, pageSize: 100});
    const banner = await publicAPI('content/list', {type: 11, pageSize: 100});
    if (!project) {
        return {
            teams: [],
            tags: [],
            banner: []

        };
    }
    const {list} = project;

    return {
        project: list,
        tags: tags.list,
        banner: banner.list[0]

    };
};

export default Project;