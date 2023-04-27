export function getLabelWithValue(options, value, keyId = 'value', label = 'label') {
  if (!options)
    return '';
  if (value === 0 || value === '0')
    return options[0][label];
  if (!value)
    return '';
  const findIndex = options.findIndex(x => x[keyId] === value);
  if (findIndex > -1)
    return options[findIndex][label];
  return null;
}
