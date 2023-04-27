import API from 'axios';
import {imageHost} from 'config/apiAddress';
import {getAuth, getIdToken} from 'firebase/auth';

import {createAuthHeader} from './createAuthHeader';

export function postImage64(imageData) {
  const auth = getAuth();

  if (auth?.currentUser) {
    return getIdToken(auth.currentUser).then(token => {
      const {path, oldPath, data} = imageData;
      let oldPathValue = oldPath;
      if (oldPath) {
        const strOldPath = oldPath + '';
        const findIndex = strOldPath.indexOf(imageHost);
        if (findIndex === 0 && strOldPath.length > imageHost.length) {
          oldPathValue = strOldPath.substr(
            imageHost.length + 1,
            strOldPath.length - imageHost.length - 1
          );
        }
      }
      return API.post(`${imageHost}/upload/base64`, {
        path,
        oldPath: oldPathValue,
        data,
      }, {
        headers: createAuthHeader(token)
      }).then(res => {
        const {id, data} = res.data;
        if (id === 0) {
          return Promise.resolve(data);
        } else {
          return Promise.resolve({message: 'Lỗi đăng ảnh'});
        }
      });
    });

  }
  return Promise.resolve({message: 'Chưa đăng nhập'});
}
