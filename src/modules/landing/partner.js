/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import {webHost} from 'config/apiAddress';
import React, {useEffect, useState} from 'react';
import Slider from 'react-slick/lib/slider';

function Partner() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const {data} = await axios.get(`${webHost}/api/hello`);
    setData(data.parther);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className='md:py-20 md:pb-40 py-10 bg-[#F4EEE4]'>
      <div className='container'>
        <div className='pt-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
          <p className='lg:text-xl text-base text-[#B3774C]'>Trà Chiều Thương Gia</p>
          <p className='font-medium md:leading-[55px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#187462] lg:py-3 pt-1 uppercase'>Đối tác của chúng tôi</p>
        </div >
        <div className='hidden md:block'>
          <div className='flex items-center justify-between'>
            {data?.map((item, index) => <img key={index} src={item.image} alt={item.image} width={200} height={150} />)}
          </div>
        </div>
        <div className='block md:hidden'>
          <Slider {...settings}>
            {data?.map((item, index) =>
              <div key={index} >
                <img alt={item.image} src={item.image} width={162} height={82} className='mx-auto' />
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Partner;