/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import {useRouter} from 'next/router';
import React, {useEffect, useRef, useState} from 'react';
import {FaMusic, FaTshirt} from 'react-icons/fa';
import {toast} from 'react-toastify';

function Menu() {
    //const [openTheme, setOpenThem] = useState(false);

    const [background, setBackground] = useState('#00392D');
    const [backgroundFooter, setBackgroundFooter] = useState('#004c3d');

    const handleClick = () => {
        const newBackground = background === '#00392D' ? '#000000' : '#00392D';
        const newBackgroundfooter = backgroundFooter === '#004c3d' ? '#000000' : '#004c3d';
        setBackground(newBackground);
        setBackgroundFooter(newBackgroundfooter);
        document.documentElement.style.setProperty('--bg-color', newBackground);
        document.documentElement.style.setProperty('--footer', newBackgroundfooter);
    };
    const router = useRouter();
    const tab = router.asPath;

    const [playing, setPlaying] = useState(false);
    let audio;
    if (typeof Audio != 'undefined') {
        audio = useRef(new Audio('/music.mp3'));
        audio.current.loop = true;
    }
    const player = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.current.play() : audio.current.pause();
    }, [audio, playing]);

    useEffect(() => {
        playing ? toast.success('Music On!') : toast('Music Off!');
    }, [playing]);

    const _className = playing === true ? 'bg-blue-gold' : 'bg-[#000000]';
    return (
        <div className='hidden md:block'>
            <div className='flex items-center justify-between'>
                <MenuItem to={'/#home'} text={'Tổng quan'} tab={tab} />
                <MenuItem to={'/#introduce'} text={'Giới thiệu'} tab={tab} />
                <MenuItem to={'/#speakers'} text={'Diễn giả'} tab={tab} />
                <MenuItem to={'/#guest'} text={'CỘNG ĐỒNG TRÀ CHIỀU THƯƠNG GIA'} tab={tab} />
                <MenuItem to={'/#news'} text={'Sự kiện'} tab={tab} />
                <MenuItem to={'/#series'} text={'Series'} tab={tab} />
                <MenuItem to={'/#parther'} text={'Đối tác'} tab={tab} />
                <MenuItem to={'/#donors'} text={'Nhà tài trợ'} tab={tab} />
                <MenuItem to={'/#contact'} text={'Liên hệ'} tab={tab} className={' py-1 my-2'} />
                <span onClick={handleClick} className='p-3 rounded-full change-background cursor-pointer'>
                    <FaTshirt />
                </span>
                <span onClick={player} className={'p-3 cursor-pointer ml-3 rounded-full ' + _className}>
                    <FaMusic />
                </span>
            </div >
        </div >
    );
}

function MenuItem({text, to, tab, newTab, className}) {
    const isActive = tab === to ? ' text-[#FFC292] font-bold ' : 'text-white';
    return (
        <div className='parentMenu mx-5 py-2 md:py-0 text-center '>
            <NavLink to={to}
                className={' text-[0.875rem] uppercase hover:text-[#FFC292] cursor-pointer ' + isActive + className}
                newtab={newTab ? true : false}>
                {text}
            </NavLink>
        </div>

    );
}

export default Menu;
