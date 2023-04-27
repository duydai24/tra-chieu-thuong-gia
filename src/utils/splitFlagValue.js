import isArray from 'lodash/isArray';

export const splitFlagValue = (roles, value) => {
  if (isArray(value))
    return value;
  if (!roles || roles.length < 1)
    return [];
  const results = [];
  for (let i = 0; i < roles.length; i++) {
    const item = roles[i];
    results.push({...item, checked: ((item.value & value) === item.value)});
  }
  return results;
};
