/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick/lib/slider';

const data = [
  {
    id: 1,
    image: 'donors1.png',
    link: ''
  },
  {
    id: 2,
    image: 'donors2.png',
    link: ''
  },
  {
    id: 3,
    image: 'donors3.png',
    link: ''
  },
  {
    id: 4,
    image: 'donors4.png',
    link: ''
  },
  {
    id: 5,
    image: 'donors5.png',
    link: ''
  },
  {
    id: 6,
    image: 'donors6.png',
    link: ''
  },
  {
    id: 7,
    image: 'donors7.png',
    link: ''
  },
  {
    id: 8,
    image: 'donors8.png',
    link: ''
  },
  {
    id: 9,
    image: 'donors9.png',
    link: ''
  },
  {
    id: 10,
    image: 'donors10.png',
    link: ''
  },
  {
    id: 11,
    image: 'donors11.png',
    link: ''
  },
  {
    id: 12,
    image: 'donors12.png',
    link: ''
  },
  {
    id: 13,
    image: 'donors13.png',
    link: ''
  },
  {
    id: 14,
    image: 'donors14.png',
    link: ''
  },
  {
    id: 15,
    image: 'donors15.png',
    link: ''
  },
  {
    id: 16,
    image: 'donors16.png',
    link: ''
  },
  {
    id: 17,
    image: 'donors17.png',
    link: ''
  },
  {
    id: 18,
    image: 'donors18.png',
    link: ''
  },
  {
    id: 19,
    image: 'donors19.png',
    link: ''
  },
  {
    id: 20,
    image: 'donors20.png',
    link: ''
  },
  {
    id: 21,
    image: 'donors21.png',
    link: ''
  },
  {
    id: 22,
    image: 'donors22.png',
    link: ''
  },
  {
    id: 23,
    image: 'donors23.png',
    link: ''
  },
  {
    id: 24,
    image: 'donors24.png',
    link: ''
  },
  {
    id: 25,
    image: 'donors25.png',
    link: ''
  },
  {
    id: 26,
    image: 'donors26.png',
    link: ''
  },
  {
    id: 27,
    image: 'donors27.png',
    link: ''
  },
  {
    id: 28,
    image: 'donors28.png',
    link: ''
  },
  {
    id: 29,
    image: 'donors29.png',
    link: ''
  },
  {
    id: 30,
    image: 'donors30.png',
    link: ''
  },
];

function Donors() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
  };
  return (
    <div id='donors' className="lg:py-20 py-10 change-background">
      <div className='container'>
        <div className='pb-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto px-2'>
          <p className='lg:text-xl text-base text-[#B3774C] mb-0 lg:mb-2'>Trà Chiều Thương Gia</p>
          <p className='font-medium md:leading-[45px] lg:text-[40px] md:text-xl leading-7 text-base text-[#FFC292] text-center lg:py-3 pt-1 uppercase'>Nhà tài trợ cùng các <br /> hãng thông tấn báo chí trong nước</p>
        </div >
        <div className='hidden md:block lg:pt-10'>
          <Slider {...settings} dotsClass='absolute dots-banner' >
            {data?.map((item, index) =>
              <div key={index} className='flex items-center justify-between h-auto'>
                <img className='mx-auto' src={`baoChi/${item.image}`} alt={item.image} width={200} height={150} />
              </div>
            )}
          </Slider>
        </div>
        <div className='block md:hidden lg:pt-10 px-5'>
          <Slider {...settings} dotsClass='absolute dots-banner' >
            {data?.map((item, index) =>
              <div key={index} className='flex items-center justify-between h-auto'>
                <img className='mx-auto' src={`baoChi/${item.image}`} alt={item.image} width={150} height={100} />
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Donors;