/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import React from 'react';
import Slider from 'react-slick/lib/slider';

const data = [
  {
    image: 'par1-removebg-preview.png',
    link: ''
  },
  {
    image: 'par2-removebg-preview.png',
    link: 'https://nextpay.vn/'
  },
  {
    image: 'par3-removebg-preview.png',
    link: ''
  },
  {
    image: 'par4-removebg-preview.png',
    link: 'https://centraltravel.vn/'
  },
  {
    image: 'par5-removebg-preview.png',
    link: 'https://www.nearholdingasiabusinessinsider.com/'
  },
  {
    image: 'par6-removebg-preview.png',
    link: ''
  },
  {
    image: 'par7-removebg-preview.png',
    link: 'https://threeb.io/'
  },
  {
    image: 'par8-removebg-preview.png',
    link: 'https://locamos.vn/'
  }
];

function Partner() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
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
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ],
  };

  return (
    <div id='parther' className='md:py-20 md:pb-40 py-10 bg-[#F4EEE4]'>
      <div className='container'>
        <div className='pt-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
          <p className='lg:text-xl text-base text-[#B3774C]'>Trà Chiều Thương Gia</p>
          <p className='font-medium md:leading-[55px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#187462] lg:py-3 pt-1 uppercase'>Đối tác của chúng tôi</p>
        </div >
        {/*<div className='hidden md:block'>
          <div className='flex items-center justify-between'>
            {data?.map((item, index) => <img key={index} src={item.image} alt={item.image} width={200} height={150} />)}
          </div>
        </div>*/}
        <div className=''>
          <Slider {...settings}>
            {data?.map((item, index) =>
              <div className='outline-none' key={index} >
                <NavLink to={item.link} newtab>
                  <img alt={item.image} src={item.image} width={162} height={82} className='mx-auto outline-none' />
                </NavLink>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Partner;