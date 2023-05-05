/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import Slider from 'react-slick/lib/slider';

const data = [
  {
    id: 1,
    image: 'utilities1.gif'
  },
  {
    id: 2,
    image: 'utilities2.gif',
  },
  {
    id: 3,
    image: 'utilities3.gif',
  },
  {
    id: 4,
    image: 'utilities4.jpg',
  },
  {
    id: 5,
    image: 'utilities5.gif',
  }
];

function Utilities() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  return (
    <div id='utilities' className="bg-bgMeaningPc bg-fixed bg-cover lg:py-60 md:py-32 py-10 md:px-0 relative">
      <div className="container z-20">
        <div className="flex md:items-start items-center md:flex-row flex-col">
          <div className="flex text-white md:items-start items-center mb-10 px-5">
            <div className='md:w-1/2 w-full text-center md:text-left'>
              <p className='md:text-xl text-base'>Trà Chiều Thương Gia</p>
              <p className='font-medium md:text-[40px] text-xl py-3 leading-9 text-[#FFC292] uppercase'>Các gói đầu tư nổi bật</p>
            </div>
            <div className='text-xl text-white w-1/2 hidden md:block'>
              <p className="mb-3" >
                Kết nối khách hàng với sự hưởng thụ tối đa thông qua truyền thông độc đáo. Chúng tôi mang đến các giải pháp truyền thông chuyên nghiệp và hiệu quả, giúp khách hàng đạt được mục tiêu kinh doanh của họ.
              </p>
              <p className="" >
                Với kinh nghiệm và chuyên môn trong lĩnh vực truyền thông, chúng tôi cam kết đưa đến cho khách hàng các giải pháp truyền thông độc đáo và hiệu quả nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container hidden lg:block">
        <Slider {...settings} dotsClass='absolute mt-[32px] dots-banner'>
          {data?.map((item, index) => <SlideItem key={index} image={item.image} />)}
        </Slider>
      </div>
      <div className="container block lg:hidden">
        <Slider {...settings} dotsClass='absolute mt-[32px] dots-banner'>
          {data?.map((item, index) => <SlideItem key={index} image={item.image} />)}
        </Slider>
      </div>
      <div className='text-base text-white w-full md:hidden block mt-10 px-5'>
        <p className="my-3" >
          Kết nối khách hàng với sự hưởng thụ tối đa thông qua truyền thông độc đáo. Chúng tôi mang đến các giải pháp truyền thông chuyên nghiệp và hiệu quả, giúp khách hàng đạt được mục tiêu kinh doanh của họ.
        </p>
        <p className="" >
          Với kinh nghiệm và chuyên môn trong lĩnh vực truyền thông, chúng tôi cam kết đưa đến cho khách hàng các giải pháp truyền thông độc đáo và hiệu quả nhất.
        </p>
      </div>
    </div>
  );
}
function SlideItem({image}) {
  return (
    <div className="md:overflow-hidden overflow-hidden lg:overflow-hidden translate-x-[-35%] lg:translate-x-0 mx-2 lg:mx-5">
      <img className="w-full overflow-x-visible max-h-[215px] lg:h-auto lg:max-h-[550px] " src={`/${image}`} alt="" height={550} />
    </div>
  );
}
export default Utilities;