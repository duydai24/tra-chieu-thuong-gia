export function parseArrayToObjKeyValue(data, keyId = 'id') {
  if (!data || !data.length) return {};
  const obj = {};
  data.forEach(item => {
    Object.assign(obj, {[keyId]: item});
  });
  return obj;
}
