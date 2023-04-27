import _get from 'lodash/get';

function xoa_dau(str) {
  if (!str) return '';
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/[^0-9a-z-]/gi, '');
}
function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}
export const stringHelper = {
  xoa_dau,
  capitalize,
};
export const filterStringOp = (x, filter) => {
  const labelXoaDau = stringHelper.xoa_dau(x);
  const res = labelXoaDau.indexOf(filter) > -1;
  return res;
};

export const filterString = (x, filter) => {
  const labelXoaDau = stringHelper.xoa_dau(x);
  const keywordXoaDau = stringHelper.xoa_dau(filter);
  const res = labelXoaDau.indexOf(keywordXoaDau) > -1;
  return res;
};

export const filterStringArray = (data, filter, keys = ['label']) => {
  if (!data) return [];
  if (!filter) return data;
  const res = data.filter(item => keys.filter(k => filterString(_get(item, k), filter)).length > 0);
  return res;
};

