import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';
import React from 'react';

export function PriceEditor({value, name, label, filterMode, onChange, extra, container = 0}) {

  if (filterMode) {
    return <NumberFilter value={value} extra={extra} label={label} onChange={onChange} name={name} />;
  }
  return (
    <div className={container}    >
      <p className="label">{label}</p>

    </div>
  );
}
export function NumberFilter({value, extra, onChange, name, label, labels, className}) {
  const val = value ? _isString(value) ? JSON.parse(value) : _isArray(value) ? value : [0, 0] : [0, 0];
  const _onChangeNumber = (index, value) => {
    val[index] = value;
    if (extra || extra === '0' || extra === 0)
      onChange(extra, name, val);
    else
      onChange(name, val);
  };
  return <div className={'filter-2 ' + className}>
    <p className="label">{label}</p>
    <PriceEditor name={0}
      label={labels && labels.length > 0 ? [labels[0]] : 'Từ'}
      value={val.length > 0 ? val[0] : 0} onChange={_onChangeNumber} />
    <PriceEditor name={1}
      label={labels && labels.length > 1 ? [labels[1]] : 'Đến'}
      value={val.length > 1 ? val[1] : 1} onChange={_onChangeNumber} />
  </div>;
}

export default PriceEditor;

