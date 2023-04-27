/* eslint-disable @next/next/no-img-element */
import {getRealImageUrl} from 'core/getRealImageUrl';
import sortBy from 'lodash/sortBy';
import React, {useEffect, useState} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import styles from './style.module.scss';

const SortableItem = SortableElement(
  ({item, onEdit, labelId, imageId, itemClass, customRender}) => {
    const label = item[labelId];
    const image = item[imageId];
    if (customRender) return <li>{customRender({item, onEdit})}</li>;
    return (
      <li
        className={styles.item + ' ' + itemClass + ' ' + (imageId ? ' ' + styles.hasImage : '')}
        onClick={() => onEdit && onEdit(item)}
      >
        {imageId ? (
          <img

            src={getRealImageUrl(image?.image || image)} alt={imageId} />
        ) : (
          <p>{label ? label : 'Trống'}</p>
        )}
      </li>
    );
  }
);
const SortableList = SortableContainer(
  ({items, onEdit, className, labelId, imageId, itemClass, customRender}) => {
    return (
      <ul className={styles.container + ' ' + className}>
        {items.map((item, index) => (
          <SortableItem
            onEdit={onEdit}
            labelId={labelId}
            imageId={imageId}
            className={itemClass}
            customRender={customRender}
            key={index}
            index={index}
            item={item}
          />
        ))}
      </ul>
    );
  }
);

export default function SortList({
  data,
  onChange,
  className,
  keyId = 'id',
  sortId = 'ord',
  onEdit,
  axis = 'y',
  labelId = 'label',
  imageId,
  customRender,
}) {
  const [items, setItems] = useState(data);

  const onSortEnd = ({oldIndex, newIndex}) => {
    const newData = [...items];
    const temp = {...newData[oldIndex]};

    if (oldIndex > newIndex) {
      for (let ix = oldIndex; ix > newIndex; ix--) {
        newData[ix] = {...newData[ix - 1], [sortId]: ix, isChange: 1};
        // debugger;
      }
    } else {
      for (let ix = oldIndex; ix < newIndex; ix++) {
        newData[ix] = {...newData[ix + 1], [sortId]: ix, isChange: 1};
      }
    }
    newData[newIndex] = {
      ...temp,
      [sortId]: newIndex,
      isChange: 1,
    };

    if (onChange) onChange(newData);
    else {
      setItems(newData);
    }
  };

  useEffect(() => {
    const sortedItem = sortBy(data, sortId).map((item, i) => ({
      ...item,
      order: i,
      [sortId]: i,
    }));
    setItems(sortedItem);
  }, [data, sortId]);
  return (
    <SortableList
      items={items}
      className={className + ' ' + axis === 'x' ? styles.x : styles.y}
      labelId={labelId}
      imageId={imageId}
      keyId={keyId}
      customRender={customRender}
      onSortEnd={onSortEnd}
      axis={axis}
      distance={1}
      onEdit={onEdit}
    />
  );
}
