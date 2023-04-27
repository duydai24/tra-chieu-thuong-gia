/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import {webHost} from 'config/apiAddress';
import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';

function ChangeTheme({openTapTheme, OpenTheme, handleChangeTheme}) {

  const [data, setData] = useState();
  const fetchData = async () => {
    const {data} = await axios.get(`${webHost}/api/hello`);
    setData(data.theme);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={OpenTheme === true ? 'bg-[#34224f] z-60 w-[45vw] h-[60vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-7  overflow-auto inset-0 mainPageScroll bgChangeTheme' : 'hidden'}>
      {/*<span className='h-screen w-screen absolute top-0 left-0 bg-slate-600 opacity-25 z-30' />*/}
      <div className='flex items-center justify-between'>
        <p className='textWhite font-bold capitalize mb-5 text-xl'>Giao diện</p>
        <span onClick={openTapTheme} className='textWhite text-3xl cursor-pointer'><AiOutlineClose /></span>
      </div>
      <div className=''><ChangeThemeItem data={data} handleChangeTheme={handleChangeTheme} />
      </div>
    </div>
  );
}
function ChangeThemeItem({data, handleChangeTheme}) {
  return (
    <div>
      {data?.map((value, key) => {
        return (
          <div key={key}>
            <p className='textWhite capitalize font-bold mb-2'>{value.title}</p>
            <div className='grid grid-cols-6 gap-3 items-center mb-5'>
              {value.items.map((e, index) =>
                <div key={index} className='flex items-center' >
                  <div className=''>
                    <div className='relative rounded-md hoverMenuChangeThemeItem'>
                      <img className='rounded-md mb-1' src={e.image} alt="" />
                      <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full flex flex-col items-center z-20 invisible menuChangeThemeItem'>
                        <button onClick={() => handleChangeTheme(e.id, e.image)} className='bg-bgActive border-1 border-bgActive px-5 py-[2px] text-[10px] uppercase textWhite rounded-full mb-1'>áp dụng</button>
                        <button className='bg-gray-600 border-1 border-white px-3 text-[10px] py-[2px] uppercase textWhite rounded-full'>xem trước</button>
                      </div>
                      <span className='bg-gray-900 absolute left-0 top-0 w-full h-full opacity-60 z-10 rounded-md invisible menuChangeThemeItem'></span>
                    </div>
                    <p className='text-xs textWhite'>{e.name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ChangeTheme;