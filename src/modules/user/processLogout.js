import {gateAPI} from 'core/gateAPI';
import {signOut} from 'firebase/auth';
import {_tokenClear} from 'modules/notification/actions';
import Router from 'next/router';
import {batch} from 'react-redux';
import {ROUTES} from 'routers/routes';

import {_authClear} from './actions';

export const processLogout = (id) => async (dispatch) => {
  await gateAPI('auth/logout', {id});
  batch(() => {
    dispatch(_authClear({}));
    dispatch(_tokenClear());
  });
  signOut()
    .then(() => Router.push(ROUTES.Landing));
};
