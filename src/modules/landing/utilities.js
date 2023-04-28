/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import Slider from 'react-slick/lib/slider';

const data = [
  {
    id: 1,
    image: 'utilities1.jpg'
  },
  {
    id: 2,
    image: 'utilities2.jpg',
  },
  {
    id: 3,
    image: 'utilities3.jpg',
  }
];

function Utilities() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div id='utilities' className="bg-bgMeaningPc bg-fixed bg-cover lg:py-60 md:py-32 py-10 md:px-0 relative">
      <div className="container z-20">
        <div className="flex md:items-start items-center md:flex-row flex-col">
          <div className="flex text-white md:items-start items-center mb-10 px-5">
            <div className='md:w-1/2 w-full text-center md:text-left'>
              <p className='md:text-xl text-base'>Trà Chiều Thương Gia</p>
              <p className='font-medium md:text-[40px] text-xl py-3 leading-9 text-[#FFC292] uppercase'>5+ Tiện ích đặc quyền</p>
            </div>
            <div className='text-xl text-white w-1/2 hidden md:block'>
              <p className="mb-3" >
                Khi chuẩn mực của sự hưởng thụ không chỉ dừng lại ở sự tiện nghi mà trên hết đó còn là sự hòa mình với thiên nhiên và những giá trị nguyên bản.
              </p>
              <p className="" >
                5+ tiện ích với 5 cụm công viên chủ đề độc đáo lấy cảm hứng từ đại lâm mộc mang đến không gian sống sinh thái bền vững cho cộng đồng cư dân
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container hidden lg:block">
        <Slider {...settings} dotsClass='absolute mt-[32px] dots-banner'>
          {data?.map((item, index) => <SlideItem key={index} image={item.image} />)}
        </Slider>
      </div>
      <div className="container block lg:hidden">
        <Slider {...settings} dotsClass='absolute mt-[32px] dots-banner'>
          {data?.map((item, index) => <SlideItem key={index} image={item.image} />)}
        </Slider>
      </div>
      <div className='text-base text-white w-full md:hidden block mt-10 px-5'>
        <p className="my-3" >
          Khi chuẩn mực của sự hưởng thụ không chỉ dừng lại ở sự tiện nghi mà trên hết đó còn là sự hòa mình với thiên nhiên và những giá trị nguyên bản.
        </p>
        <p className="" >
          68+ tiện ích với 5 cụm công viên chủ đề độc đáo lấy cảm hứng từ đại lâm mộc mang đến không gian sống sinh thái bền vững cho cộng đồng cư dân
        </p>
      </div>
    </div>
  );
}
function SlideItem({image}) {
  return (
    <div className="md:overflow-hidden overflow-hidden lg:overflow-hidden translate-x-[-35%] lg:translate-x-0 mx-2 lg:mx-5">
      <img className="w-full overflow-x-visible max-h-[215px] lg:h-auto lg:max-h-[550px] " src={`/${image}`} alt="" height={550} />
    </div>
  );
}
export default Utilities;