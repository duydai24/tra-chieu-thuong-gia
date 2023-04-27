/* eslint-disable @next/next/no-img-element */

import Title, {BorderTitle} from 'lib/Title';
import React from 'react';
import Slider from 'react-slick';

function Partner({data}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    if (!data) return null;
    return (
        <div className='pt-32 pb-32 '>
            <div className='container'>
                <div className='text-center'>
                    <Title text={'Đối tác tiêu biểu'} />
                    <p className='max-w-2xl text-blue-footer mt-7 mb-9 mx-auto px-5 md:px-0 text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla lacinia
                        usce rhoncus aliquam leo, id semper lorem</p>
                    <BorderTitle className={'mx-auto mb-14'} />
                </div>
                <div>
                    <Slider {...settings}>
                        {data.map((item, index) =>
                            <div key={index} >
                                <img alt='part' src={item.image} width={162} height={82} className='mx-auto' />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>

        </div>
    );
}

export default Partner;