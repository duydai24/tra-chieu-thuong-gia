/* eslint-disable no-unused-vars */
import ContactHome from 'modules/landing/contactHome';
import React, {useEffect, useRef, useState} from 'react';
import {toast} from 'react-toastify';

import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import HeaderMoBile from './HeaderMoblile';

function LayoutClient({children}) {
  const [playing, setPlaying] = useState(false);
  let audio;
  if (typeof Audio != 'undefined') {
    audio = useRef(new Audio('/music.mp3'));
    audio.current.loop = true;
  }
  const player = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [audio, playing]);

  useEffect(() => {
    playing ? toast.success('Music On!') : toast('Music Off!');
  }, [playing]);

  const _className = playing === true ? 'bg-blue-gold' : 'bg-[#000000]';

  return (
    <div>
      <Header player={player} className={_className} />
      <HeaderMoBile player={player} className={_className} />
      <div className=''>
        {children}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default LayoutClient;