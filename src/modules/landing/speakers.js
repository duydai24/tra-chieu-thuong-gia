/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import React from 'react';

const data = [
  {
    id: 1,
    name: 'MS. LÊ THỊ KIM LOAN',
    image: 'leThiKimLoan.png',
    link: ''
  },
  {
    id: 2,
    name: 'MS. CAO THỊ HỒNG VÂN',
    image: 'caoHongVan.png',
    link: ''
  },
  {
    id: 3,
    name: 'MS. SUKHA PANNA',
    image: 'sukapanna.png',
    link: ''
  },
  {
    id: 4,
    name: 'CEO. ĐỖ NGỌC BÍCH',
    image: 'doNgocBich.png',
    link: 'https://www.dongocbich.com/'
  },
  {
    id: 4,
    name: 'CEO. EDITH GIRAUDO',
    image: 'EDITHGIRAUDO.png',
    link: 'https://blisssaigon.com/'
  },
  {
    id: 4,
    name: 'Miss. Lê Vân Anh',
    image: 'leVanAnh.png',
    link: 'http://chuyengiadaotaovananh.com'
  },
  {
    id: 7,
    name: 'CEO. LÊ HỒNG ÂN',
    image: 'leHongAn.png',
    link: 'https://www.thoibaoasiabusiness.com/truyenthongbaochi'
  },

  {
    id: 6,
    name: 'MR. LÊ HOÀNG MINH',
    image: 'hoangMinh.png',
    link: ''
  },

  {
    id: 8,
    name: 'MR. NGUYỄN MINH ANH',
    image: 'nguyenMinhAnh.png',
    link: ''
  },
  {
    id: 9,
    name: 'MR. NAM ANH',
    image: 'namAnh.png',
    link: ''
  },
  {
    id: 5,
    name: 'MR. JIKEY',
    image: 'jikey.png',
    link: ''
  },
];

function Speakers() {
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
    <div id='speakers' className='pb-0 md:pb-0 px-5 lg:px-0 relative lg:py-20'>
      <div className='pt-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
        <p className='lg:text-xl text-base text-[#B3774C]'>Trà Chiều Thương Gia</p>
        <p className='font-medium md:leading-[45px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#187462] lg:py-3 pt-1 uppercase'>Diễn giả khách mời</p>
      </div >
      <div className='flex flex-col pt-10'>
        {
          staggeredElements.map((group, index) => (
            <div className='items-center flex-col md:flex-row justify-center' key={index} style={{display: 'flex'}}>
              {group.map((item, i) => (
                <NavLink key={i} to={item.link} newtab>
                  <div className='items-center flex flex-col hover:scale-110 transition-all group cursor-pointer' style={{flex: 1}}>
                    <img src={`diengia/${item.image}`} alt={item.name} height={350} width={350} />
                    <p className='text-[#004c3d] group-hover:text-red-600 font-bold mt-[-20px] uppercase'>{item.name}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          ))
        }
      </div>
      <img className='absolute top-[-25rem] right-[-70px] opacity-40 hidden lg:block z-10' src='la1.png' alt='la' />
      <img src='./customBgRea.png' alt='' className='absolute -right-32 top-0 rotate-180 z-10' width={490} height={350} />
    </div >
  );
}

export default Speakers;