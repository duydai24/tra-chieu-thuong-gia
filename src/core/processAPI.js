import API from 'axios';

import {createAuthHeader} from './createAuthHeader';
import {trackerError} from './trackerError';

export function processAPI(url, postData, token) {

  return API.post(url, postData ? postData : {}, {
    headers: createAuthHeader(token)
  })
    .then(res => {
      const {id, data} = res.data;
      if (id === 0) {
        return Promise.resolve(data);
      }
      else {
        return Promise.resolve(null);
      }
    })
    .catch(e => {
      trackerError(url, e);
      return Promise.resolve(null);
    });
}
