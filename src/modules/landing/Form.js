import Button from 'lib/Button';
import TextEditor from 'lib/TextEditor';
import React, {useState} from 'react';

function Form() {
    const initForm = {name: '', email: '', phone: ''};
    const [data, setData] = useState(initForm);
    const onChange = (name, value) => {

        setData({...data, [name]: value});
    };
    const {name, email, phone} = data;
    return (
        <div className='bg-blue-header py-10 md:py-0 md:h-52 flex items-center'>
            <div className='container flex flex-col md:flex-row items-center justify-between relative px-10 md:px-0'>
                <TextEditor
                    placeholder='Họ và Tên'
                    name='name'
                    value={name}
                    classLabel="text-xl mb-5 text-white  "
                    onChange={onChange}
                    className='input-form'
                    container='w-full md:w-auto mb-8 md:mb-0'
                    label='Họ và Tên' />
                <TextEditor
                    placeholder='Số điện thoại'
                    name='phone'
                    value={phone}
                    onChange={onChange}
                    className='input-form'
                    container='w-full md:w-auto  mb-8 md:mb-0'
                    classLabel="text-xl mb-5 text-white"
                    label='Số điện thoại' />
                <TextEditor
                    placeholder='Email'
                    name='email'
                    value={email}
                    container='w-full md:w-auto mb-8 md:mb-0'
                    onChange={onChange}
                    className='input-form input-email '
                    classLabel="text-xl mb-5 text-white"
                    label='Đăng ký email để nhận thông tin' />

                <Button className={'btn-form  md:absolute bottom-0 right-0'} title={'Đăng ký'}>
                    Đăng ký
                </Button>

            </div>

        </div>
    );
}

export default Form;