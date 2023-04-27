/* eslint-disable @next/next/no-img-element */

import socialConfig from 'config/socials';
import { gateAPI } from 'core/gateAPI';
import Logo from 'lib/Logo';
import NavLink from 'lib/NavLink';
import NotifyContainer from 'lib/Notification/NotifyContainer';
import React, { useEffect, useState } from 'react';

const type = 90;

function Layout({ children}) {
 
  const [data, setData] = useState({});
  const [edit, setEdit] = useState({});

  useEffect(() => {
    let _mounted = true;
    if (data && _mounted) {
      try {
     
        if (data.extra) {
          const jsonData = JSON.parse(data.extra);
          setEdit(jsonData);
        }
        else {
          setEdit({});
        }
      }
      catch {
        setEdit({});
      }
    }
    return () => {
      _mounted = false;
    };
  }, [data]);

  useEffect(() => {
    const loadData = async () => {

      const serverData = await gateAPI('content/list', { type, pageSize: 1 });
 
        const { list } = serverData;
        setData(list?.length ? list[0] : {});
 
    };
    loadData();
  }, []);

  const { phone, email, location1, phone1, brandName, image,  pintersetLink, youtubeLink, facebookLink, instagramLink, tiktokLink } = edit || {};

  return (
    <div className="relative min-h-screen min-w-full flex flex-col  overflow-hidden ">
      <div className='container relative m-auto'>
        <Logo src={image} className='absolute top-3 md:translate-x-0 md:left-0 z-50 left-1/2 -translate-x-1/2' />
      </div>
      {children}
      <div className="container mx-auto z-10">
        <div className="flex flex-col items-center justify-center pt-4 pb-20">
          <div className="w-11/12">
            <div className="mt-2 flex flex-col items-center text-center text-gray-400">
              <h1 className="font-medium text-xl pb-4 text-white">
                Contacts for work
              </h1>
              <p>
                Add: {location1}
              </p>
              <p >
                Email: {email || '777studio.vn@gmail.com'}
              </p>
              <p >
                Mobile: {phone || '0942.969.333'} || {phone1 || '0983.863.777'}
              </p>
              <p className="font-medium text-xl pt-12 text-white">
                Follow us on
              </p>
              <div className="flex gap-2 items-center justify-center mt-4 relative">
                <SocialLink link={facebookLink} text="Instagram" image="/facebook.webp" />
                <SocialLink link={instagramLink} text="Instagram" image="/instagram.webp" />
                <SocialLink link={tiktokLink} text="TikTok" image="/tiktok.webp" />
                <SocialLink link={youtubeLink} text="Youtube" image="/youtube.webp" />
                <SocialLink link={pintersetLink} text="Pinterest" image="/pinterest.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full z-10 h-24 flex items-center justify-center gap-10 text-gray-400 text-sm bb border-t">
        <span>Copyright &copy;</span>
        <span>{brandName || '777 STUDIO'}</span>
      </footer>
 
      <NotifyContainer />
    </div>
  );
}

export default Layout;

function SocialLink({ text = 'Facebook', image = '/facebook.webp', link = socialConfig.facebook }) {
  return (<NavLink className="w-10 h-10 block rounded-full hover:animate-ping" newtab to={link} title={text}>
    <img src={image} width={socialConfig.iconSize} height={socialConfig.iconSize} />
  </NavLink>);
}
