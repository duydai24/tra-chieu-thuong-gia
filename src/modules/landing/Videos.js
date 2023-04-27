/* eslint-disable @next/next/no-img-element */
import {getImageNewIfExists, getRealImageUrl} from 'core/getRealImageUrl';
import Title, {BorderTitle} from 'lib/Title';
import React, {useState} from 'react';
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';

function NextArrow(props) {
    const {className, onClick} = props;
    return (
        <div
            className={className + ' next-video '}
            onClick={onClick}
        >
            <HiOutlineArrowNarrowRight color='#E31B4D' fontSize={30} />
        </div>
    );
}

function PrevArrow(props) {
    const {className, onClick} = props;
    return (
        <div
            className={className + ' prev-video'}
            onClick={onClick}
        >
            <HiOutlineArrowNarrowLeft color='#E31B4D' fontSize={30} />
        </div>
    );
}

const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]

};
function Videos({data}) {
    const [video, setVideo] = useState('');
    const [openScreen, setOpenScreen] = useState(false);
    const onOpenVideo = (link) => {
        setOpenScreen(true);
        setVideo(link);
    };

    return (
        <div className='bg-blue-bg pt-40 pb-44 video'>
            <div className='container'>
                <Title text={'Video dự án'} className={'mb-9 ml-5 md:ml-0'} />
                <BorderTitle className={'ml-5 md:ml-0'} />
                <div className='pt-20 slide-video -mx-4'>
                    <Slider {...settings}  >
                        {data.map((item, index) =>
                            <div key={index} >
                                <div className='p-4 bg-white rounded-md  mx-4 video-item mt-2 mb-4 '>
                                    <div className='w-full h-56 relative video-item-image cursor-pointer' style={{
                                        backgroundImage: `url(${getRealImageUrl(getImageNewIfExists(item))})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                        <div className='overlay-video absolute w-full h-full z-10   flex items-center justify-center' onClick={() => onOpenVideo(item.extra)} >
                                            <img alt='play-btn' src='PlayVideo.webp' width={60} height={60} />
                                        </div>
                                    </div>
                                    <div className='mt-12'>
                                        <p className='text-xl md:text-3xl text-gray-border font-bold'>{item.label}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
                {openScreen ? <div className='fixed top-0 left-0 w-screen h-screen z-50'>
                    <div className='relative w-full h-full'>
                        <div className='absolute w-full h-full z-50 top-0 left-0 bg-black bg-opacity-50 cursor-pointer' onClick={() => setOpenScreen(false)} />
                        <div className='video-on-screen'>
                            <ReactPlayer controls url={video} width={'100%'} height={'100%'} />
                        </div>
                    </div>

                </div> : null}

            </div>

        </div>
    );
}

export default Videos;