import {publicAPI} from 'core/publicAPI';
import Title, {BorderTitle} from 'lib/Title';
import LayoutClient from 'modules/layout/LayoutClient';
import React from 'react';

function Contact({other = {}}) {
    const {phone, email, location1} = other || {};
    return (
        <LayoutClient >
            <div className='container   pb-20'>
                <Title text={'Liên Hệ'} className={'text-center mt-52'} />
                <BorderTitle className={'mb-20 mt-10 mx-auto'} />
                <div className='text-center text-2xl'>
                    <p className='font-bold text-blue-footer '>CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN BẤT ĐỘNG SẢN TD LAND</p>
                    <p><span className='font-bold text-blue-footer'>Địa chỉ: </span>{location1}</p>
                    <div className='flex justify-center'>
                        <p ><span className='font-bold text-blue-footer'>Email: </span>  {email}</p> <span className='mx-3'>|</span>
                        <p><span className='font-bold text-blue-footer'>Điện thoại: </span> {phone}</p>
                    </div>
                    <p><span className='font-bold text-blue-footer'>Website: </span> http://trachieuthuonggia.vn</p>
                </div>

            </div>
            {/*<Form />*/}
        </LayoutClient>

    );
}

Contact.getInitialProps = async () => {
    const otherData = await publicAPI('content/list', {type: 90, pageSize: 10});
    let other = {};
    if (otherData) {
        const {list} = otherData;
        try {
            const {extra} = list[0];
            other = JSON.parse(extra);
        } catch {
            other = {};
        }
    }
    return {
        other: other
    };
};

export default Contact;