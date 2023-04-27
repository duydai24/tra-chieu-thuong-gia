export function parseArrayToObj(data, keyId = 'value', labelId = 'label') {

  if (!data || !data.length) return {};
  const obj = {};
  data.forEach(item => {
    Object.assign(obj, {[keyId]: item[labelId]});
  });
  return obj;
}
