import React from 'react';
import NumberFormat from 'react-number-format';

export function TextPrice({value,
  className,
  suffix = ' đ', ...other}) {

  return <NumberFormat value={value ? value : 0}
    displayType={'text'}
    decimalScale={1}
    thousandSeparator={true} suffix={suffix} className={'text-red-400 ' + (className || '')} {...other} />;
}