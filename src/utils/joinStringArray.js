export function joinStringArray(data, keyId = 'label', joinString = ' ') {
  if (!data || !data.length) return '';
  return data.map(x => x[keyId]).join(joinString);

}
