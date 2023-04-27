import CheckEditor from 'lib/Check/CheckEditor';
import React from 'react';
import {getDateFull} from 'utils/isDate';

export function Device({item, selected, onSelected}) {
  if (!item) return null;
  const {systemName, deviceId, systemVersion, isActive, lastModify} = item;
  return (
    <div
      key={item.id}
      className={'flex-1 relative text-gray-300 grid items-center  device gap-2' +
        (isActive ? ' text-green-700' : '') +
        (deviceId === 'web' ? ' italic ' : '') +
        (item?.delete ? ' text-red-900 italic' : '')
      }
    >
      <CheckEditor value={selected} name={item.id} onChange={onSelected} />
      <p>
        {deviceId} {systemName} {systemVersion}
      </p>
      <p>{getDateFull(lastModify)}</p>
      <p> {item.delete ? `Đã xóa vào lúc ${getDateFull(item.delete)}` : ''}</p>
    </div>
  );
}
