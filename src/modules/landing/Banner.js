/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import SnowBackground from 'modules/layout/snow';
import React, {useState} from 'react';
import {HiChatAlt2} from 'react-icons/hi';
import {MdPhone} from 'react-icons/md';
import Slider from 'react-slick/lib/slider';

import ContactHome from './contactHome';

const data = [
    {
        id: 1,
        image: './banner1.jpg',
        content: 'Dạo bước vườn địa đàng',
    },
    {
        id: 2,
        image: './banner2.jpg',
        content: 'Quyền lực mềm của người phụ nữ',
    },
    {
        id: 3,
        image: './banner3.jpg',
        content: 'Lifestyle - Phong Cách Sống',
    },
];

function Banner() {
    const [openForm, setOpenForm] = useState(false);

    const handleForm = () => {
        setOpenForm(!openForm);
    };

    const _className = openForm ? 'openForm' : '';
    const overFlow = openForm ? 'overFlowContact' : '';

    const [nav1, setNav1] = useState(data);
    const [nav2, setNav2] = useState(data);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipeToSlide: true,
        arrows: false,
    };
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipeToSlide: true,
        arrows: false,
    };
    return (
        <div id='home' className='relative md:h-[70vh] h-[40vh] lg:h-screen'>
            <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dotsClass='absolute bottom-5 md:bottom-10 dots-banner' >
                {data.map((item, index) =>
                    <div key={index}>
                        <div id='bannerDestop'
                            className='hidden lg:block h-screen'
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                        </div>
                        <div
                            className='lg:hidden md:h-[70vh] h-[40vh]'
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                        </div>
                    </div>
                )}
            </Slider>
            <div className='lg:max-w-[35.5rem] uppercase md:max-w-[350px] max-w-[270px] w-full text-ellipsis overflow-hidden line-clamp-2 absolute lg:bottom-[40px] md:bottom-[80px] bottom-[20px] left-1/2 -translate-x-1/2 text-[#FFC292] lg:text-4xl md:text-3xl text-lg text-center z-20'>
                <Slider {...settings1} asNavFor={nav1} ref={(slider2) => setNav2(slider2)} >
                    {data.map((item, index) =>
                        <p key={index} className='md:leading-[50px]'>{item.content}</p>
                    )}
                </Slider>
            </div>
            <span className='bg-black absolute bottom-0 left-0 h-[84px] lg:h-[180px] md:h-[200px] right-0 opacity-[62%] z-10' />
            <div className='absolute bottom-0 md:bottom-6  left-0 md:right-5 md:left-auto z-[90] flex flex-col w-screen md:w-auto translate-x-0 '>
                <div className='hidden md:block z-40 '>
                    <NavLink icon={<HiChatAlt2 className='text-white' />} newtab to='http://m.me/entiz.doluongcentralpark'
                        className='w-8 h-8 md:w-10 md:h-10 text-brown-100 font-bold my-2  bg-gradient-to-r from-[#FFC292] to-[#A96F44] flex items-center justify-center' />
                    <NavLink icon={<MdPhone className='text-white' />} newtab to='tel:0938963823'
                        className='phone-text-wrapper w-8 h-8 md:w-10 md:h-10  border-brown-100  bg-gradient-to-r from-[#FFC292] to-[#A96F44] flex items-center justify-center relative'>
                        <p className='phone-text hidden md:flex justify-center w-40 items-center px-2 h-10 bg-gradient-to-r from-[#FFC292] to-[#A96F44] text-brown-100
                     absolute top-0 left-0 opacity-0 ease-in-out text-white duration-500 -translate-x-32'>0938.963.823</p>
                    </NavLink>
                    <NavLink icon={<p className=' text-white font-bold'>Z</p>} newtab to='https://zalo.me/g/lllsba299'
                        className='phone-text-wrapper w-8 h-8 mt-2 md:w-10 md:h-10 bg-gradient-to-r from-[#FFC292] to-[#A96F44] flex items-center justify-center relative'>
                    </NavLink>
                    <p onClick={handleForm} className='cursor-pointer text-white btn-lighting hidden md:flex justify-center w-52 items-center px-2 h-10 bg-gradient-to-r from-[#FFC292] to-[#A96F44] text-brown-100
                     absolute bottom-0 right-12  ease-in-out duration-500'>Đăng ký nhận tư vấn</p>
                </div>
            </div>
            <div className={'absolute bottom-[70px] hidden lg:block right-[69px] z-50 max-w-[25%] duration-200 transition-all translate-x-[120%] ' + _className}>
                <ContactHome />
            </div>
            <span onClick={handleForm} className={'bg-black absolute bottom-0 left-0 top-0 right-0 opacity-[62%] z-40 hidden ' + overFlow} />
            <SnowBackground />
        </div >

    );
}

export default Banner;