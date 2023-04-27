import {gateAPI} from 'core/gateAPI';
import {_layLoad} from 'modules/layout/actions';
import {_tokenClear} from 'modules/notification/actions';
import {batch} from 'react-redux';

import {
  _authClear,
  _authSet,
  _loginClear,
} from './actions';

export const _authFull = (data) => (dispatch) => {
  const {...authData} = data;
  batch(() => {
    dispatch(_authSet(authData));
    dispatch(_loginClear());
  });
};
export const reloadAuth = (id) => async (dispatch) => {
  dispatch(_layLoad(true));
  const newData = await gateAPI('auth/ownerget', {id});
  if (newData) {
    dispatch(_authFull(newData));
  }
  dispatch(_layLoad(false));
};

export const _authLogout = () => dispatch => {
  dispatch(_authClear());
  dispatch(_tokenClear());
};
export const updateProfile = (id, displayName, photoURL) => async dispatch => {
  dispatch(_layLoad(true));
  const serverData = await gateAPI('auth/updateProfile', {id, displayName, photoURL});
  if (serverData) {
    dispatch(reloadAuth(id));
  }
  else dispatch(_layLoad(false));
};