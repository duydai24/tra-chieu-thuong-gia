import {copyToClipboard} from 'utils/clipboard';

export function CellTextRender({value}) {
  return <p className="-col line-clamp-1"
    title={value + ''}
    onClick={() => copyToClipboard(value || '')}>{value}</p>;

}
