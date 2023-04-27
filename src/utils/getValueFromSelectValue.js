
export function getValueFromSelectValue(value) {
  if (!value)
    return null;
  if (value.value || value.value === 0 || value.value === '0')
    return value.value;
  return value;
}
