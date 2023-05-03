/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import React from 'react';
import Slider from 'react-slick';

function New() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  const data = [
    {
      id: 1,
      label: 'Trà Chiều Thương Gia: Nơi hội tụ những doanh nghiệp uy tín hàng đầu Việt Nam',
      image: 'new1.jpg',
      link: 'https://www.vanhoavaphattrien.vn/tra-chieu-thuong-gia-noi-hoi-tu-nhung-doanh-nghiep-uy-tin-hang-dau-viet-nam-a18633.html'
    },
    {
      id: 2,
      label: 'Trà Chiều Thương Gia: Cơ hội giao lưu cùng doanh nghiệp Việt Nam',
      image: 'new2.jpg',
      link: 'https://vanhoavaphattrien.vn/tra-chieu-thuong-gia-co-hoi-giao-luu-cung-doanh-nghiep-viet-nam-a18626.html'
    },
    {
      id: 3,
      label: 'Trà Chiều Thương Gia: Tìm kiếm khách hàng mục tiêu trên nền tảng Social Marketing',
      image: 'new3.jpg',
      link: 'https://kinhtevadautu.vn/tra-chieu-thuong-gia-tim-kiem-khach-hang-muc-tieu-tren-nen-tang-social-marketing-3537.html'
    }
  ];
  return (
    <div id='news' className='change-background py-10 lg:py-20'>
      <div className='pb-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
        <p className='lg:text-xl text-base text-[#B3774C]'>Trà Chiều Thương Gia</p>
        <p className='font-medium md:leading-[55px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#FFC292] lg:py-3 pt-1 uppercase'>TIN TỨC SỰ KIỆN</p>
      </div >
      <div className='hidden md:block'>
        <Slider {...settings} dotsClass='absolute bottom-5 md:bottom-10 dots-banner' >
          {data.map((item, index) =>
            <div className='block' key={index}>
              <div className='flex items-center flex-col outline-none '>
                <div className='relative overflow-hidden'>
                  <img className='w-full h-[640px] relative hover:scale-125 transition-all duration-500' src={item.image} alt='' height={640} width={640} />
                </div>
                <p className='text-white text-xl text-center py-5 h-[100px] max-w-[80%] hover:text-[#FFC292]'>{item.label}</p>
                <NavLink to={item.link} newtab>
                  <img className='mx-auto' src='./buttonNew.jpg' alt='buttonNew' />
                </NavLink>
              </div>
            </div>
          )}
        </Slider>
      </div>
      <div className='block md:hidden'>
        <Slider {...settings} dotsClass='absolute bottom-5 md:bottom-10 dots-banner' >
          {data.map((item, index) =>
            <div className='block' key={index}>
              <div className='flex items-center flex-col outline-none '>
                <div className='relative'>
                  <img className='w-screen h-[390px] relative' src={item.image} alt='' height={390} width={390} />
                </div>
                <p className='text-white text-xl text-center py-5 max-w-[80%]'>{item.label}</p>
                <NavLink to={item.link} newtab>
                  <img className='mx-auto' src='./buttonNew.jpg' alt='buttonNew' />
                </NavLink>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
}
export default New;