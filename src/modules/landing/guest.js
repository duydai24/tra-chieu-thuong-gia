/* eslint-disable @next/next/no-img-element */
import React from 'react';

const data = [
  {
    id: 1,
    name: 'MS. LÊ THỊ KIM LOAN',
    image: 'Artboard 1.png',
    link: ''
  },
  {
    id: 2,
    name: 'MS. CAO THỊ HỒNG VÂN',
    image: 'Artboard 2.png',
    link: ''
  },
  {
    id: 3,
    name: 'MS. SUKHA PANNA',
    image: 'Artboard 3.png',
    link: ''
  },
  {
    id: 4,
    name: 'CEO - ĐỖ NGỌC BÍCH',
    image: 'Artboard 18.png',
    link: 'https://www.dongocbich.com/'
  },
  {
    id: 5,
    name: 'MR. JIKEY',
    image: 'Artboard 4.png',
    link: ''
  },
  {
    id: 6,
    name: 'MR. LÊ HOÀNG MINH',
    image: 'Artboard 5.png',
    link: ''
  },
  {
    id: 7,
    name: 'CEO - LÊ HỒNG ÂN',
    image: 'Artboard 6.png',
    link: 'https://www.thoibaoasiabusiness.com/truyenthongbaochi'
  },
  {
    id: 8,
    name: 'MR. NGUYỄN MINH ANH',
    image: 'Artboard 7.png',
    link: ''
  },
  {
    id: 9,
    name: 'MR. NAM ANH',
    image: 'Artboard 8.png',
    link: ''
  },
  {
    id: 1,
    name: 'MS. LÊ THỊ KIM LOAN1',
    image: 'Artboard 9.png',
    link: ''
  },
  {
    id: 2,
    name: 'MS. CAO THỊ HỒNG VÂN',
    image: 'Artboard 10.png',
    link: ''
  },
  {
    id: 3,
    name: 'MS. SUKHA PANNA',
    image: 'Artboard 11.png',
    link: ''
  },
  {
    id: 4,
    name: 'CEO - ĐỖ NGỌC BÍCH',
    image: 'Artboard 12.png',
    link: 'https://www.dongocbich.com/'
  },
  {
    id: 5,
    name: 'MR. JIKEY',
    image: 'Artboard 13.png',
    link: ''
  },
  {
    id: 6,
    name: 'MR. LÊ HOÀNG MINH',
    image: 'Artboard 14.png',
    link: ''
  },
  {
    id: 7,
    name: 'CEO - LÊ HỒNG ÂN',
    image: 'Artboard 15.png',
    link: 'https://www.thoibaoasiabusiness.com/truyenthongbaochi'
  },
  {
    id: 8,
    name: 'MR. NGUYỄN MINH ANH',
    image: 'Artboard 16.png',
    link: ''
  },
  {
    id: 9,
    name: 'MR. NAM ANH',
    image: 'Artboard 17.png',
    link: ''
  }
];

function Guest() {

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