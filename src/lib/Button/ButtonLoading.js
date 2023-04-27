import {ButtonCircle} from 'lib/Button';
import React from 'react';
import {MdRefresh} from 'react-icons/md';

export function ButtonLoading({onClick, loading, className, hideIcon, hidden, Icon, text = 'Nạp dữ liệu', loadingText = 'Đang nạp'}) {
  if (hidden) return null;

  return (<ButtonCircle onClick={onClick} className={'btn-loading ' + (className || '')}>
    {loading ? <svg className="animate-spin absolute" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg> : Icon ? <Icon className="mr-2" /> : hideIcon ? null : <MdRefresh className="mr-2" />}
    <span>{loading ? loadingText : text}</span>
  </ButtonCircle>);
}
