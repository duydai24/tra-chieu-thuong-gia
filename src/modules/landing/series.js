/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick/lib/slider';

const data = [
  {
    image: 'poster1.jpg'
  },
  {
    image: 'poster2.jpg'
  },
  {
    image: 'poster3.jpg'
  },
  {
    image: 'poster4.jpg'
  },
  {
    image: 'poster5.jpg'
  },
  {
    image: 'poster6.jpg'
  },
  {
    image: 'poster7.jpg'
  },
  {
    image: 'poster8.jpg'
  },
  {
    image: 'poster9.jpg'
  },
  {
    image: 'poster10.jpg'
  },
  {
    image: 'poster11.jpg'
  },
  {
    image: 'poster12.jpg'
  },
  {
    image: 'poster13.jpg'
  },
  {
    image: 'poster14.jpg'
  },
  {
    image: 'poster15.jpg'
  },
  {
    image: 'poster16.jpg'
  },
  {
    image: 'poster17.jpg'
  },
  {
    image: 'poster18.jpg'
  },
  {
    image: 'poster19.jpg'
  },
  {
    image: 'poster20.jpg'
  },
  {
    image: 'poster21.jpg'
  },
  {
    image: 'poster22.jpg'
  },
  {
    image: 'poster23.jpg'
  },
  {
    image: 'poster24.jpg'
  }
];
const data2 = [
  {
    image: 'poster1.jpg'
  },
  {
    image: 'poster2.jpg'
  },
  {
    image: 'poster3.jpg'
  },
  {
    image: 'poster4.jpg'
  },
  {
    image: 'poster5.jpg'
  },
  {
    image: 'poster6.jpg'
  },
  {
    image: 'poster7.jpg'
  },
  {
    image: 'poster8.jpg'
  },
  {
    image: 'poster9.jpg'
  },
  {
    image: 'poster10.jpg'
  },
  {
    image: 'poster11.jpg'
  },
  {
    image: 'poster12.jpg'
  },
  {
    image: 'poster13.jpg'
  },
  {
    image: 'poster14.jpg'
  },
  {
    image: 'poster15.jpg'
  },
  {
    image: 'poster16.jpg'
  },
  {
    image: 'poster17.jpg'
  },
  {
    image: 'poster18.jpg'
  },
  {
    image: 'poster19.jpg'
  },
  {
    image: 'poster20.jpg'
  },
  {
    image: 'poster21.jpg'
  },
  {
    image: 'poster22.jpg'
  },
  {
    image: 'poster23.jpg'
  },
  {
    image: 'poster24.jpg'
  }
  ,
  {
    image: 'poster25.jpg'
  }
  ,
  {
    image: 'poster26.jpg'
  }
  ,
  {
    image: 'poster27.jpg'
  }
  ,
  {
    image: 'poster28.jpg'
  }
  ,
  {
    image: 'poster29.jpg'
  }
  ,
  {
    image: 'poster30.jpg'
  }
  ,
  {
    image: 'poster31.jpg'
  }
  ,
  {
    image: 'poster32.jpg'
  }
  ,
  {
    image: 'poster33.jpg'
  }
  ,
  {
    image: 'poster34.jpg'
  }
  ,
  {
    image: 'poster35.jpg'
  }
  ,
  {
    image: 'poster36.jpg'
  }
  ,
  {
    image: 'poster37.jpg'
  }
  ,
  {
    image: 'poster38.jpg'
  }
  ,
  {
    image: 'poster39.jpg'
  }
  ,
  {
    image: 'poster40.jpg'
  }
  ,
  {
    image: 'poster41.jpg'
  }
  ,
  {
    image: 'poster42.jpg'
  }
];
const data3 = [
  {
    image: 'poster1.jpg'
  },
  {
    image: 'poster2.jpg'
  },
  {
    image: 'poster3.jpg'
  },
  {
    image: 'poster4.jpg'
  },
  {
    image: 'poster5.jpg'
  },
  {
    image: 'poster6.jpg'
  },
  {
    image: 'poster7.jpg'
  },
  {
    image: 'poster8.jpg'
  },
  {
    image: 'poster9.jpg'
  },
  {
    image: 'poster10.jpg'
  },
  {
    image: 'poster11.jpg'
  },
  {
    image: 'poster12.jpg'
  },
  {
    image: 'poster13.jpg'
  },
  {
    image: 'poster14.jpg'
  },
  {
    image: 'poster15.jpg'
  },
  {
    image: 'poster16.jpg'
  },
  {
    image: 'poster17.jpg'
  },
  {
    image: 'poster18.jpg'
  },
  {
    image: 'poster19.jpg'
  },
  {
    image: 'poster20.jpg'
  },
  {
    image: 'poster21.jpg'
  },
  {
    image: 'poster22.jpg'
  },
  {
    image: 'poster23.jpg'
  },
  {
    image: 'poster24.jpg'
  }
  ,
  {
    image: 'poster25.jpg'
  }
  ,
  {
    image: 'poster26.jpg'
  }
  ,
  {
    image: 'poster27.jpg'
  }
  ,
  {
    image: 'poster28.jpg'
  }
  ,
  {
    image: 'poster29.jpg'
  }
  ,
  {
    image: 'poster30.jpg'
  }
];
function Series() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
          autoplaySpeed: 2000,
          speed: 500,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <div id='series' className='md:py-20 md:pb-40 py-10 bg-[#F4EEE4]'>
      <div className='container'>
        <div className='pt-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
          <p className='lg:text-xl text-base text-[#B3774C]'>Trà Chiều Thương Gia</p>
          <p className='font-medium md:leading-[55px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#187462] lg:py-3 pt-1 uppercase'>Series Trà Chiều</p>
        </div >
        <div className='md:mt-20 mt-10 px-5 md:px-0'>
          <p className='text-[#00392D] font-medium text-xl md:text-3xl mb-5'>Trà chiều thương gia số đầu tiên:</p>
          <Slider {...settings}>
            {data?.map((item, index) =>
              <div key={index} >
                <img alt={item.image} src={`/thiepmoi/lan1/${item.image}`} width={280} height={100} className='mx-auto w-[165px] md:w-[280px]' />
              </div>
            )}
          </Slider>
        </div>
        <div className='md:mt-20 mt-10 px-5 md:px-0'>
          <p className='text-[#00392D] font-medium text-xl md:text-3xl mb-5'>Trà chiều thương gia số thứ 2:</p>
          <Slider {...settings}>
            {data2?.map((item, index) =>
              <div key={index} >
                <img alt={item.image} src={`/thiepmoi/lan2/${item.image}`} width={280} height={100} className='mx-auto w-[165px] md:w-[280px]' />
              </div>
            )}
          </Slider>
        </div>
        <div className='md:mt-20 mt-10 px-5 md:px-0'>
          <p className='text-[#00392D] font-medium text-xl md:text-3xl mb-5'>Trà chiều thương gia số thứ 3:</p>
          <Slider {...settings}>
            {data3?.map((item, index) =>
              <div key={index} >
                <img alt={item.image} src={`/thiepmoi/lan3/${item.image}`} width={280} height={100} className='mx-auto w-[165px] md:w-[280px]' />
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Series;