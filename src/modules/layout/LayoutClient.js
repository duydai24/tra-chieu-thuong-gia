/* eslint-disable no-unused-vars */
import {gateAPI} from 'core/gateAPI';
import ContactHome from 'modules/landing/contactHome';
import React, {useEffect, useState} from 'react';

import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import HeaderMoBile from './HeaderMoblile';

function LayoutClient({children}) {
  const [data, setConfigData] = useState({});
  const [partner, setPartner] = useState([]);
  const [config, setPropsConfig] = useState({});

  useEffect(() => {
    let _mounted = true;
    if (data && _mounted) {
      try {

        if (data.extra) {
          const jsonData = JSON.parse(data.extra);
          setPropsConfig(jsonData);
        }
        else {
          setPropsConfig({});
        }
      }
      catch {
        setPropsConfig({});
      }
    }
    return () => {
      _mounted = false;
    };
  }, [data]);

  useEffect(() => {
    const loadData = async () => {
      const serverData = await gateAPI('content/list', {type: 90, pageSize: 1});
      const partner = await gateAPI('content/list', {type: 12, pageSize: 100});
      if (!serverData) {
        return {
          list: []
        };
      }
      const {list} = serverData;
      setPartner(partner.list);
      setConfigData(list?.length ? list[0] : {});

    };
    loadData();
  }, []);

  const {phone, email, location1, brandName, linkedinLink, facebookLink, instagramLink, twitterLink, image, mobile, namecompany} = config || {};
  const _datafooter = {location1, phone, email, linkedinLink, facebookLink, instagramLink, twitterLink, mobile, namecompany};
  return (
    <div>
      <Header logoLink={image} />
      <HeaderMoBile />
      <div className=''>
        {children}
      </div>
      <Footer data={_datafooter} />
      <Copyright auth={brandName} />
    </div>
  );
}

export default LayoutClient;