
export function concatArray(data, list, keyId = 'id', selected) {
  const newData = data ? [...data] : [];
  list.forEach(item => {
    const index = newData.findIndex(x => x[keyId] === item[keyId]);
    if (index < 0)
      newData.push({...item, selected});
    else newData[index] = item;
  });

  return newData;
}
