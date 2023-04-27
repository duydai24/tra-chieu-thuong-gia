import {isBase64Image} from './isBase64Image';

export function parseUserProfile(data) {
  let copy = {};
  Object.keys(data).forEach((k) => {
    if (k === 'photoURL') {
      if (isBase64Image(data[k])) {
        copy = {
          ...copy,
          photoData: data[k]
        };
      } else {
        copy = {
          ...copy,
          [k]: data[k]
        };
      }
    } else {
      copy = {
        ...copy,
        [k]: data[k]
      };
    }
  });

  return copy;
}
