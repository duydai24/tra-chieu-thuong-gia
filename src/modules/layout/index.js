/* eslint-disable @next/next/no-img-element */

import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import {ToastContainer} from 'react-toastify';

function Layout({children}) {

  return (
    <div className="min-w-full min-h-full  overflow-hidden ">
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        //hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Layout;

