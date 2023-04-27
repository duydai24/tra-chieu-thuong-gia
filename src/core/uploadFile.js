import API from 'axios';
import {imageHost} from 'config/apiAddress';
import {getAuth, getIdToken} from 'firebase/auth';

import {createUploadHeader} from './CreateUploadHeader';

export function uploadFile(file) {
  const auth = getAuth();

  if (auth?.currentUser)
    return getIdToken(auth.currentUser).then(
      token => {
        const formData = new FormData();
        formData.append('body', file);
        return API.post(`${imageHost}/upload/file`, formData, {
          headers: createUploadHeader(token),
        }).then(
          res => {
            const {success, data} = res.data;
            if (!success) {
              return Promise.resolve({message: 'Lỗi đăng ảnh'});
            }
            const {files} = data;
            return Promise.resolve(files);
          });
      });
  else
    return Promise.resolve({message: 'Tài khoản không đủ quyền truy cập'});
}
