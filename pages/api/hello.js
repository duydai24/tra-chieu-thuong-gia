////// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

////export default (req, res) => {
////  const data = [
////    {
////      id: 1,
////      image: '/public/bg2Home.jpg',
////      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
////    },
////    {
////      id: 2,
////      image: '/public/bg3Home.jpg',
////      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
////    },
////    {
////      id: 3,
////      image: '/public/bg5Home.jpg',
////      content: 'Sed sit amet magna auctor, vestibulum velit vel, fringilla quam.',
////    },
////  ];

////  if (req.method === 'GET') {
////    // Trả về danh sách các bài đăng
////    res.status(200).json(data);
////  } else if (req.method === 'POST') {
////    // Thêm một bài đăng mới
////    const {image, content} = req.body;
////    const id = Date.now();
////    data.push({id, image, content});
////    res.status(201).json({id, image, content});
////  } else if (req.method === 'PUT') {
////    // Cập nhật một bài đăng
////    const {id, image, content} = req.body;
////    const post = data.find((p) => p.id === parseInt(id));
////    if (!post) {
////      res.status(404).json({message: `Post with id ${id} not found`});
////    } else {
////      post.image = image || post.image;
////      post.content = content || post.content;
////      res.status(200).json(post);
////    }
////  } else if (req.method === 'DELETE') {
////    // Xóa một bài đăng
////    const {id} = req.body;
////    data = data.filter((p) => p.id !== parseInt(id));
////    res.status(200).json({message: `Post with id ${id} deleted`});
////  } else {
////    // Nếu phương thức yêu cầu không được hỗ trợ, trả về lỗi
////    res.status(405).json({message: 'Method not allowed'});
////  }
////};

//const data = {

//  theme: [
//    {
//      bg: '#00392D',
//      colorText: '#FFC292'
//    },
//    {
//      bg: 'black',
//      colorText: '#FFC292'
//    },
//  ],
//  banner: [
//    {
//      id: 1,
//      image: './banner1.jpg',
//      content: 'Đẳng Cấp Vượt Trên Mọi Giới Hạn',
//    },
//    {
//      id: 2,
//      image: './banner2.jpg',
//      content: 'Quyền lực mềm của người phụ nữ',
//    },
//    {
//      id: 3,
//      image: './banner3.jpg',
//      content: 'Smart',
//    },
//  ],
//  speakers: [
//    {
//      id: 1,
//      name: 'MS. LÊ THỊ KIM LOAN',
//      image: 'leThiKimLoan.png',
//      link: ''
//    },
//    {
//      id: 2,
//      name: 'MS. CAO THỊ HỒNG VÂN',
//      image: 'caoHongVan.png',
//      link: ''
//    },
//    {
//      id: 3,
//      name: 'MS. SUKHA PANNA',
//      image: 'sukapanna.png',
//      link: ''
//    },
//    {
//      id: 4,
//      name: 'CEO - ĐỖ NGỌC BÍCH',
//      image: 'doNgocBich.png',
//      link: 'https://www.dongocbich.com/'
//    },
//    {
//      id: 5,
//      name: 'MR. JIKEY',
//      image: 'jikey.png',
//      link: ''
//    },
//    {
//      id: 6,
//      name: 'MR. LÊ HOÀNG MINH',
//      image: 'hoangMinh.png',
//      link: ''
//    },
//    {
//      id: 7,
//      name: 'CEO - LÊ HỒNG ÂN',
//      image: 'leHongAn.png',
//      link: 'https://www.thoibaoasiabusiness.com/truyenthongbaochi'
//    },
//    {
//      id: 8,
//      name: 'MR. NGUYỄN MINH ANH',
//      image: 'nguyenMinhAnh.png',
//      link: ''
//    },
//    {
//      id: 9,
//      name: 'MR. NAM ANH',
//      image: 'namAnh.png',
//      link: ''
//    }
//  ],
//  guest: [
//    {
//      id: 1,
//      name: 'MS. LÊ THỊ KIM LOAN',
//      image: 'Artboard 1.png',
//      link: ''
//    },
//    {
//      id: 2,
//      name: 'MS. CAO THỊ HỒNG VÂN',
//      image: 'Artboard 2.png',
//      link: ''
//    },
//    {
//      id: 3,
//      name: 'MS. SUKHA PANNA',
//      image: 'Artboard 3.png',
//      link: ''
//    },
//    {
//      id: 4,
//      name: 'CEO - ĐỖ NGỌC BÍCH',
//      image: 'Artboard 18.png',
//      link: 'https://www.dongocbich.com/'
//    },
//    {
//      id: 5,
//      name: 'MR. JIKEY',
//      image: 'Artboard 4.png',
//      link: ''
//    },
//    {
//      id: 6,
//      name: 'MR. LÊ HOÀNG MINH',
//      image: 'Artboard 5.png',
//      link: ''
//    },
//    {
//      id: 7,
//      name: 'CEO - LÊ HỒNG ÂN',
//      image: 'Artboard 6.png',
//      link: 'https://www.thoibaoasiabusiness.com/truyenthongbaochi'
//    },
//    {
//      id: 8,
//      name: 'MR. NGUYỄN MINH ANH',
//      image: 'Artboard 7.png',
//      link: ''
//    },
//    {
//      id: 9,
//      name: 'MR. NAM ANH',
//      image: 'Artboard 8.png',
//      link: ''
//    },
//    {
//      id: 1,
//      name: 'MS. LÊ THỊ KIM LOAN1',
//      image: 'Artboard 9.png',
//      link: ''
//    },
//    {
//      id: 2,
//      name: 'MS. CAO THỊ HỒNG VÂN',
//      image: 'Artboard 10.png',
//      link: ''
//    },
//    {
//      id: 3,
//      name: 'MS. SUKHA PANNA',
//      image: 'Artboard 11.png',
//      link: ''
//    },
//    {
//      id: 4,
//      name: 'CEO - ĐỖ NGỌC BÍCH',
//      image: 'Artboard 12.png',
//      link: 'https://www.dongocbich.com/'
//    },
//    {
//      id: 5,
//      name: 'MR. JIKEY',
//      image: 'Artboard 13.png',
//      link: ''
//    },
//    {
//      id: 6,
//      name: 'MR. LÊ HOÀNG MINH',
//      image: 'Artboard 14.png',
//      link: ''
//    },
//    {
//      id: 7,
//      name: 'CEO - LÊ HỒNG ÂN',
//      image: 'Artboard 15.png',
//      link: 'https://www.thoibaoasiabusiness.com/truyenthongbaochi'
//    },
//    {
//      id: 8,
//      name: 'MR. NGUYỄN MINH ANH',
//      image: 'Artboard 16.png',
//      link: ''
//    },
//    {
//      id: 9,
//      name: 'MR. NAM ANH',
//      image: 'Artboard 17.png',
//      link: ''
//    }
//  ],

