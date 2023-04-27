export function includesArrayByValue(data, value) {
  if (!data || !data.length) return false;
  return data.findIndex(x => x === value) > -1;

}
