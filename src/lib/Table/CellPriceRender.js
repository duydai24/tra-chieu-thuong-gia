import {TextPrice} from 'lib/TextPrice';

export function CellPriceRender({value}) {
  return <TextPrice value={value} />;
}
export function CellDistanceRender({value}) {
  return <TextPrice decimalScale={0} value={value / 1000} suffix=" km" />;
}
