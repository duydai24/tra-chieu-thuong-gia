import {copyToClipboard} from 'utils/clipboard';

export function TextCopy({value, label}) {
  return <p className="-col line-clamp-1 cursor-help"
    title={'Click vào để copy vào Clipboard'}
    onClick={() => copyToClipboard(value || '')}>
    <span>{label}</span>
    <span>{value}</span>
  </p>;

}
