import NavLink from 'lib/NavLink';
import React from 'react';
import {FaDotCircle} from 'react-icons/fa';

export function SControl({children, className, ...other}) {
  return <div className={'flex-1 overflow-hidden text-gray-400 bb border-b px-4 spl-wrapper' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function SHead({children, className, ...other}) {
  return <div className={'p-4 spl-head' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function STab({children, className, ...other}) {
  return <div className={'spl-tab' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function SMain({children, className, ...other}) {
  return <div className={'flex-1 flex flex-col min-h-screen overflow-y-auto spl-main' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function SBar({children, className, ...other}) {
  return <div className={'spl-bar' + (className ? ' ' + className : '')} {...other}>{children}</div>;
}
export function SLeft({children, className, ...other}) {
  return <div className={'flex-1 flex flex-col overflow-hidden md:border-r border-solid border-gray-400 border-opacity-20 ' + (className || '')} {...other}>
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
export function NavMenuItem({active, link, text, icon: Icon, exact, children}) {
  const isActive = (active === link || (!exact && (active + '').startsWith(link)));

  return (<NavLink to={link} className={'flex p-3 font-bold text-gray-600 items-center justify-center cursor-pointer md:justify-start gap-3'}>
    {active !== link ? Icon && <Icon className="fill-current text-lg" /> : <IconTabActive />}
    <span className={(isActive ? ' text-blue-700' : '')}>{text}</span>
    {children}

  </NavLink>);
}