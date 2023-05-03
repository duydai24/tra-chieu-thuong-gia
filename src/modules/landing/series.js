/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick/lib/slider';

const data = [
  {
    image: 'poster1.png'
  },
  {
    image: 'poster2.png'
  },
  {
    image: 'poster3.png'
  },
  {
    image: 'poster4.png'
  },
  {
    image: 'poster5.png'
  },
  {
    image: 'poster6.png'
  },
  {
    image: 'poster7.png'
  },
  {
    image: 'poster8.png'
  },
  {
    image: 'poster9.png'
  },
  {
    image: 'poster10.png'
  },
  {
    image: 'poster11.png'
  },
  {
    image: 'poster12.png'
  },
  {
    image: 'poster13.png'
  },
  {
    image: 'poster14.png'
  },
  {
    image: 'poster15.png'
  },
  {
    image: 'poster16.png'
  },
  {
    image: 'poster17.png'
  },
  {
    image: 'poster17.png'
  },
  {
    image: 'poster18.png'
  },
  {
    image: 'poster19.png'
  },
  {
    image: 'poster20.png'
  },
  {
    image: 'poster21.png'
  },
  {
    image: 'poster22.png'
  },
  {
    image: 'poster23.png'
  },
  {
    image: 'poster24.png'
  },
  {
    image: 'poster25.png'
  }
];

function Series() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div id='parther' className='md:py-20 md:pb-40 py-10 bg-[#F4EEE4]'>
      <div className='container'>
        <div className='pt-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
          <p className='lg:text-xl text-base text-[#B3774C]'>Trà Chiều Thương Gia</p>
          <p className='font-medium md:leading-[55px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#187462] lg:py-3 pt-1 uppercase'>Series Trà Chiều</p>
        </div >
        <div className='mt-20'>
          <p className='text-[#00392D] font-medium text-3xl mb-5'>Trà chiều thương gia số đầu tiên:</p>
          <Slider {...settings}>
            {data?.map((item, index) =>
              <div key={index} >
                <img alt={item.image} src={`/thiepmoi/lan1/${item.image}`} width={280} height={100} className='mx-auto' />
              </div>
            )}
          </Slider>
        </div>
        <div className='mt-20'>
          <p className='text-[#00392D] font-medium text-3xl mb-5'>Trà chiều thương gia số thứ 2:</p>
          <Slider {...settings}>
            {data?.map((item, index) =>
              <div key={index} >
                <img alt={item.image} src={`/thiepmoi/lan1/${item.image}`} width={280} height={100} className='mx-auto' />
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Series;