
export function changeArray(data, key, name, value, keyId = 'id') {
  const newData = data ? [...data] : [];
  const findIndex = data.findIndex(x => x[keyId] === key);
  if (findIndex > -1) {
    data[findIndex][name] = value;
    data[findIndex].isChange = true;
  }

  return newData;
}
