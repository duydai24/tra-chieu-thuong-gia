export const getDate = (value, notAllowNull) => {
  if (!value) {
    if (!notAllowNull) {
      return new Date();
    }
    return null;
  }
  const isZ = (value + '').includes('Z');

  let dateV = new Date(!isZ ? value + 'Z' : value);
  return dateV;
};
export const getDateFull = (value) => {
  const date = getDate(value);
  if (!date) return '';
  return date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getFullYear().toString().padStart(2, '0') + ' ' + date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0');
};
export const getDateSort = (value) => {
  const date = getDate(value);
  if (!date) return '';
  return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ' ' + date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0');
};
export const getDateOnly = (value) => {
  const date = getDate(value);
  if (!date) return '';
  return date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0');
};
export const getDayOnly = (value) => {
  const date = getDate(value);
  if (!date) return '';
  return date.getDate().toString().padStart(2, '0');
};
export const getMonthOnly = (value) => {
  const date = getDate(value);
  if (!date) return '';
  return (date.getMonth() + 1).toString().padStart(2, '0');
};
export const getDay = (value) => {
  const date = getDate(value);
  if (!date) return '';
  return date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getFullYear().toString().padStart(2, '0');
};
export function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}