/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import React from 'react';

const data = [
  //{
  //  lable: 'Nghệ Sĩ - KOL - KOC',
  //  name: 'CA SĨ. ĐOÀN DI BĂNG',
  //  image: 'anhTron28.png',
  //  link: ''
  //},
  //{
  //  lable: 'Nghệ Sĩ - KOL - KOC',
  //  name: 'CA SĨ. PHẠM ĐĂNG ANH THƯ',
  //  image: 'anhTron29.png',
  //  link: ''
  //},
  {
    lable: 'Cơ quan chủ quản truyền thông Trà Chiều Thương Gia',
    name: 'NHÀ BÁO. LƯƠNG NGỌC HÂN',
    image: 'anhTron12.png',
    link: 'http://nguoisanhdieu.vn/',
    details: 'Nhà sáng lập & Bảo trợ truyền thông Trà Chiều Thương Gia'
  },
  {
    lable: 'Cơ quan chủ quản truyền thông Trà Chiều Thương Gia',
    name: 'Madam. lê thị mộng trinh',
    image: 'anhTron32.png',
    link: 'http://globalwoman.vn/',
    details: 'Phó tổng biên tập tạp chí phụ nữ toàn cầu'
  },
  {
    lable: 'Truyền thông - báo chí',
    name: 'Madam. lê thị mộng trinh',
    image: 'anhTron32.png',
    link: 'http://globalwoman.vn/'
  },
  {
    lable: 'Truyền thông - báo chí',
    name: 'PGĐ. MR ĐAN',
    image: 'anhTron10.png',
    link: ''
  },
  {
    lable: 'Truyền thông - báo chí',
    name: 'NHÀ BÁO. LƯƠNG NGỌC HÂN',
    image: 'anhTron12.png',
    link: 'http://nguoisanhdieu.vn/'
  },
  {
    lable: 'Truyền thông - báo chí',
    name: 'NSL. HÀ MY',
    image: 'anhTron3-1.png',
    link: 'http://nguoisanhdieu.vn/'
  },
  {
    lable: 'Truyền thông - báo chí',
    name: 'NHÀ BÁO. ĐÔ VĂN HIẾU',
    image: 'anhTron3-6.png',
    link: 'http://nguoisanhdieu.vn/'
  },
  {
    lable: 'Hoa hậu - Á hậu - Tổ chức hoa hậu',
    name: 'Á HẬU ĐIỆN ẢNH. ELDOS',
    image: 'anhTron5.png',
    link: ''
  },

  {
    lable: 'Nghệ Sĩ - KOL - KOC',
    name: 'CA SĨ. NHẬT HỒNG DENMARK',
    image: 'anhTron21.png',
    link: ''
  },
  {
    lable: 'Nghệ Sĩ - KOL - KOC',
    name: 'MC - CA SĨ. MÃ PHÚ VINH',
    image: 'anhTron22.png',
    link: ''
  },
  //{
  //  lable: 'Nghệ Sĩ - KOL - KOC',
  //  name: 'NTK. VÕ VIỆT CHUNG',
  //  image: 'anhTron25.png',
  //  link: ''
  //},
  {
    lable: 'Nghệ Sĩ - KOL - KOC',
    name: 'CA SĨ. HỒ QUANG LỘC',
    image: 'anhTron24.png',
    link: ''
  },
  {
    lable: 'Nghệ Sĩ - KOL - KOC',
    name: 'CA NHẠC SĨ. NGUYỄN MINH ANH',
    image: 'anhTron26.png',
    link: ''
  },
  {
    lable: 'Nghệ Sĩ - KOL - KOC',
    name: 'DIỄN VIÊN. UYÊN THẢO',
    image: 'anhTron3-8.png',
    link: ''
  },
  {
    lable: 'Nghệ Sĩ - KOL - KOC',
    name: 'CA NHẠC SĨ. SỸ LUÂN',
    image: 'anhTron3-5.png',
    link: ''
  },
  {
    lable: 'Nghệ Sĩ - KOL - KOC',
    name: 'MC. HỒNG NHUNG',
    image: 'anhTron3-11.png',
    link: ''
  },
  {
    lable: 'Hoa hậu - Á hậu - Tổ chức hoa hậu',
    name: 'HOA HẬU. NGUYỄN THỊ HỒNG VÂN',
    image: 'anhTron15.png',
    link: ''
  }, {
    lable: 'Hoa hậu - Á hậu - Tổ chức hoa hậu',
    name: 'HOA HẬU DOANH NHÂN. VÕ THU SƯƠNG',
    image: 'anhTron2.png',
    link: ''
  }, {
    lable: 'Hoa hậu - Á hậu - Tổ chức hoa hậu',
    name: 'HOA HẬU DOANH NHÂN. HƯƠNG SALA',
    image: 'anhTron3.png',
    link: ''
  }, {
    lable: 'Hoa hậu - Á hậu - Tổ chức hoa hậu',
    name: 'HOA HẬU ĐẠI SỨ. AMBER HẠNH',
    image: 'anhTron1.png',
    link: ''
  },

  {
    lable: 'Hoa hậu - Á hậu - Tổ chức hoa hậu',
    name: 'ĐẠI SỨ THƯƠNG HIỆU. THẠCH HOA',
    image: 'anhTron20.png',
    link: ''
  },
  {
    lable: 'Hoa hậu - Á hậu - Tổ chức hoa hậu',
    name: 'CHỦ NHIỆM CLB MISS SAIGON. PHẠM NGUYỆT',
    image: 'anhTron19.png',
    link: ''
  },
  {
    lable: 'Hoa hậu - Á hậu - Tổ chức hoa hậu',
    name: 'CÔNG TY HOA HẬU. BẦU HÒA',
    image: 'anhTron16.png',
    link: ''
  },
  {
    lable: 'NHÀ THIẾT KẾ',
    name: 'NTK. HỒNG LIÊN',
    image: 'anhTron3-3.png',
    link: ''
  },
  {
    lable: 'NHÀ THIẾT KẾ',
    name: 'NTK. ĐẶNG HỒNG THỦY',
    image: 'anhTron3-17.png',
    link: ''
  },
  {
    lable: 'Quỹ đầu tư trong nước & Quốc tế',
    name: 'MR. XÂM ANH TÀI (Quỹ đầu tư Bông Sen Hoàng Gia)',
    image: 'anhTron31.png',
    link: ''
  },
  {
    lable: 'Kiến trúc - Xây dựng - BĐS',
    name: 'CEO. TRẦN ĐỨC TÂM',
    image: 'anhTron7.png',
    link: ''
  },
  {
    lable: 'Kiến trúc - Xây dựng - BĐS',
    name: 'CEO. NGUYỄN QUỐC THI',
    image: 'anhTron23.png',
    link: ''
  }, {
    lable: 'Kiến trúc - Xây dựng - BĐS',
    name: 'VINHOME REAL ESTATE. NGÔ TUẤN ANH',
    image: 'anhTron17.png',
    link: ''
  }, {
    lable: 'Kiến trúc - Xây dựng - BĐS',
    name: 'CEO. NGUYỄN HOÀNG ANH',
    image: 'anhTron11.png',
    link: ''
  },

  {
    lable: 'Công nghệ',
    name: 'MR. PHẠM THÀNH NHỨT',
    image: 'anhTron8.png',
    link: ''
  },
  {
    lable: 'Công nghệ',
    name: 'TIẾN SĨ. PHẠM PHƯỚC HƯNG',
    image: 'anhTron3-2.png',
    link: ''
  },
  {
    lable: 'Công nghệ',
    name: 'GĐ. NGUYỄN CÔNG TÂM',
    image: 'anhTron9.png',
    link: ''
  },
  {
    lable: 'Công nghệ',
    name: 'CEO. NGUYỄN THIẾT',
    image: 'anhTron3-4.png',
    link: ''
  },
  {
    lable: 'Chăm sóc sức khoẻ - Thực phẩm - Làm đẹp',
    name: 'MS. NGUYỄN THỊ NGỌC SOAN',
    image: 'anhTron6.png',
    link: ''
  },
  {
    lable: 'Chăm sóc sức khoẻ - Thực phẩm - Làm đẹp',
    name: 'CEO. KHA LY',
    image: 'anhTron3-12.png',
    link: ''
  },
  {
    lable: 'Chăm sóc sức khoẻ - Thực phẩm - Làm đẹp',
    name: 'DOCTOR. TRUNG NGUYỄN',
    image: 'anhTron30.png',
    link: ''
  },
  {
    lable: 'Chăm sóc sức khoẻ - Thực phẩm - Làm đẹp',
    name: 'DOCTOR. HẢI HỒ',
    image: 'anhTron13.png',
    link: ''
  },
  {
    lable: 'Chăm sóc sức khoẻ - Thực phẩm - Làm đẹp',
    name: 'DOANH NHÂN. MINH MINH',
    image: 'anhTron14.png',
    link: ''
  },
  {
    lable: 'Đào tạo',
    name: 'GIẢNG VIÊN. THÁI TRẠCH MAI',
    image: 'anhTron18.png',
    link: ''
  },
  {
    lable: 'Đào tạo',
    name: 'CEO. IRIS PHƯƠNG',
    image: 'anhTron27.png',
    link: ''
  },
  {
    lable: 'Đào tạo',
    name: 'ĐẠO DIỄN - DIỄN VIÊN. HOÀNG THÔNG',
    image: 'anhTron3-7.png',
    link: ''
  },
  {
    lable: 'Đào tạo',
    name: 'DIỄN GIẢ. LÊ VĂN CƯƠNG',
    image: 'anhTron3-10.png',
    link: ''
  }
];

