import Button from 'lib/Button';
import ImageViewer from 'lib/Image/ImageViewer';
import SortList from 'lib/Sorting/SortList';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import React, {useEffect, useState} from 'react';
import {FaPlus} from 'react-icons/fa';

import ImageEditor from '../Image/ImageEditor';

const WebSlider = ({
  name,
  size,
  value,
  label,
  extra,
  onChange,
  className,
}) => {

  const [editItem, setActive] = useState(null);
  const [initComplete, setInit] = useState(0);
  const [data, setData] = useState([]);
  const [isChange, setChange] = useState(0);
  const [_ref, setRef] = useState(null);
  // let _ref = React.useRef();
  const onRemove = async (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setActive(null);
    setChange(1);
  };
  const onRef = (ref) => {
    setRef(ref);
  };
  const onSave = () => {
    if (!onChange) return;
    const value = JSON.stringify(
      data.map((item) => item.image?.image || item.image)
    );
    if (extra || extra === 0) onChange(extra, name, value);
    else onChange(name, value);
  };
  const onRemoveItem = () => {
    if (editItem && onRemove) onRemove(editItem.id);
  };

  const onAdd = async () => {
    const newData = [...data];
    const newItem = {id: newData.length, image: null};
    newData.push(newItem);
    setData(newData);
    setActive(newItem);
    setChange(1);
    if (_ref && _ref.onClick) _ref.onClick();
  };

  const onChangeImage = (index, value) => {
    if (!isArray(value)) {
      let _ind = index || 0;
      const newData = [...data];
      if (newData.length <= _ind) {
        _ind = newData.length;
        newData.push({image: value});
      } else newData[_ind].image = value;
      setData(newData);
      setActive((item) => ({...item, value}));
      setChange(1);
    } else {
      let _ind = index || 0;
      const newData = [...data];

      value.forEach((item, _i) => {
        const newInd = _ind + _i;
        if (newData.length <= newInd) {
          newData.push({image: item});
        } else {
          newData[newInd].image = item;
        }
      });
      setData(newData);
      setActive((item) => ({...item, value}));
      setChange(1);
    }
  };

  const onChangeLayout = (data) => {
    setData(data);
    setChange(1);
  };

  useEffect(() => {
    const loadData = async () => {
      setInit(0);
      if (value) {
        if (isString(value)) {
          try {
            const arr = JSON.parse(value);
            if (isArray(arr))
              setData(arr.map((image, id) => ({id: id, image: image})));
            else setData([{image: arr, id: '0'}]);
          } catch {
            setData([{image: value, id: '0'}]);
          }
        } else if (isArray(value))
          setData(value.map((image, id) => ({id, image})));
      } else {
        setData([]);
      }
      setChange(0);
      setInit(1);
    };
    loadData();
  }, [value]);

  if (!initComplete) return null;
  if (!data) {
    return null;
  }
  if (!onChange) {
    if (data.length > 0) {
      return <ImageViewer src={data[0].image} size={size} />;
    }
    return null;
  }
  return (
    <div className={'slider-editor toggle ' + className}>
      <div className='label-container'>
        <p className='label'>{label}</p>
        <div className='action'>
          <Button
            title='Thêm ảnh mới'
            className='btn-add'
            text='Thêm'

            onClick={onAdd}
          >
            <FaPlus />
          </Button>
          <Button
            title='Lưu thay đổi'
            className='btn-success'
            text='Lưu'
            hidden={!isChange}
            onClick={onSave}
          />
          <Button
            text='Xóa'
            hidden={!editItem || !editItem.id}
            className='btn-danger'
            onClick={onRemoveItem}
          />
        </div>
      </div>
      <div className='imgs'>
        <SortList
          className='sort-product'
          data={[...data]}
          keyId={'id'}
          sortId={'id'}
          imageId={'image'}
          labelId='label'
          axis='x'
          onEdit={setActive}
          onChange={onChangeLayout}
        />
        <div className='editor'>
          <ImageEditor
            childRef={onRef}
            name={editItem ? editItem.id : ''}
            labelId={'label'}
            size={size}
            allowMulti
            value={editItem ? editItem.image : null}
            onChange={onChangeImage}
            label=''
          />
        </div>
      </div>
    </div >
  );
};

export default WebSlider;
