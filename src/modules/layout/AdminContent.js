import React from 'react';

export default function AdminContent({children}) {
  return (<div className={'flex-1 flex flex-col overflow-hidden'}>{children}</div>);
}
