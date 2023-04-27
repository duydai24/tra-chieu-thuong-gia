import {getDateFull, getDateOnly, getDateSort} from 'utils/isDate';

export const DateView = ({value, className, pre, mode = 0}) => {

  const _getDate = value ? (pre ? pre + ' ' : '') + (mode === 1 ? getDateSort(value) : mode === 2 ? getDateFull(value) : getDateOnly(value)) : '';
  return <span className={'italic ' + className}>{_getDate}</span>;
};