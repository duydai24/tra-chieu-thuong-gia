/* eslint-disable @next/next/no-img-element */
import {getImageNewIfExists, getRealImageUrl} from 'core/getRealImageUrl';
import {publicAPI} from 'core/publicAPI';
import Title, {BorderTitle} from 'lib/Title';
import Banner from 'modules/landing/Banner';
import LayoutClient from 'modules/layout/LayoutClient';
import React from 'react';

function About({teams = [], banner = []}) {

    return (
        <LayoutClient >
            <Banner data={banner} />
            <div className='container'>
                <div className='text-center mt-20 mb-20'>
                    <Title text={'TD land'} className={'uppercase'} />
                    <BorderTitle className={'mx-auto my-10'} />
                    <p className='max-w-3xl mx-auto text-justify'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words, consectetur,
                        from a Lorem Ipsum passage, and going through the cites of the word
                        in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum…
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                        those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et
                        Malorum” by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through
                        the cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum…
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                        those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et
                        Malorum” by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
                <div className=' vison mt-20 py-20 px-32 text-white'>
                    <Title text={'Tầm nhìn - sứ mệnh'} className={'uppercase text-center text-white'} />
                    <BorderTitle className={'bg-white mx-auto mt-8 my-10'} />
                    <p className='leading-7'>Contrary to popular belief, Lorem Ipsum is not simply random text. It
                        has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through
                        the cites of the word in classical literature, discovered the undoubtable
                        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum…
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced
                        in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
                <div className='flex my-20'>
                    <img alt='img' src='valueAbout.png' className='mr-16' width={600} height={400} />
                    <div>
                        <Title text={'Giá trị cốt lõi'} className={'mb-20'} />
                        <p className='text-left'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more
                            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                            going through the cites of the word in classical literature,
                            discovered the undoubtable source. Lorem Ipsum comes from sections
                            1.10.32 and 1.10.33 of “de Finibus Bonorum…
                        </p>
                    </div>
                </div>
                {/*<div className='flex mb-20'>
                    <div className='mr-16'>
                        <Title text={'Giá trị cốt lõi'} className={'mb-20'} />
                        <p className='text-left'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more
                            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                            going through the cites of the word in classical literature,
                            discovered the undoubtable source. Lorem Ipsum comes from sections
                            1.10.32 and 1.10.33 of “de Finibus Bonorum…
                        </p>
                    </div>
                    <img alt='img' src='commitAbout.webp' />
                </div>*/}

            </div>
            <div className='team bg-blue-bg py-20'>
                <div className='container'>
                    <Title text={'Đội ngũ'} className={'mb-20'} />
                    <div className='grid grid-cols-4 gap-5'>
                        {teams.slice(0, 4).map((item, index) =>
                            <div key={item.id} className={'flex text-sm team-item-' + index}>
                                <div className='content'>
                                    <p className='job'>{item.extra}</p>
                                    <p className='font-semibold mb-2 name'>{item.label}</p>
                                    <p className='summary'>{item.summary}</p>
                                </div>
                                <img className='w-full' src={getRealImageUrl(getImageNewIfExists(item))} alt='' width={86} height={86} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/*<Form />*/}
        </LayoutClient>
    );
}

About.getInitialProps = async () => {

    const typeBlog = 22;
    const teams = await publicAPI('content/list', {type: typeBlog, pageSize: 100});
    const banner = await publicAPI('content/list', {type: 11, pageSize: 100});

    if (!teams) {
        return {
            teams: [],
            banner: [],

        };
    }
    const {list} = teams;

    return {
        teams: list,
        banner: banner.list,

    };
};

export default About;