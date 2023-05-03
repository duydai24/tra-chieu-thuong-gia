/* eslint-disable @next/next/no-img-element */
import React from 'react';

function AboutHome() {
  return (
    <div id='introduce' className='lg:py-20 py-10 px-5 md:pb-0 lg:px-0 relative change-background'>
      <img src='./logo2.png' alt='' className='w-[40%] mx-auto pb-5 block lg:hidden' />
      <img className='absolute -top-10 right-[-40px] opacity-40 block lg:hidden w-[40%]'
        src='la1.png' alt='la' />
      <div className='lg:px-32 flex flex-col md:justify-between md:flex-row'>
        <div className='md:block hidden w-2/3 mt-0 lg:mt-0 md:mt-28'>
          <iframe width="100%" height="580" src="https://www.youtube.com/embed/hNK7IUBmf1I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='lg:w-1/3 md:w-2/3 w-full lg:ml-20 text-center md:text-left'>
          <p className='lg:text-xl text-base text-[#B3774C] hidden lg:block lg:mb-3'>Trà Chiều Thương Gia</p>
          <p className='font-extralight lg:text-[40px] md:text-xl md:text-left text-center mx-auto md:mx-0 md:leading-[45px] lg:leading-[55px] text-lg text-[#FFC292] pb-5 pt-1 hidden lg:block'>Đẳng Cấp <br /> Vượt Trên Mọi Giới Hạn</p>
          <div className='mb-5 block md:hidden'>
            <iframe width="100%" height="215" src="https://www.youtube.com/embed/hNK7IUBmf1I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <p className='lg:text-xl text-left lg:mt-3 text-base text-white'>
            Talkshow Business VietNam là một buổi workshop tập trung vào chủ đề kinh doanh tại Việt Nam, giúp các doanh nhân, nhà đầu tư và những người quan tâm đến lĩnh vực này có cơ hội chia sẻ ý tưởng mới, học hỏi và giải quyết các thách thức đang đối diện với các doanh nghiệp. Được thiết kế để tạo ra một không gian giao lưu, thảo luận và mở rộng mối quan hệ, Talkshow Business VietNam thu hút các chuyên gia hàng đầu trong lĩnh vực kinh doanh đến từ các công ty và tổ chức uy tín. Đây là cơ hội tuyệt vời để trau dồi kiến thức, mở rộng mối quan hệ và tìm kiếm cơ hội hợp tác mới trong lĩnh vực kinh doanh tại Việt Nam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;