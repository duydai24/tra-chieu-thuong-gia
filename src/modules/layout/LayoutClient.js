/* eslint-disable no-unused-vars */
import ContactHome from 'modules/landing/contactHome';
import React, {useEffect, useState} from 'react';

import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import HeaderMoBile from './HeaderMoblile';

function LayoutClient({children}) {
  return (
    <div>
      <Header />
      <HeaderMoBile />
      <div className=''>
        {children}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default LayoutClient;