import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import React from 'react';

function renderValue(value) {
  if (!value) return <p className="line-clamp-1">{value}</p>;

  if (isArray(value))
    return (
      <div>
        {value.map((item, index) => (
          <JsonViewer key={index} data={item} />
        ))}
      </div>
    );
  if (isObject(value))
    return (
      <div>
        <JsonViewer data={value} />
      </div>
    );
  return <p className="line-clamp-1" title={value + ''}>{value}</p>;
}
export function JsonViewer({data, nullText}) {
  if (!data) return <p>{nullText}</p>;
  const rendData = [];
  Object.keys(data).forEach((item) =>
    rendData.push({id: item, value: data[item]})
  );
  return rendData.map((item) => (
    <div key={item.id} className={'grid grid-cols-2 gap-2 text-xs border-b border-dashed border-opacity-20 m-1'}>
      <p className={'w-full line-clamp-1 italic'}>{item.id}</p>
      {renderValue(item.value)}
    </div>
  ));
}
