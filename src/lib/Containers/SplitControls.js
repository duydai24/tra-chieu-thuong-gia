import NavLink from 'lib/NavLink';
import React from 'react';
import {FaDotCircle} from 'react-icons/fa';

export function SControl({children, className, ...other}) {
  return <div className={'flex-1 overflow-hidden text-gray-400 spl-wrapper' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function SHead({children, className, ...other}) {
  return <div className={'spl-head' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function STab({children, className, ...other}) {
  return <div className={'spl-tab' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function SMain({children, className, ...other}) {
  return <div className={'flex-1 flex flex-col overflow-y-auto spl-main' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function SBar({children, className, ...other}) {
  return <div className={'spl-bar' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function SLeft({children, className, ...other}) {
  return <div className={'flex-1 flex flex-col overflow-hidden py-2  border-solid border-gray-400 border-opacity-20  ' + (className || '')} {...other}>
    {children}
  </div>;
}
export function TabMenuItem({active, inx, setTab, text, hoz, icon: Icon}) {
  return (<div className={'flex p-3 font-bold text-gray-600 items-center justify-center cursor-pointer md:justify-start gap-3 transition-all ' + (hoz ? ' border-b-4 py-3 px-4' + (active === inx ? ' border-blue-500 ' : ' border-gray-100') : '')} onClick={() => setTab(inx)}>
    {active !== inx ? Icon && <Icon className="fill-current text-lg" /> : <IconTabActive />}
    <span className={(active === inx ? ' text-blue-700' : '')}>{text}</span>
  </div>);
}
function IconTabActive() {
  return (<FaDotCircle className="fill-current text-md text-blue-700" />);
}
export function NavMenuItem({active, link, text, exact, children, className}) {
  const isActive = (active === link || (!exact && (active + '').startsWith(link)));
  const _active = isActive ? ' bg-active-tab ' : '';
  return (<NavLink to={link} className={' block pl-3  py-3 font-bold items-center tab-menu-admin   text-gray-600 cursor-pointer  ' + _active + className}>
    <span className={(isActive ? ' text-white' : '')}>{text}</span>
    {children}

  </NavLink>);
}