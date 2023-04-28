/* eslint-disable @next/next/no-img-element */

import NotifyContainer from 'lib/Notification/NotifyContainer';
import React from 'react';

function Layout({children}) {

  return (
    <div className="min-w-full min-h-full  overflow-hidden ">
      {children}
      <NotifyContainer />
    </div>
  );
}

export default Layout;

