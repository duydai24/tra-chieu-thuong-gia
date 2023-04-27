import API from 'axios';
import {imageHost} from 'config/apiAddress';
import ToastRoot from 'lib/ToastRoot';

import {createAuthHeader} from './createAuthHeader';
import {trackerError} from './trackerError';

export function processCDN(url, postData, token) {
  return API.post(imageHost + '/' + url, postData ? {...postData} : {}, {
    headers: createAuthHeader(token)
  })
    .then(res => {
      const {id, data} = res.data;
      if (id === 0) {
        if (data?.ex) {
          ToastRoot.showError(data.ex);
        }
        return Promise.resolve(data);
      }
      else {
        trackerError(url, postData);
        return Promise.resolve(null);
      }
    })
    .catch(err => {
      if (!API.isCancel(err)) {
        trackerError(url, {err, postData});
      }
      else {
        trackerError('cancel ', url);
      }
      return Promise.resolve(null);
    });
}
