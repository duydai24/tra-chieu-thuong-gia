import React from 'react';

const CheckEditor = ({isNative, onChange, name, value, label, className, extra, sub, title ,truthCheck}) => {
  const _onChange = (e) => {
    if (isNative) {
      onChange(e);
      return;
    }
    if (onChange) {
      const {
        target: {
          name,
          checked
        }
      } = e;
      if (extra || extra === 0 || extra === '0') onChange(extra, name, checked); else onChange(name, checked);
    }
  };

  const _catchClick = (e) => {
    e.stopPropagation();
  };
  return <label className={'checkbox relative flex justify-between ' + (className || '')} onClick={_catchClick} title={title || sub || label}>
    {sub && <small>{sub}</small>}
    <span className="-l mr-2">
      {label}
    </span>
      {truthCheck ? value &&(<div className='dot absolute z-0 bg-green-600 w-4 h-4 rounded dot-checkbox-truth'/>): 
      !value && (<div className='dot absolute z-0 bg-green-600 w-4 h-4 rounded dot-checkbox'/>) }
   
    <input type="checkbox" checked={!!value} value={!!value} name={name} onChange={_onChange} className=''/>
  </label>;
};
export default CheckEditor;

