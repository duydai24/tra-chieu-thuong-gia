/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import React, {useState} from 'react';
import {VscChromeClose, VscMenu} from 'react-icons/vsc';

function HeaderMoBile() {
  const exampleData = [
    {text: 'Tổng quan', id: '#home'},
    {text: 'Giới thiệu', id: 'introduce'},
    {text: 'Diễn giả', id: '#utilities'},
    {text: 'Khách mời', id: '#matBang'},
    {text: 'Tin Tức', id: '#news'},
    {text: 'Đối tác', id: '#mew'},
    {text: 'Liên hệ', id: '#contact'},
  ];
  const [openMenumobile, setOpenMenumobile] = useState(false);
  const [active, setAcive] = useState(0); //react hook
  const onActiveClass = (index) => {
    setAcive(index);
    setOpenMenumobile(false);
  };
  return (
    <div>
      <div className='fixed bottom-0 right-0 left-0 block md:hidden z-[100] overflow-hidden'>
        <div className='flex items-center justify-around h-[56px] bg-[#004C3D]'>
          <HeaderMobileItem icon={'mes.png'} link={'https://zalo.me/g/lllsba299'} />
          <HeaderMobileItem icon={'tele.png'} link={'tel:0938963823'} />
          <HeaderMobileItem icon={'facebookHeader.png'} link={'https://www.facebook.com/Asiabusinessinsider/'} />
          <div className='bg-[#004C3D]'>
            {openMenumobile === false
              ?
              <span onClick={() => setOpenMenumobile(!openMenumobile)} className='text-[#FFC292] buttonHeaderMobile'><VscMenu fontSize={28} /></span>
              :
              <span onClick={() => setOpenMenumobile(false)} className='text-[#FFC292] buttonHeaderMobile'><VscChromeClose fontSize={28} /></span>}
          </div>
        </div>
      </div>
      <div className={'fixed left-0 bottom-[52px] z-[100] w-screen h-[calc(100vh-52px)] bg-[#004c3d] bgHeaderMobile flex flex-col ease-in-out duration-300 items-center justify-center md:hidden ' + (openMenumobile ? 'translate-x-0' : '-translate-x-full')}>
        {exampleData.map((value, index) =>
          <MenuItem
            index={index === active ? true : false}
            key={index}
            text={value.text}
            id={value.id}
            onClick={() => onActiveClass(index)} />)}
      </div>
    </div>
  );
}
function HeaderMobileItem({icon, link}) {
  return (
    <NavLink newtab to={link}>
      <div className='bg-[#004C3D]'>
        <img src={`./${icon}`} alt='icon' className='p-4' />
      </div>
    </NavLink>
  );
}

function MenuItem({text, id, onClick, index}) {
  const isActive = index ? ' text-[#FFC292] font-semibold' : '';
  return (
    <NavLink to={id} onClick={onClick} className={'uppercase text-white font-light text-[1.325rem] hover:text-[#FFC292] mb-5 cursor-pointer ' + isActive}>
      {text}
    </NavLink>
  );
}

export default HeaderMoBile;