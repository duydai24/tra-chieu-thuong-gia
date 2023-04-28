/* eslint-disable @next/next/no-img-element */

import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

import Menu from './Menu';

function Header({logoLink}) {
  const [sticky, setSticky] = useState(false);
  const [stickyDown, setStickyDown] = useState(false);
  const [pageoffset, setPageoffset] = useState(0);

  useEffect(() => {
    let prevScrolls = window.pageYOffset;
    window.onscroll = () => {
      let currentScrolls = window.pageYOffset;
      if (prevScrolls > currentScrolls) {
        setSticky(true);
        setStickyDown(false);
      } else {
        setSticky(false);
        setStickyDown(true);
      }
      prevScrolls = currentScrolls;
      if (prevScrolls < 121) {
        setSticky(false);
        setStickyDown(false);
      }
      setPageoffset(prevScrolls);
    };
  }, [pageoffset]);

  const _sticky = sticky ? 'translate-y-0' : ' ';
  const _stickyDown = stickyDown ? '-translate-y-full' : ' ';

  return (
    <div className={'h-[52px] md:h-[80px] bg-[#2C2729] text-white fixed top-0 left-0 w-screen z-50 ease-in-out opacity-80 duration-300 border-b-[1px] border-[#FFC292] hidden md:block px-5  ' + _sticky + _stickyDown}>
      <div className='container relative m-auto flex items-center md:justify-between h-full pl-10 md:pl-0'>
        <Logo className='lg:max-w-[130px] md:max-w-[100px]' src={logoLink} />
        <Menu />
      </div>
    </div>
  );
}
function Logo({className}) {
  const router = useRouter();
  const gotoHome = () => router.push('/');
  return (
    <img
      className={'cursor-pointer ' + className}
      src='/logo.png' alt="TCTG" width={60} height={60}
      onClick={gotoHome} />
  );
}
export default Header;