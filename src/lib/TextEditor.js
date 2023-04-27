import React, {forwardRef, useEffect, useState} from 'react';

import Input from './DebounceInput';

const TextEditorWithRef = (
  {
    name,
    value,
    label,
    onChange,
    className,
    dataType,
    pattern,
    autoFocus,
    extra,
    placeholder,
    onComplete,
    container,
    title,
    classLabel,
    children,
    ...rest
  },
  forwardRef
) => {
  const [newData, setData] = useState();
  useEffect(() => {
    setData(value);
  }, [value]);
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (onComplete) onComplete();
    }
  };
  const _onChange = ({target: {name, value}}) => {
    setData(value);
    if (!onChange) return;
    if (extra || extra === 0) onChange(extra, name, value);
    else onChange(name, value);
  };

  const displayValue = newData || newData === '' ? newData : value ? value : '';
  const type = dataType ? dataType : 'text';

  if (!onChange) return <p className='line-clamp-1'>{value}</p>;
  return (
    <div className={'input-container control ' + (container || '')} title={title || label}>
      {label && <label className={'mb-2 block font-bold   ' + classLabel}>{label}</label>}
      <Input
        onKeyDown={onKeyDown}
        {...rest}
        label={label}
        ref={forwardRef}
        autoFocus={autoFocus}
        value={displayValue}
        className={'input p-2 text-gray-500' + (className || '')}
        placeholder={placeholder || label || ''}
        name={name}
        onChange={_onChange}
        autoComplete='new-password'
        type={type}
        pattern={pattern}
      />
      {children}
    </div>
  );
};
const TextEditor = forwardRef(TextEditorWithRef);
export {TextEditor};
export default TextEditor;
