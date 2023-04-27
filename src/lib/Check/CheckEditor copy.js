import React from 'react';

const CheckEditor = ({isNative, onChange, name, value, label, className, extra, sub, title}) => {
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

  return <label className={'checkbox ' + (className || '')} onClick={_catchClick} title={title || sub || label}>
    {sub && <small>{sub}</small>}
    <input type="checkbox" checked={!!value} value={!!value} name={name} onChange={_onChange} />
    <span className="-l">
      {label}
    </span>
  </label>;
};
export default CheckEditor;

