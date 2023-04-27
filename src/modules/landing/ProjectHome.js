/* eslint-disable @next/next/no-img-element */
import {getImageNewIfExists, getRealImageUrl} from 'core/getRealImageUrl';
import NavLink from 'lib/NavLink';
import Title, {BorderTitle} from 'lib/Title';
import React from 'react';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import {ROUTES} from 'routers/routes';

function ProjectHome({data}) {

    if (!data) return null;

    const _data = data.slice(0, 6);
    return (
        <div className='pb-32'>
            <div className='container'>
                <div className='text-center mb-10'>
                    <Title text={'Dự án tiêu biểu'} className={''} />
                    <p className='mt-7 mb-10 px-5 md:px-0 text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit nulla lacinia
                        usce rhoncus aliquam leo, id semper lorem
                    </p>
                    <BorderTitle className={'mx-auto'} />
                </div>

                <div className='md:grid grid-cols-3 gap-7'>
                    {_data.map((item, index) =>
                        <ProjectItem key={index} data={item} className={index} />
                    )}
                </div>
                <NavLink to={ROUTES.Project} className={'nav-about mx-auto mt-5 flex justify-between items-center py-6 px-5 w-36 text-xl'}>
                    <span className='text-blue-text '>  Xem tiếp</span>
                    {<HiOutlineArrowNarrowRight fontSize={24} color='#E31B4D' />}
                </NavLink>
            </div>
        </div>
    );
}

function ProjectItem({data, className}) {
    const {label} = data;
    return (
        <div className={' m-5 md:m-0 product-item mb-6 item-p-' + className}>
            <div className='relative'>
                <img src={getRealImageUrl(getImageNewIfExists(data))}
                    alt='product'
                    className='w-full ' width={570} height={388} />
                <div
                    className='absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white px-16 product-item-content'>

                </div>
            </div>

            <p className='text-xl line-clamp-2 pt-2 text-center'>{label}</p>
        </div>

    );
}

export default ProjectHome;