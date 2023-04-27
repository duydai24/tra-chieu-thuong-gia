import {imageHost} from 'config/apiAddress';

export function getRealImageUrl(url, defaultImage) {
  const result = !url
    ? !defaultImage
      ? null
      : defaultImage
    : (url + '').indexOf('data:') > -1
      ? url
      : (url + '').indexOf('https:') > -1
        ? url
        : (url + '').indexOf('/') === 0
          ? `${imageHost}${url}`
          : `${imageHost}/${url}`;
  return result;
}

export function getImageNewIfExists(item) {
  return item.imageN?.path?.length > 0 ? item.imageN.path + '.webp' : item.image;
}