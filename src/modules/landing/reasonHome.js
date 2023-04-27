/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true,
  arrows: true,
};
const settings1 = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true,
  arrows: false,
  centerMode: true,
  centerPadding: '70px',
};

const dataText = [
  {number: '1', content: 'Vị trí kim cương lõi trung tâm Đô Lương'},
  {number: '2', content: 'Đón đầu quy hoạch “thị xã” Đô Lương'},
  {number: '3', content: 'Đón đầu xu hướng sống sinh thái'},
  {number: '4', content: 'Phố thương mại, kinh doanh sầm uất'},
  {number: '5', content: 'Tiện ích trọn vẹn, đủ đầy'},
  {number: '6', content: 'Thiết kế tinh hoa, đẳng cấp'},
  {number: '7', content: 'Thế đất phong thủy thịnh vượng'},
  {number: '8', content: 'Pháp lý minh bạch, sổ đỏ trao tay'},
  {number: '9', content: 'Chủ đầu tư uy tín và tận tâm'},
  {number: '10', content: 'Cơ hội đầu tư chắc thắng'},
];

const data = [
  {
    id: 1,
    link: 'JzqSsgE5z6o'
  },
  {
    id: 1,
    link: 'v4Pn7q8rgpE'
  },
  {
    id: 1,
    link: 'Pec3IV4Svpc'
  },
];
function ReasoHome() {
  return (
    <div id='reason' className='lg:pt-20 lg:pb-20 pb-10 pt-5 bg-[#F4EEE4] relative lg:px-0'>
      <img src='./customBgRea.png' alt='' className='absolute -left-32 bottom-20 -rotate-12' width={390} height={250} />
      <div className='container flex md:items-start items-center lg:flex-row flex-col'>
        <div className='lg:w-1/3 w-full md:mr-10 mt-10'>
          <p className='lg:text-[30px] md:text-2xl text-xl font-bold uppercase text-[#187462] mb-1 text-center md:text-left'>10 lý do lựa chọn</p>
          <p className='lg:text-[30px] md:text-2xl text-xl font-bold uppercase text-[#187462] md:mb-14 mb-5 text-center md:text-left'>Asia Business Insider</p>
          <div className='w-full pb-10 block md:hidden'>
            <Slider {...settings1} dotsClass='absolute -bottom-5 md:bottom-10 dots-banner' >
              {data?.map((item, index) =>
                <div key={index} className='overflow-x-hidden'>
                  <div className='w-full max-h-[183px] outline-none mx-3'>
                    <iframe className='mr-3' width="100%" height="183" src={`https://www.youtube.com/embed/${item.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                </div>
              )}
            </Slider>
          </div>
          {dataText.map((item, index) => <div key={index} className='flex items-centere px-5 md:px-0'>
            <div className='w-7 h-7 font-bold bg-[#187462] rounded-full border-[1px] border-[#FFC292] text-[#FFC292] mr-3 mb-5 relative'><p className='text-center mt-[2px]'>{item.number}</p></div>
            <p className='md:text-xl text-base text-[#3b3939] font-bold '>{item.content}</p>
          </div>)}

        </div>
        <div className='lg:w-2/3 md:w-full hidden md:block overflow-x-visible md:mt-10'>
          <div className='mx-auto mt-10'>
            <Slider {...settings} dotsClass='absolute -bottom-5 dots-banner'>
              {data.map((item, index) =>
                <div key={index} className=''>
                  <iframe width="100%" height="560" src={`https://www.youtube.com/embed/${item.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReasoHome;