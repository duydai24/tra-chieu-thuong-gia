import CheckEditor from 'lib/Check/CheckEditor';

export function CellCheckRender({value}) {
  return <CheckEditor value={value} className="-col" />;
}
