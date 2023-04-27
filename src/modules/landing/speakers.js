/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import {webHost} from 'config/apiAddress';
import NavLink from 'lib/NavLink';
import React, {useEffect, useState} from 'react';

function Speakers() {
  const [speakers, setSpeakers] = useState();
  const fetchData = async () => {
    const {data} = await axios.get(`${webHost}/api/hello`);
    setSpeakers(data.speakers);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div id='speakers' className='pb-0 md:pb-0 px-5 lg:px-0 relative lg:py-20'>
      <div className='pt-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
        <p className='lg:text-xl text-base text-[#B3774C]'>Trà Chiều Thương Gia</p>
        <p className='font-medium md:leading-[45px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#187462] lg:py-3 pt-1 uppercase'>Diễn giả khách mời</p>
      </div >
      <div className='flex items-center justify-center z-20 flex-col md:flex-row lg:flex-row'>
        {speakers?.slice(0, 4).map((item, index) =>
          <NavLink key={index} to={item.link} newtab>
            <div className='flex items-center flex-col group hover:scale-110 transition-all cursor-pointer'>
              <img src={`diengia/${item.image}`} alt={item.image} width={400} height={400} />
              <p className='font-bold text-[#00392D] -mt-10 group-hover:text-red-600'>{item.name}</p>
            </div>
          </NavLink>
        )}
      </div>
      <div className='flex items-center justify-center z-20 flex-col md:flex-row lg:flex-row'>
        {speakers?.slice(4).map((item, index) =>
          <NavLink key={index} to={item.link} newtab>
            <div className='flex items-center flex-col group hover:scale-110 transition-all cursor-pointer'>
              <img className='' src={`diengia/${item.image}`} alt={item.image} width={400} height={400} />
              <p className='font-bold text-[#00392D] group-hover:text-red-600 -mt-10'>{item.name}</p>
            </div>
          </NavLink>
        )}
      </div >
      <img className='absolute top-[-25rem] right-[-70px] opacity-40 hidden lg:block z-10' src='la1.png' alt='la' />
      <img src='./customBgRea.png' alt='' className='absolute -right-32 top-0 rotate-180 z-10' width={490} height={350} />
    </div >
  );
}

export default Speakers;