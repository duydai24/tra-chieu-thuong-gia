import React from 'react';
import {FaPlus} from 'react-icons/fa';
import {IoIosSearch} from 'react-icons/io';

import DebounceInput from './DebounceInput';

export default class SearchEditor extends React.Component {
  state = {
    newData: '',
  };
  _onChange = (e) => {
    const {onChange, extra} = this.props;
    const {name, value} = e.target;
    if (!onChange) return;
    if (extra || extra === 0) onChange(extra, name, value);
    else onChange(name, value);
  };

  onClickText = () => {
    this._input?.focus();
  };
  input_ref = (ref) => (this._input = ref);
  render() {
    const {className, value, name, label, onAdd} = this.props;
    const {newData} = this.state;
    const displayValue = newData ? newData : value ? value : '';
    return (
      <div className={'relative bg-gray-700 px-4 py-1 rounded-full flex items-center h-8 pl-10' + (className ? ' ' + className : '')}>
        <IoIosSearch className={'absolute text-2xl top-1 left-2 text-gray-400'} title="Tìm kiếm" />
        <DebounceInput
          value={displayValue}
          element='input'
          forceNotifyByEnter={false}
          placeholder={label}
          forceNotifyOnBlur={true}
          debounceTimeout={500}
          className="bg-gray-700 outline-none"
          name={name}
          onChange={this._onChange}
          inputRef={this.input_ref}
          autoComplete='new-password'
        />
        {(onAdd && value) && <FaPlus className={'absolute top-1 text-2xl right-2 text-gray-400'} onClick={onAdd} title="Thêm mới" />}
      </div>
    );
  }
}
