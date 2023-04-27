import {DateView} from 'lib/Date/DateView';

export function CellDateRender({value}) {
  return <DateView mode={1} value={value} className="-col" />;
}
export function CellDateOnlyRender({value}) {
  return <DateView mode={0} value={value} className={'-col'} />;
}
