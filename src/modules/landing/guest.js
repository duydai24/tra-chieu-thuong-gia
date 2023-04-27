/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import {webHost} from 'config/apiAddress';
import React, {useEffect, useState} from 'react';

function Guest() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const {data} = await axios.get(`${webHost}/api/hello`);
    setData(data?.guest);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const splitElements = () => {
    const result = [];
    let i = 0;
    while (i < data?.length) {
      if (result.length % 2 === 0) {
        result.push(data?.slice(i, i + 4));
        i += 4;
      } else {
        result.push(data?.slice(i, i + 5));
        i += 5;
      }
    }
    return result;
  };

  const staggeredElements = splitElements();
  return (
    <div className='change-background py-24'>
      <div className='pt-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
        <p className='lg:text-xl text-base text-[#B3774C] mb-5'>Trà Chiều Thương Gia</p>
        <p className='font-medium md:leading-[45px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#FFC292] lg:py-3 pt-1 uppercase'>Khách mời đặc biệt</p>
      </div >
      <div className='flex items-center flex-col pt-10'>
        {staggeredElements.map((group, index) => (
          <div className='items-center' key={index} style={{display: 'flex'}}>
            {group.map((item) => (
              <div className='items-center flex flex-col hover:scale-110 transition-all group cursor-pointer' key={item.id} style={{flex: 1}}>
                <img src={`./khachMoi/${item.image}`} alt={item.name} height={350} width={350} />
                <p className='text-[#FFC292] group-hover:text-red-600 font-bold'>{item.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Guest;