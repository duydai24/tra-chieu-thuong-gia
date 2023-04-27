import React from 'react';

import AdminTitle from './AdminTitle';

export default function AdminHeader({children, text = 'PROJECT'}) {
  return (
    <div className={'flex justify-between bb bg-header-admin pl-4 items-center mb-10'}>
      <AdminTitle text={text} />
      <div className="flex justify-end gap-1 ">
        {children}
      </div>
    </div>
  );
}
