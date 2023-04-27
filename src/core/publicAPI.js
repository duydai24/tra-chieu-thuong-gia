import {gateHost} from 'config/apiAddress';

import {processAPI} from './processAPI';

export const publicAPI = (url, postData) => {
  return processAPI(`${gateHost}/${url}`, postData);

};

