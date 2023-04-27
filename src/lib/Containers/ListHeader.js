import get from 'lodash/get';
import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {Waypoint} from 'react-waypoint';
import {FixedSizeList as List} from 'react-window';

export function ListHeader({cols, className}) {
  return (<div className={'-row -h ' + (className || '')}>
    <span className="-col">TT</span>
    {cols.map(col => <p key={col.accessor} className="-col">{col.Header}</p>)}
  </div>);
}

function ListItem({index, style, cols, data, className, loadMore, loading, CustomRender, extraProps, keyId = 'id'}) {
  if (!(data?.length > index)) {
    return <div style={style}>
      Đang nạp dữ liệu
    </div>;
  }
  const item = data[index];
  if (!item) {
    return <div style={style}>
      Đang nạp dữ liệu
    </div>;
  }
  if (CustomRender) {
    return <CustomRender key={index} style={style} data={item} />;
  }
  const toChild = {};
  if (extraProps) {
    extraProps.forEach(k => {
      const keyValue = get(item, k);
      Object.assign(toChild, {[k]: keyValue});
    });
  }
  return <div key={index} style={style} className={'-row ' + (className || '')}>
    <span className="-col">{index + 1}</span>
    {cols.map((col) => (
      <div className="-col" key={col.accessor}>
        {col.Cell ? col.Cell({
          ...toChild,
          value: item[col.accessor],
          keyId: item[keyId]
        }) : item[col.accessor]}
      </div>
    ))}
    {(!!loadMore && !loading && (data?.length <= (index + 1))) &&
      <Waypoint onEnter={() => loadMore()} bottomOffset={'200px'} />
    }
  </div>;

}
export function ListBody({data, total, cols, className, loadMore, loading, keyId, CustomRender, extraProps, itemHeight = 40}) {
  return (<AutoSizer>
    {({
      width, height
    }) => {
      return <List height={height} itemSize={itemHeight} itemCount={total || 0} width={width}>
        {({
          index, style
        }) => ListItem({
          index,
          style,
          cols,
          data,
          className,
          loadMore,
          total,
          loading,
          keyId,
          CustomRender,
          extraProps
        })}
      </List>;
    }
    }
  </AutoSizer>);
}
export default function ListVirtual({className, data, total, cols, loadMore, loading, keyId = 'id', CustomRender, extraProps,
  itemHeight = 40}) {
  return <>

    <ListHeader cols={cols} className={className} />
    <div className={'flex flex-1 flex-col'}>
      <ListBody data={data} total={total} cols={cols} className={className} itemHeight={itemHeight} loadMore={loadMore} loading={loading} keyId={keyId}
        extraProps={extraProps}
        CustomRender={CustomRender} />
    </div></>;
}