function Guest() {

  const classifiedData = data.reduce((acc, curr) => {
    // Nếu nhãn (label) của đối tượng hiện tại chưa có trong đối tượng chứa các nhóm dữ liệu (acc)
    if (!acc[curr.lable]) {
      // Tạo một mảng mới để chứa các đối tượng có nhãn (label) tương ứng
      acc[curr.lable] = [curr];
    } else {
      // Thêm đối tượng hiện tại vào mảng tương ứng với nhãn (label) của nó
      acc[curr.lable].push(curr);
    }
    return acc;
  }, {});

  //const splitElements = () => {
  //  const result = [];
  //  let i = 0;
  //  while (i < data?.length) {
  //    if (result.length % 2 === 0) {
  //      result.push(data?.slice(i, i + 4));
  //      i += 4;
  //    } else {
  //      result.push(data?.slice(i, i + 5));
  //      i += 5;
  //    }
  //  }
  //  return result;
  //};

  //const staggeredElements = splitElements();
  return (
    <div id='guest' className='change-background md:py-24 py-14'>
      <div className='lg:mr-20 lg:pt-0 w-full text-center md:text-left flex items-center flex-col mx-auto mb-5 md:mb-10'>
        <p className='lg:text-xl text-base text-[#B3774C] md:mb-1'>Trà Chiều Thương Gia</p>
        <p className='font-medium md:leading-[45px] lg:text-[40px] md:text-xl leading-9 text-lg text-[#FFC292] lg:py-3 pt-1 uppercase'>CỘNG ĐỒNG TRÀ CHIỀU THƯƠNG GIA</p>
      </div >
      <div className='flex flex-col pt-10 container'>
        {
          Object.keys(classifiedData).map((label, key) => {
            const splitElements = () => {
              const result = [];
              let i = 0;
              while (i < classifiedData[label]?.length) {
                if (result.length % 2 === 0) {
                  result.push(classifiedData[label]?.slice(i, i + 4));
                  i += 4;
                } else {
                  result.push(classifiedData[label]?.slice(i, i + 5));
                  i += 5;
                }
              }
              return result;
            };

            const staggeredElements = splitElements();
            return (
              <div key={key} className='mb-20'>
                <div className='flex items-center justify-between rounded-lg'>
                  <span className='h-1 md:w-[90%] w-0 bg-blue-gold rounded-full mr-5'></span>
                  <p className='text-blue-gold font-bold text-center md:text-2xl uppercase text-lg p-3 rounded-xl md:mx-auto mx-5 w-full hidden md:inline-block border-[1px] border-blue-gold '> {label} </p>
                  <p className='bg-blue-gold text-[#004c3d] font-bold text-center text-base p-2 uppercase rounded-xl md:mx-auto w-full block md:hidden'>{label}</p>
                  <span className='h-1 md:w-[90%] w-0 bg-blue-gold rounded-full ml-5'></span>
                </div>
                {
                  staggeredElements.map((group, index) => (
                    <div className='items-center flex-col justify-center md:flex-row' key={index} style={{display: 'flex'}}>
                      {group.map((item, i) => (
                        <NavLink key={i} to={item.link} newtab>
                          <div className='items-center flex justify-center flex-col md:hover:scale-110 transition-all group cursor-pointer' style={{flex: 1}}>
                            <img src={`/khachMoi/${item.image}`} alt={item.name} height={350} width={350} />
                            <p className='text-[#FFC292] group-hover:text-red-600 md:text-base text-sm font-bold mt-[-20px] uppercase'>{item.name}</p>
                            <p className='text-[#FFC292] group-hover:text-red-600 md:text-base text-sm font-bold text-center mt-3 uppercase px-10'>{item?.details}</p>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  ))
                }
              </div>
            );
          })
        }
      </div>
    </div >
  );
}

export default Guest;

