/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import React from 'react';
import Slider from 'react-slick/lib/slider';

const data = [
  {
    id: 1,
    image: 'donors1.png',
    link: 'https://doanhnhanduongthoi.com.vn/'
  },
  {
    id: 2,
    image: 'donors2.png',
    link: 'https://nongthonvaphattrien.vn/'
  },
  {
    id: 3,
    image: 'donors3.png',
    link: 'https://propr.vn/'
  },
  {
    id: 4,
    image: 'donors4.png',
    link: 'https://vietnamhuongsac.vn/'
  },
  {
    id: 5,
    image: 'donors5.png',
    link: 'https://propr.vn/'
  },
  {
    id: 6,
    image: 'donors6.png',
    link: 'https://thuonghieuvacuocsong.vn/'
  },
  {
    id: 7,
    image: 'donors7.png',
    link: 'https://vov.vn/'
  },
  {
    id: 8,
    image: 'donors8.png',
    link: 'https://ketnoinongnghiep.vn/'
  },
  {
    id: 9,
    image: 'donors9.png',
    link: 'https://khoahocvacuocsong.vn/'
  },
  {
    id: 10,
    image: 'donors10.png',
    link: 'https://ketnoithuonghieu.vn/'
  },
  {
    id: 11,
    image: 'donors11.png',
    link: 'https://nhiepanhvacuocsong.vn/'
  },
  {
    id: 12,
    image: 'donors12.png',
    link: 'https://phapluatkinhdoanh.vn/'
  },
  {
    id: 13,
    image: 'donors13.png',
    link: 'https://phapluatvathoidai.vn/'
  },
  {
    id: 14,
    image: 'donors14.png',
    link: 'https://phapluatcuocsong.net'
  },
  {
    id: 15,
    image: 'donors15.png',
    link: 'https://suckhoevasacdep.com.vn'
  },
  {
    id: 16,
    image: 'donors16.png',
    link: 'https://thuonghieudoanhnhan.net/'
  },
  {
    id: 17,
    image: 'donors17.png',
    link: 'https://thuonghieuvasacdep.vn/'
  },
  {
    id: 18,
    image: 'donors18.png',
    link: 'https://vanhien.com.vn/'
  },
  {
    id: 19,
    image: 'donors19.png',
    link: 'https://vanhoavaphattrien.vn/'
  },
  {
    id: 20,
    image: 'donors20.png',
    link: 'https://vanhoathoidai.vn/'
  },
  {
    id: 21,
    image: 'donors21.png',
    link: 'https://moitruong24h.net.vn/'
  },
  {
    id: 22,
    image: 'donors22.png',
    link: 'https://doithoaiphattrien.vn/'
  },
  {
    id: 23,
    image: 'donors23.png',
    link: 'https://phapluatkinhdoanh.vn/'
  },
  {
    id: 24,
    image: 'donors24.png',
    link: 'https://saoviet.vip/'
  },
  {
    id: 25,
    image: 'donors25.png',
    link: 'https://phapluatkinhdoanh.vn'
  },
  {
    id: 26,
    image: 'donors26.png',
    link: 'https://thegioinguoidep.vn/'
  },
  {
    id: 27,
    image: 'donors27.png',
    link: 'https://dantriviet.net.vn/'
  },
  {
    id: 28,
    image: 'donors28.png',
    link: 'https://vanhoavadoisong.vn/'
  },
  {
    id: 29,
    image: 'donors29.png',
    link: 'http://kinhtevadautu.vn/'
  },
  {
    id: 30,
    image: 'donors30.png',
    link: 'https://ngoisao.net.vn/'
  },
];

const data1 = [
  {
    id: 100,
    image: 'donors100.png',
    link: 'http://globalwoman.vn/'
  },
  {
    id: 101,
    image: 'donors101.png',
    link: 'http://nguoisanhdieu.vn/'
  }
];
function Donors() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ],
  };
  return (
    <div id='donors' className="lg:py-20 py-10 change-background">
      <div className='container'>
        <div className='pb-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto px-2'>
          <p className='lg:text-xl text-base text-[#B3774C] mb-0 lg:mb-2'>Trà Chiều Thương Gia</p>
          <p className='font-medium md:leading-[45px] lg:text-[40px] md:text-xl leading-7 text-base text-[#FFC292] text-center lg:py-3 pt-1 uppercase'>Tạp Chí Phụ Nữ Toàn Cầu cơ quan chủ quản truyền thông
            <br />  Trà Chiều Thương Gia</p>
        </div >
        <div className='flex items-center justify-center bg-white rounded-2xl md:w-1/3 w-[90%] mx-auto p-5 mb-10'>
          {data1?.map((item, index) =>
            <div key={index} className='flex items-center justify-between h-auto ml-5 outline-none'>
              <NavLink to={item.link} newtab>
                <img className='mx-auto cursor-pointer' src={`baoChi/${item.image}`} alt={item.image} width={200} height={150} />
              </NavLink>
            </div>
          )}
        </div>
        <p className='font-medium md:leading-[45px] lg:text-[40px] md:text-xl leading-7 text-base text-[#FFC292] text-center mb-5 lg:py-3 pt-1 uppercase'>Nhà tài trợ cùng các <br /> hãng thông tấn báo chí trong nước</p>
        <div className='hidden md:block lg:mt-10 bg-white rounded-2xl'>
          <Slider {...settings} dotsClass='absolute dots-banner' >
            {data?.map((item, index) =>
              <div key={index} className='flex items-center justify-between h-auto'>
                <NavLink to={item.link} newtab>
                  <img className='mx-auto cursor-pointer' src={`baoChi/${item.image}`} alt={item.image} width={200} height={150} />
                </NavLink>
              </div>
            )}
          </Slider>
        </div>
        <div className='block md:hidden lg:pt-10 px-5 bg-white rounded-2xl mx-5'>
          <Slider {...settings} dotsClass='absolute dots-banner' >
            {data?.map((item, index) =>
              <div key={index} className='flex items-center justify-between h-auto'>
                <NavLink to={item.link} newtab>
                  <img className='mx-auto cursor-pointer' src={`baoChi/${item.image}`} alt={item.image} width={150} height={100} />
                </NavLink>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Donors;