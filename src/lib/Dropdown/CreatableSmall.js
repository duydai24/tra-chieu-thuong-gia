import {useEffect, useState} from 'react';
import {FaPlus} from 'react-icons/fa';
import CreateableControl from 'react-select/creatable';
import {getArrayValueFromSelectValue} from 'utils/getArrayValueFromSelectValue';
import {getValueFromOptions} from 'utils/getValueFromOptions';
import {getValueFromSelectValue} from 'utils/getValueFromSelectValue';
import {stringHelper} from 'utils/stringHelper';

import {selectStyles} from './selectStyles';

function CreateNewItem(label) {
  const title = 'Thêm  mới ' + (label + '').toLowerCase() + ' : ';
  // eslint-disable-next-line
  return inputValue => <div className="newvalue">
    <FaPlus />
    <span>{title}</span>
    <span className="val-in">{stringHelper.capitalize(inputValue + '')}</span></div>;
}

export const CreatableSmall = ({onChange, name, value, className, options, extra, isMulti, label,
  onCreateOption,
  hideLabel,
  children,
}) => {
  const [valueDisplay, setDisplay] = useState([]);
  const _onChange = (value) => {
    if (!onChange) {
      return;
    }
    const newValue = isMulti ? getArrayValueFromSelectValue(value) : getValueFromSelectValue(value);
    if (extra || extra === 0)
      onChange(extra, name, newValue);
    else
      onChange(name, newValue);
  };
  const _onCreateOption = (label) => {
    if (!onCreateOption) {
      return;
    }
    if (extra || extra === 0)
      onCreateOption(extra, name, label);
    else
      onCreateOption(name, label);
  };

  useEffect(() => {
    setDisplay(getValueFromOptions(value, options));
  }, [value, options]);
  return <div className={'toggle ' + className}>
    <div>
      {hideLabel ? null : <p className={' mb-2 block  font-bold text-gray-800'}>{label}  </p>}
      {children}
    </div>
    <CreateableControl
      classNamePrefix='selector'
      name={name}
      options={options}
      formatCreateLabel={CreateNewItem(label)}
      styles={selectStyles}
      className={'selector'}
      isMulti={isMulti}
      value={valueDisplay}
      onChange={_onChange}
      placeholder={label}
      onCreateOption={_onCreateOption} />
  </div>;
};

