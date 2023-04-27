export function parseObjToArray(obj, keyId = 'value', labelId = 'label') {
  if (!obj) return [];
  return Object.keys(obj).map(key => ({
    [keyId]: key,
    [labelId]: obj[key]
  }));

}
