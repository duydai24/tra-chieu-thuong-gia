import {parseObjToArray} from './parseObjToArray';
import {parseStringToObject} from './parseStringToObject';

export function parseStringToArray(str, keyId = 'value', labelId = 'label') {
  return parseObjToArray(parseStringToObject(str), keyId, labelId);
}
