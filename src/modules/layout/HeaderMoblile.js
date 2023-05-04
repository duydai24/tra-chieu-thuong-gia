/* eslint-disable @next/next/no-img-element */
import NavLink from 'lib/NavLink';
import React, {useState} from 'react';
import {FaMusic, FaTshirt} from 'react-icons/fa';
import {VscChromeClose, VscMenu} from 'react-icons/vsc';

function HeaderMoBile({player, className}) {
  const exampleData = [
    {text: 'Tổng quan', id: '#home'},
    {text: 'Giới thiệu', id: '#introduce'},
    {text: 'Diễn giả', id: '#speakers'},
    {text: 'Cộng đồng trà chiều', id: '#guest'},
    {text: 'Sự kiện', id: '#news'},
    {text: 'Đối tác', id: '#parther'},
    {text: 'Nhà tài trợ', id: '#donors'},
    {text: 'Liên hệ', id: '#contact'},
  ];
  const [openMenumobile, setOpenMenumobile] = useState(false);
  const [active, setAcive] = useState(0); //react hook
  const onActiveClass = (index) => {
    setAcive(index);
    setOpenMenumobile(false);
  };
  const [background, setBackground] = useState('#00392D');
  const [backgroundFooter, setBackgroundFooter] = useState('#004c3d');
  const [backgroundIcons, setBackgroundIcons] = useState('#000000');

  const handleClick = () => {
    const newBackground = background === '#004C3D' ? '#000000' : '#004C3D';
    const newBackgroundfooter = backgroundFooter === '#004C3D' ? '#000000' : '#004C3D';
    const newBackgroundIcons = backgroundIcons === '#000000' ? '#004C3D' : '#000000';
    setBackground(newBackground);
    setBackgroundFooter(newBackgroundfooter);
    setBackgroundIcons(newBackgroundIcons);
    document.documentElement.style.setProperty('--bg-color', newBackground);
    document.documentElement.style.setProperty('--footer', newBackgroundfooter);
    document.documentElement.style.setProperty('--icons', newBackgroundIcons);
  };

  return (
    <div>
      <div className='fixed bottom-0 right-0 left-0 block md:hidden z-[100] overflow-hidden'>
        <div className='flex items-center justify-around h-[56px] change-background'>
          <HeaderMobileItem icon={'mes.png'} link={'https://zalo.me/g/lllsba299'} />
          <HeaderMobileItem icon={'tele.png'} link={'tel:0938963823'} />
          <HeaderMobileItem icon={'facebookHeader.png'} link={'https://www.facebook.com/Asiabusinessinsider/'} />
          <div className='change-background'>
            {openMenumobile === false
              ?
              <span onClick={() => setOpenMenumobile(!openMenumobile)} className='text-[#FFC292] buttonHeaderMobile'><VscMenu fontSize={28} /></span>
              :
              <span onClick={() => setOpenMenumobile(false)} className='text-[#FFC292] buttonHeaderMobile'><VscChromeClose fontSize={28} /></span>}
          </div>
        </div>
      </div>
      <div className={'fixed left-0 bottom-[52px] z-[100] w-screen h-[calc(100vh-52px)] change-background bgHeaderMobile flex flex-col ease-in-out duration-300 items-center justify-center md:hidden ' + (openMenumobile ? 'translate-x-0' : '-translate-x-full')}>
        {exampleData.map((value, index) =>
          <MenuItem
            index={index === active ? true : false}
            key={index}
            text={value.text}
            id={value.id}
            onClick={() => onActiveClass(index)} />)}
        <div className='flex items-center'>
          <span onClick={handleClick} className='p-3 rounded-full change-background-icons cursor-pointer text-white'>
            <FaTshirt />
          </span>
          <span onClick={player} className={'p-3 cursor-pointer ml-3 rounded-full text-white ' + className}>
            <FaMusic />
          </span>
        </div>
      </div>
    </div>
  );
}
function HeaderMobileItem({icon, link}) {
  return (
    <NavLink newtab to={link}>
      <div className='change-background'>
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