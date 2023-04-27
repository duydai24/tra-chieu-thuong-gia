import React from 'react';

export default function AdminTitle({text = 'PROJECT'}) {
  return (<p className={'text-gray-700 font-semibold'}>{text}</p>);
}
