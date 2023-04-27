
import {useEffect, useRef, useState} from 'react';
import InputMask from 'react-input-mask';
import {getDate, getDay} from 'utils/isDate';

function DateEditor({value,
  name,
  label,
  onChange,
  container,
  extra,
  ...other
}) {
  const _inputRef = useRef(null);
  const [sValue, setValue] = useState('01/01/2021');
  const _onChange = ({target: {name, value}}) => {

    if (value) {
      const [d, m, y] = value.split('/');
      const isOK = (d + '').indexOf('_') < 0 && (m + '').indexOf('_') < 0 && (y + '').indexOf('_') < 0;
      if (isOK) {
        try {
          const _newYear = Math.max(2019, Math.min(y, 2029));
          const _newMonth = Math.min(m - 1, 11);

          const maxDate = new Date(_newYear, _newMonth + 1, 0).getDate();
          const _newDay = Math.min(d, maxDate);

          //if (leapYear(_newYear) && _newMonth === 1) {
          //  _newDay = Math.min(29)
          //}

          const newDate = new Date(_newYear, _newMonth, _newDay);
          if (onChange) {
            if (extra) {
              onChange(name, newDate, extra);
            }
            else onChange(name, newDate);
          }
        }
        catch {
          setValue(value);
        }
      }
      else {
        setValue(value);
      }

      // if (onChange) onChange(name, _d);
    }
  };

  useEffect(() => {
    const _date = getDate(value, true);
    if (!_date) {
      setValue('01/01/2021');
    }
    else {
      const _d = getDay(_date);
      //const [d, m, y] = _d.split('/');
      setValue(_d);
    }
  }, [value]);

  return (
    <div className={'date-editor ' + container} {...other}>
      {label && <label>{label}</label>}
      <InputMask mask="99/99/9999"
        placeholder="__/__/____"
        maskChar='_' value={sValue} name={name}
        onChange={_onChange}
        onBlur={_onChange}
        ref={_inputRef}
        className="input">
      </InputMask>
    </div>
  );
}

export default DateEditor;
