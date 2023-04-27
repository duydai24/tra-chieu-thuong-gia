import {MdDelete} from 'react-icons/md';
import SelectControl from 'react-select';
import {getArrayValueFromSelectValue} from 'utils/getArrayValueFromSelectValue';
import {getLabelWithValue} from 'utils/getLabelWithValue';
import {getValueFromOptions} from 'utils/getValueFromOptions';
import {getValueFromSelectValue} from 'utils/getValueFromSelectValue';

import {selectStyles} from './selectStyles';

const NoOptionsMessage = () => {
  return null;
};
const SelectSmall = ({value,
  isMulti,
  options,
  label,
  name,
  disabled,
  className,
  onChange,
  extra,
  hideLabel,
  children,
  direct,
  ...other
}) => {
  const onChangeSelect = (e) => {
    if (!onChange) {return;}
    if (direct) {
      onChange(e);
      return;
    }
    const newData = isMulti ? getArrayValueFromSelectValue(e) : getValueFromSelectValue(e);
    if (extra || extra === 0 || extra === '0') onChange(extra, name, newData);
    else onChange(name, newData);
  };
  const onRemoveAll = () => onChangeSelect(null);
  const valueDisplay = getValueFromOptions(value, options);
  if (!onChange) return <span>{getLabelWithValue(options, value)}</span>;
  return (<div className={'action-hover ' + className}>
    <div className="label-container">
      {!hideLabel ? <p className='mb-2 block font-bold text-gray-800'>{label}  </p> : null}
      {children}
    </div>
    {!isMulti || value === undefined || value === null || !value?.length ? null :
      <div className="hover">
        <span onClick={onRemoveAll} >
          <MdDelete />
        </span>
      </div>
    }
    <SelectControl
      instanceId={'selector-' + name}
      isDisabled={disabled}
      styles={selectStyles}
      components={{NoOptionsMessage}}
      className={'selector   '}
      classNamePrefix='selector'
      isMulti={isMulti} options={options}
      value={valueDisplay}
      {...other}
      placeholder={label} name={name} ignoreAccents={false} onChange={onChangeSelect} />

  </div>);
};

export default SelectSmall;