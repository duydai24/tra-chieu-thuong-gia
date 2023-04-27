import API from 'axios';
import isString from 'lodash/isString';

export function trackerError(label, value) {
  // eslint-disable-next-line
  //console.log(label, value);
  // eslint-disable-next-line
  //return console.log(rest);
  const _val = value ? (!isString(value) ? JSON.stringify(value) : value + '') : '';
  API.post('https://api..com/log/lognew', {
    app: 'web/',
    label,
    value: _val.length < 400 ? _val : _val.substr(0, 400)
  }).catch(() => { });
}
