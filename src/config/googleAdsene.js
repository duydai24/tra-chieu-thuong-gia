import {useEffect} from 'react';

const GoogleAdsenseContainer = ({client, slot}) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div style={{textAlign: 'left', overflow: 'hidden'}}>
      <span style={{fontSize: '12px'}}>Advertisment</span>
      <ins
        className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAdsenseContainer;