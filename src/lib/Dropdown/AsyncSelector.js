import {gateAPI} from 'core/gateAPI';
import ImageViewer from 'lib/Image/ImageViewer';
import React, {useEffect, useState} from 'react';
import {components, createFilter} from 'react-select';
import AsyncSelect from 'react-select/async';
import {getValueFromOptions} from 'utils/getValueFromOptions';

import {selectStyles} from './selectStyles';

const Option = (props) => {
  const {data: {displayName, phoneNumber, photoURL, email}} = props;
  return (
    <components.Option {...props}>
      <div className={'user-selector-option'}>
        <ImageViewer source={photoURL} className={'-img'} />
        <div>
          <p>{displayName || 'Tên ?'}</p>
          <p>{phoneNumber || email || 'SDT ?'}</p>
        </div>
      </div>
    </components.Option>
  );
};

export function AsyncUserSelector({value, hasPerm, isMulti,
  label,
  name,
  disabled, onChange, extra}) {
  const [users, setUser] = useState([]);
  const [inputValue, setInput] = useState('');
  useEffect(() => {
    let _mounted = true;
    const loadData = async () => {
      if (value?.length > 0 && hasPerm) {
        const user = await gateAPI('usermanager/get', {id: value});
        if (user) {
          const userFixs = [{
            ...user,
            value: user.id,
            label: user.displayName || user.phoneNumber || user.email
          }];
          if (_mounted) setUser(userFixs);
        }
      }
    };
    loadData();
    return () => {
      _mounted = false;
    };
  }, [hasPerm, value]);

  const loadUsers = async (value) => {
    if (value?.length < 3) return;
    const users = await gateAPI('usermanager/search', {phoneNumber: value});
    const userFixs = users?.map(u => ({
      ...u,
      value: u.id,
      label: u.displayName || u.phoneNumber || u.email
    }));
    const res = userFixs || [];
    setUser(res);

    return res;
  };
  const onInputChange = (str, {action}) => {
    if (action === 'set-value') return false;
    setInput(str);
  };
  const onChangeSelect = (value) => {
    if (!onChange) {
      return;
    }
    if (extra)
      onChange(extra, name, value?.value);
    else
      onChange(name, value?.value);
  };

  return (<div className="select-container">
    <p>{label}</p>
    <AsyncSelect
      instanceId={'user-' + name}
      filterOption={createFilter({ignoreAccents: false})}
      loadOptions={loadUsers}
      closeMenuOnSelect={false}
      components={{Option}}
      isDisabled={disabled} styles={selectStyles}
      className={'selector '}
      classNamePrefix='selector'
      isMulti={isMulti}
      // options={options}
      cacheOptions
      defaultOptions={users}
      value={getValueFromOptions(value, users)}
      onInputChange={onInputChange}
      inputValue={inputValue}
      placeholder={label}
      name={name}
      //ignoreAccents={false}
      onChange={onChangeSelect} />
  </div>);

}
