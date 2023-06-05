/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import React from 'react';
import Slider from 'react-slick';

function New() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
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
      lable: 'Trà Chiều Thương Gia: Nơi hội tụ những doanh nghiệp uy tín hàng đầu Việt Nam',
      image: 'logodaubao1.png',
      link: 'https://www.vanhoavaphattrien.vn/tra-chieu-thuong-gia-noi-hoi-tu-nhung-doanh-nghiep-uy-tin-hang-dau-viet-nam-a18633.html',
      content: 'Sự bùng nổ của mạng xã hội trong nhiều năm trở lại đây đã tạo ra một nền tảng mới cho các doanh nghiệp xây dựng và quảng bá hình ảnh của mình đến với người dùng. Với mạng xã hội, việc quảng bá doanh nghiệp trở nên nhanh chóng và tiện lợi hơn bao giờ hết.'
    },
    {
      lable: 'Lê Hồng Ân - Tổng Giám đốc Asia Business Insider gặp gỡ cùng các sinh viên trong ngày hội tuyển dụng',
      image: 'logodaubao2.png',
      link: 'https://kinhtevadautu.vn/le-hong-an-tong-giam-doc-asia-business-insider-gap-go-cung-cac-sinh-vien-trong-ngay-hoi-tuyen-dung-3138.html',
      content: 'Vừa qua tại trường Đại học Nguyễn Tất Thành đã diễn ra Ngày Hội Tuyển Dụng dành cho các bạn trẻ sinh viên, tại đây xuất hiện rất nhiều chuyên gia, cũng như đại diện của nhiều công ty, doanh nghiệp. Trong đó có sự xuất hiện của Tổng Giám Đốc Asia Business Insider Mr Lê Hồng Ân.'
    },
    {
      lable: 'Trà Chiều Thương Gia: Cơ hội giao lưu cùng doanh nghiệp Việt Nam',
      image: 'logodaubao1.png',
      link: 'https://vanhoavaphattrien.vn/tra-chieu-thuong-gia-co-hoi-giao-luu-cung-doanh-nghiep-viet-nam-a18626.html',
      content: 'Vào ngày 15/4 vừa qua, một sự kiện lớn thu hút sự chú ý của rất nhiều các doanh nhân, doanh nghiệp uy tín hàng đầu được tổ chức tại thành phố Hồ Chí Minh. Sự kiện đó mang tên “Trà Chiều Thương Gia” được tổ chức bởi công ty truyền thông và dịch vụ Asia Business Insider, phối hợp với một số đơn vị tài trợ khác, trong đó có công ty công nghệ ThreeB.'
    },
    {
      lable: 'Trà Chiều Thương Gia: Tìm kiếm khách hàng mục tiêu trên nền tảng Social Marketing',
      image: 'logodaubao2.png',
      link: 'https://kinhtevadautu.vn/tra-chieu-thuong-gia-tim-kiem-khach-hang-muc-tieu-tren-nen-tang-social-marketing-3537.html',
      content: 'Vào chiều ngày 15/4 vừa qua, tại thành phố Hồ Chí Minh, công ty truyền thông và dịch vụ Asia Business Insider đã phối hợp với một số đơn vị khác tổ chức sự kiện mang tên “Trà Chiều Thương Gia”.'
    },
    {
      lable: 'ThreeB – Nhà tài trợ độc quyền cho Trà Chiều Thương Gia',
      image: 'logodaubao1.png',
      link: 'https://vanhoavaphattrien.vn/threeb-nha-tai-tro-doc-quyen-cho-tra-chieu-thuong-gia-a18653.html',
      content: 'ThreeB Technology là nhà cung cấp các giải pháp công nghệ tài chính sáng tạo hàng đầu, tận dụng sức mạnh của trí tuệ nhân tạo để cách mạng hóa các giao dịch trên thị trường tiền điện tử. Tập trung vào bảo mật, hiệu quả và thiết kế lấy người dùng làm trung tâm, mục tiêu của ThreeB là định hình tương lai của tài chính thông qua công nghệ.'
    },
    {
      lable: 'Lê Hồng Ân - CEO Asia Business Insider và hành trình đỡ đầu cho hàng ngàn doanh nhân khởi nghiệp trở thành kỳ lân trong làng công nghệ Việt Nam trong thời gian ngắn nhất',
      image: 'logodaubao4.png',
      link: 'https://dantriviet.net.vn/le-hong-an-ceo-asia-business-insider-va-hanh-trinh-do-dau-cho-hang-ngan-doanh-nhan-khoi-nghiep-tro-thanh-ky-lan-trong-lang-cong-nghe-viet-nam-trong-thoi-gian-ngan-nhat-a27754.html',
      content: 'Asia Business Insider đã phát triển bùng nổ cùng với sự thành công vang dội trong năm 2022. CEO Lê Hồng Ân - người đã góp một phần không nhỏ trong quá trình xây dựng và phát triển công ty.'
    },
    {
      lable: 'Lê Hồng Ân TGĐ Asia Business Insider',
      image: 'logodaubao6.png',
      link: 'https://tinhhoathoidai.vn/le-hong-an-tgd-asia-business-insider-a1006.html',
      content: 'Là nhà khởi nghiệp cực kỳ thành công với hàng loạt dự án hợp tác với các doanh nghiệp lớn trong và ngoài nước.'
    },
    {
      lable: 'Lê Hồng Ân - Founder Asia Business Insider và hành trình trở thành chuyên gia trong lĩnh vực Digital Marketing',
      image: 'logodaubao5.png',
      link: 'https://vietnamfdi.com.vn/le-hong-an-founder-asia-business-insider-va-hanh-trinh-tro-thanh-chuyen-gia-trong-linh-vuc-digital-marketing-a144563.html',
      content: 'Asia Business Insider đã phát triển bùng nổ cùng với sự thành công vang dội trong năm 2022. CEO Lê Hồng Ân - người đã góp một phần không nhỏ trong quá trình xây dựng và phát triển công ty.'
    },
    {
      lable: 'Cái bắt tay lịch sử giữa Asia Business Insider và Near Holding',
      image: 'logodaubao8.png',
      link: 'https://vov.vn/doanh-nghiep/doanh-nghiep-24h/cai-bat-tay-lich-su-giua-asia-business-insider-va-near-holding-post942027.vov',
      content: 'VOV.VN - Sự họp tác tạo ra cộng đồng phi tập trung có giá trị được cộng hưởng dành cho những người đang nắm giữ công nghệ số Near trên nền tảng Web 3-Defi.'
    },
    {
      lable: 'Lê Hồng Ân - CEO Asia Business Insider đồng hành cùng doanh nhân Việt',
      image: 'logodaubao1.png',
      link: 'https://vanhoavaphattrien.vn/le-hong-an-ceo-asia-business-insider-dong-hanh-cung-doanh-nhan-viet-a18020.html',
      content: 'Asia Business Insider đã phát triển bùng nổ cùng với sự thành công vang dội trong năm 2022. CEO Lê Hồng Ân - người đã góp một phần không nhỏ trong quá trình xây dựng và phát triển công ty.'
    },
    {
      lable: 'LÊ HỒNG ÂN CEO - FOUNDER ASIA BUSINESS INSIDER / CHUYÊN GIA XÂY DỰNG THƯƠNG HIỆU CÁ NHÂN',
      image: 'logodaubao11.png',
      link: 'https://phapluatkinhdoanh.vn/le-hong-an-ceo-founder-asia-business-insider-chuyen-gia-xay-dung-thuong-hieu-ca-nhan-2832.html',
      content: 'Thông qua quá trình thành lập và phát triển doanh nghiệp của mình, CEO Lê Hồng Ân đã trở thành bậc thầy trong lĩnh vực xây dựng thương hiệu cá nhân đa nền tảng. Anh gây ấn tượng với câu nói: “Thương hiệu cá nhân là cách bạn quảng bá bản thân”.'
    },
    {
      lable: 'Lê Hồng Ân chuyên gia hàng đầu về Digital Marketing và những thành công ngoạn mục',
      image: 'logodaubao7.png',
      link: 'https://nongthonvaphattrien.vn/le-hong-an-chuyen-gia-hang-dau-ve-digital-marketing-va-nhung-thanh-cong-ngoan-muc-a3613.html',
      content: 'Lê Hồng Ân là nhà khởi nghiệp cực kỳ thành công với hàng loạt dự án hợp tác với các doanh nghiệp lớn trong và ngoài nước.'
    },
    {
      lable: 'ASIA BUSINESS INSIDER CÙNG NEAR HOLDING VỚI DỰ ÁN ĐỘT PHÁ TRONG THỜI ĐẠI 4.0',
      image: 'logodaubao10.png',
      link: 'https://doisongvaphattrien.vn/asia-business-insider-cung-near-holding-voi-du-an-dot-pha-trong-thoi-dai-40-a44643.html',
      content: 'Tổng giám đốc Asia Business Insider Mr. Lê Hồng Ân là một trong những Chuyên gia đào tạo hàng đầu với bề dày kinh nghiệm trong lĩnh vực Marketing. Anh có thời gian sinh sống và làm việc ở các nước Đông Nam Á và là một trong những thành viên quản lý quỹ “Trọn vẹn ước mơ” của Canada, Marketing Manager của Công Ty Cổ phần Đầu Tư và Phát Triển Bất Động Sản Phượng Hoàng cùng với đó là những công ty về xu hướng công nghệ số đã biết đến tên tuổi của anh. '
    }
  ];
  return (
    <div id='news' className='change-background py-10 lg:py-20'>
      <div className='pb-10 lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto'>
        <p className='lg:text-xl text-base text-[#B3774C]'>Trà Chiều Thương Gia</p>
        <p className='font-medium md:leading-[55px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#FFC292] lg:py-3 pt-1 uppercase'>TIN TỨC SỰ KIỆN</p>
      </div >
      <div className=''>
        <Slider {...settings} dotsClass='absolute bottom-5 md:bottom-10 dots-banner' >
          {data.map((item, index) =>
            <NewItem key={index} image={`dauBao/${item.image}`} lable={item.lable} content={item.content} link={item.link} />
          )}
        </Slider>
      </div>
    </div>
  );
}

function NewItem({image, lable, content, link}) {
  return (

    <NavLink to={link} newtab>
      <div className='bg-[#e9d4b2] rounded-xl p-5 mx-5 h-[400px]'>
        <img className='w-full h-[200px] rounded-xl' src={image} alt='' />
        <p className='text-black mx-auto text-base text-left font-bold hover:text-[#df471d] line-clamp-2 overflow-ellipsis mb-3'>{lable}...</p>
        <p className='text-black mx-auto text-sm text-left line-clamp-5 overflow-ellipsis'>{content}<p className='font-bold text-red-600 inline-block ml-2'>Xem tiếp</p></p>
      </div>
    </NavLink>

  );
}
export default New;