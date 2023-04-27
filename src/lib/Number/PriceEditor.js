import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';
import React from 'react';
import NumberFormat from 'react-number-format';

export function PriceEditor({value, name, label, className, filterMode, onChange, extra, disable, min, max, container, suffix, hideLabel, decimalScale = 0}) {
  const onChangeProps = (newValue) => {
    if (onChange) {
      if (extra || extra === 0) {
        onChange(extra, name, newValue);
      }
      else onChange(name, newValue);

    }
  };
  const _onChange = (e) => {
    const {floatValue: newValue} = e;
    if (disable) return;
    // eslint-disable-next-line
    if (newValue != value) {
      if (!!min && (newValue < min)) {
        onChangeProps(min);
      } else if (!!max && (newValue > max)) {
        onChangeProps(max);
      } else {
        onChangeProps(newValue);
      }
    }
  };
  if (!onChange)
    return (
      <NumberFormat value={value ? value : 0} displayType={'text'} thousandSeparator={true} suffix={suffix} className={'number ' + className} />
    );
  if (filterMode) {
    return <NumberFilter value={value} extra={extra} label={label} onChange={onChange} name={name} />;
  }
  if (hideLabel) return <NumberFormat
    value={value}
    displayType={'input'}
    decimalScale={decimalScale}
    thousandSeparator={true}
    suffix={suffix ? suffix : ' '}
    name={name}
    onValueChange={_onChange}
    className="input"
  />;
  return (
    <div className={container}    >
      <p className="label">{label}</p>
      <NumberFormat
        value={value}
        displayType={'input'}
        thousandSeparator={true}
        suffix={suffix ? ' ' + suffix : ' '}
        name={name}
        onValueChange={_onChange}
        className="input"
      />

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

