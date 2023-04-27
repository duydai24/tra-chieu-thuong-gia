/* eslint-disable @next/next/no-img-element */
import {getImageNewIfExists, getRealImageUrl} from 'core/getRealImageUrl';
import {publicAPI} from 'core/publicAPI';
import Button from 'lib/Button';
import TextEditor from 'lib/TextEditor';
import {BorderTitle} from 'lib/Title';
import LayoutClient2 from 'modules/layout/LayoutClient';
import React, {useState} from 'react';

function Recruitment({banner = {}}) {
    const initForm = {name: '', email: '', phone: ''};
    const [data, setData] = useState(initForm);
    const onChange = (name, value) => {

        setData({...data, [name]: value});
    };
    const {name, email, phone} = data;

    return (
        <LayoutClient2>
            <img src={getRealImageUrl(getImageNewIfExists(banner))} width={1920} height={440} />
            <div className='bg-blue-bg relative'>
                <div className='container pt-52'>
                    <div className='bg-blue-footer py-7 px-16 container absolute top-0 left-1/2 z-10 -translate-y-1/2 -translate-x-1/2'>
                        <p className='text-3xl text-white text-center font-bold mb-10'>Đăng ký thông tin tuyển dụng</p>
                        <div className=' flex items-center justify-between relative '>
                            <TextEditor
                                placeholder='Họ và Tên'
                                name='name'
                                value={name}
                                classLabel="text-xl mb-5 text-white"
                                onChange={onChange}
                                className='input-recruitment-form  '
                                label='Họ và Tên' />
                            <TextEditor
                                placeholder='Số điện thoại'
                                name='phone'
                                value={phone}
                                onChange={onChange}
                                className='input-recruitment-form '
                                classLabel="text-xl mb-5 text-white"
                                label='Số điện thoại' />
                            <TextEditor
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={onChange}
                                className='input-recruitment-form input-email'
                                classLabel="text-xl mb-5 text-white"
                                label='Đăng ký email để nhận thông tin' />
                            <Button className={'btn-form absolute bottom-0 right-0  '} title={'Đăng ký'}>
                                Đăng ký
                            </Button>
                        </div>
                    </div>
                    <div className='px-8'>
                        <div className='flex pb-24'>
                            <div>
                                <p className='font-bold text-3xl mb-4'>Môi trường làm việc</p>
                                <BorderTitle className={'mb-10'} />
                                <p >
                                    1. Môi trường làm việc chuyên nghiệp, hiện đại và thân thiện mà ở đó mỗi CBNV được chủ động với công việc được giao và linh hoạt để đạt hiệu quả tốt nhất.
                                </p>
                                <p className='mt-4'>  2. Tạo ngôi nhà chung mang tới từng thành viên một cuộc sống chất lượng, sung túc, đủ đầy.</p>
                            </div>
                            <img className='pl-14' width={586} height={320} src='job1.jpg' alt='recuitment' />
                        </div>
                        <div className='flex pb-24'>
                            <div>
                                <p className='font-bold text-3xl mb-4'>Đào tạo</p>
                                <BorderTitle className={'mb-10'} />
                                <p >
                                    1. Đào tạo và phát triển là phương châm của TD Land nhằm giúp đội ngũ nhân sự phát huy tối đa tiềm năng và định hướng nghề nghiệp
                                </p>
                                <p className='mt-4'>  2. Các chương trình đào tạo bao gồm:</p>
                                <p> - Đào tạo hội nhập cho tất cả CBNV</p>
                                <p> - Đào tạo kỹ năng nghề nghiệp ngắn hạn </p>
                                <p> - Đào tạo đội ngũ lãnh đạo tiềm năng</p>
                            </div>
                            <img className='pl-14' width={586} height={320} src='job2.png' alt='recuitment' />
                        </div>
                        <div className='flex pb-24'>
                            <div>
                                <p className='font-bold text-3xl mb-4'>Chế độ đãi ngộ</p>
                                <BorderTitle className={'mb-10'} />
                                <p >
                                    1. Mức lương cạnh tranh dựa theo năng lực
                                </p>
                                <p>
                                    3. Tham gia đầy đủ BHXH, BHYT,
                                </p>
                                <p> 2. Thưởng tháng lương thứ 13, thưởng theo kết quả làm việc, các ngày Lễ trong năm.</p>
                                <p> 4. Thường xuyên tổ chức các hoạt động ngoại </p>
                                <p> 2. Thưởng tháng lương thứ 13, thưởng theo kết quả làm việc, các ngày Lễ trong năm.</p>
                            </div>
                            <img className='pl-14' width={586} height={320} src='job3.jpg' alt='recuitment' />
                        </div>

                    </div>
                </div>
                {/*<Form />*/}
            </div>
        </LayoutClient2>
    );
}

Recruitment.getInitialProps = async () => {

    const banner = await publicAPI('content/list', {type: 11, pageSize: 100});

    if (!banner) {
        return {
            banner: [],

        };
    }
    const {list} = banner;

    return {
        banner: list[0],
    };
};

export default Recruitment;