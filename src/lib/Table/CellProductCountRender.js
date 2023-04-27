import {TextPrice} from 'lib/TextPrice';

export function CellCountLengthRender({value}) {
  return <TextPrice value={value && value.length} suffix='' />;
}
