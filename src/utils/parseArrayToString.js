import {parseArrayToObj} from './parseArrayToObj';

export function parseArrayToString(data, keyId = 'value', labelId = 'label') {
  return JSON.stringify(parseArrayToObj(data, keyId, labelId));
}
