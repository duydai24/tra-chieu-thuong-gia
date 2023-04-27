import React from 'react';
import SelectControl, {createFilter} from 'react-select';
import {FixedSizeList as List} from 'react-window';

import {selectStyles} from './selectStyles';

const height = 35;

class MenuList extends React.Component {
  render() {
    const {options, children, maxHeight, getValue} = this.props;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;
    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({index, style}) => {
          return <div style={style}>{children[index]}</div>;
        }}
      </List>
    );
  }
}
export const SelectLarge = ({value, isMulti, options, label, name, disabled, className, onChange, extra}) => {
  const onChangeSelect = (e) => {
    if (!onChange) {
      return;
    }
    if (extra)
      onChange(extra, name, e);
    else
      onChange(name, e);
  };
  const loadOptionsAsyncWithoutFiltering = () => {
    // ...
    return Promise.resolve([...options]);
  };
  return (<div>
    <p>{label}</p>
    <SelectControl filterOption={createFilter({ignoreAccents: false})} components={{MenuList}} loadOptions={loadOptionsAsyncWithoutFiltering} isDisabled={disabled} styles={selectStyles} className={'border-bottom select ' + className} isMulti={isMulti} options={options} value={value} placeholder={label} name={name} ignoreAccents={false} onChange={onChangeSelect} />
  </div>);
};
