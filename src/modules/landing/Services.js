import NavLink from 'lib/NavLink';
import Title, {BorderTitle} from 'lib/Title';
import React from 'react';
import {FaServicestack} from 'react-icons/fa';

function Services({data}) {
    return (
        <div className={'text-center pb-32'}>
            <div className='container'>
                <Title text={'Dịch vụ'} className={''} />
                <p className='mt-7 mb-10 px-5 md:px-0 text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit nulla lacinia
                    usce rhoncus aliquam leo, id semper lorem
                </p>
                <BorderTitle className={'mx-auto'} />
                <div className='mt-14 md:grid grid-cols-3 gap-10'>
                    {data?.slice(0, 3).map((item, index) =>
                        <ServiceItem key={index} icon={<FaServicestack className='text-3xl text-blue-header' />}
                            text={item.summary}
                            title={item.label} to={item.code} />
                    )}
                </div>
            </div>
        </div>
    );
}

function ServiceItem({icon, title, text, to, className}) {
    return (<div className={'text-center px-8 pt-16 pb-11 flex flex-col justify-center service-item ' + className}>
        <div className='w-24 h-24 flex items-center justify-center rounded-full bg-blue-bg mx-auto icon'>
            {icon}
        </div>
        <p className='text-blue-footer text-3xl font-bold mb-6 mt-11'>{title}</p>
        <p className='text-gray-border mb-6 leading-7'>{text}</p>
        <NavLink to={to} text={'Xem tiếp'} className={'underline text-blue-text'} />
    </div>);
}

export default Services;