//  utilities: [
//    {
//      id: 1,
//      image: 'utilities1.jpg'
//    },
//    {
//      id: 2,
//      image: 'utilities2.jpg',
//    },
//    {
//      id: 3,
//      image: 'utilities3.jpg',
//    }
//  ],
//  parther: [
//    {
//      image: 'par1-removebg-preview.png'
//    },
//    {
//      image: 'par2-removebg-preview.png'
//    },
//    {
//      image: 'par3-removebg-preview.png'
//    },
//    {
//      image: 'par4-removebg-preview.png'
//    },
//    {
//      image: 'par5-removebg-preview.png'
//    },
//    {
//      image: 'par6-removebg-preview.png'
//    },
//  ],
//  donors: [
//    {
//      id: 1,
//      image: 'donors1.png',
//      link: ''
//    },
//    {
//      id: 2,
//      image: 'donors2.png',
//      link: ''
//    },
//    {
//      id: 3,
//      image: 'donors3.png',
//      link: ''
//    },
//    {
//      id: 4,
//      image: 'donors4.png',
//      link: ''
//    },
//    {
//      id: 5,
//      image: 'donors5.png',
//      link: ''
//    },
//    {
//      id: 6,
//      image: 'donors6.png',
//      link: ''
//    },
//    {
//      id: 7,
//      image: 'donors7.png',
//      link: ''
//    },
//    {
//      id: 8,
//      image: 'donors8.png',
//      link: ''
//    },
//    {
//      id: 9,
//      image: 'donors9.png',
//      link: ''
//    },
//    {
//      id: 10,
//      image: 'donors10.png',
//      link: ''
//    },
//    {
//      id: 11,
//      image: 'donors11.png',
//      link: ''
//    },
//    {
//      id: 12,
//      image: 'donors12.png',
//      link: ''
//    },
//    {
//      id: 13,
//      image: 'donors13.png',
//      link: ''
//    },
//    {
//      id: 14,
//      image: 'donors14.png',
//      link: ''
//    },
//    {
//      id: 15,
//      image: 'donors15.png',
//      link: ''
//    },
//    {
//      id: 16,
//      image: 'donors16.png',
//      link: ''
//    },
//    {
//      id: 17,
//      image: 'donors17.png',
//      link: ''
//    },
//    {
//      id: 18,
//      image: 'donors18.png',
//      link: ''
//    },
//    {
//      id: 19,
//      image: 'donors19.png',
//      link: ''
//    },
//    {
//      id: 20,
//      image: 'donors20.png',
//      link: ''
//    },
//    {
//      id: 21,
//      image: 'donors21.png',
//      link: ''
//    },
//    {
//      id: 22,
//      image: 'donors22.png',
//      link: ''
//    },
//    {
//      id: 23,
//      image: 'donors23.png',
//      link: ''
//    },
//    {
//      id: 24,
//      image: 'donors24.png',
//      link: ''
//    },
//    {
//      id: 25,
//      image: 'donors25.png',
//      link: ''
//    },
//    {
//      id: 26,
//      image: 'donors26.png',
//      link: ''
//    },
//    {
//      id: 27,
//      image: 'donors27.png',
//      link: ''
//    },
//    {
//      id: 28,
//      image: 'donors28.png',
//      link: ''
//    },
//    {
//      id: 29,
//      image: 'donors29.png',
//      link: ''
//    },
//    {
//      id: 30,
//      image: 'donors30.png',
//      link: ''
//    },
//  ]
//};

//export default function handler(req, res) {
//  res.status(200).json(data);
//}