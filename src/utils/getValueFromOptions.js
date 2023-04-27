import {isArray} from './isArray';

export function getValueFromOptions(value, options) {
  if (value && value.label) return value;
  if (!isArray(options)) return [];
  if (!value && value !== 0 && value !== '0') return [];

  if (value.value) return getValueFromOptions(value.value, options);
  if (!isArray(value)) {
    // eslint-disable-next-line
    const findIndex = options.findIndex(x => x.value == value);
    if (findIndex > -1) return options[findIndex];
    return options[0];
  }
  return options.filter(x => value.includes(x.value));

}
