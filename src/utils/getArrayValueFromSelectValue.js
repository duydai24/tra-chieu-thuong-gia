import {getValueFromSelectValue} from './getValueFromSelectValue';
import {isArray} from './isArray';

export function getArrayValueFromSelectValue(value) {
  if (!value || !isArray(value))
    return [];
  return value.map(item => getValueFromSelectValue(item));

}
