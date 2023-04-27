/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import {webHost} from 'config/apiAddress';
import React, {useEffect, useState} from 'react';
import Slider from 'react-slick/lib/slider';

function Donors() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const {data} = await axios.get(`${webHost}/api/hello`);
    setData(data.donors);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="lg:py-20 py-10 change-background">
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