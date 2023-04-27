import {gateHost} from 'config/apiAddress';

//import {getAuth, getIdToken} from 'firebase/auth';
import {processAPI} from './processAPI';

export const gateAPI = (url, postData) => {
  //const auth = getAuth();

  //if (auth?.currentUser) {

  //  return getIdToken(auth.currentUser).then(token => {
  //    return processAPI(`${gateHost}/${url}`, postData, token);
  //  });
  //}
  //else {
  return processAPI(`${gateHost}/${url}`, postData);
  //}
};

