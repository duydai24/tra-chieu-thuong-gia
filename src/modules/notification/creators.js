import {gateAPI} from 'core/gateAPI';
import {getRealImageUrl} from 'core/getRealImageUrl';
import {postImage64} from 'core/postImage64';
import ToastRoot from 'lib/ToastRoot';
import {batch} from 'react-redux';
import {isBase64Image} from 'utils/isBase64Image';

import {_tokenActive, _tokenData, _tokensLoading} from './actions';

export const activeDevice = (userId, id, deviceId) => async (dispatch) => {
  await gateAPI('device/active', {userId, id, deviceId});
  dispatch(_tokenActive(true));
};

export const deActiveDevice = (userId, id, deviceId) => async (dispatch) => {
  await gateAPI('device/tied', {userId, id, deviceId});
  dispatch(_tokenActive(false));
};

export const sendAll = (noti) => async dispatch => {
  dispatch(_tokensLoading(true));
  let image = noti.image;
  if (isBase64Image(noti.image)) {
    image = await postImage64({data: noti.image});
    if (image.message) {
      ToastRoot.showError(image.message);
      dispatch(_tokensLoading(false));
      return;
    }
    noti.image = getRealImageUrl(image);
  }
  await gateAPI('device/palls', noti);
  dispatch(_tokensLoading(false));
};
export const sendOne = (noti) => async dispatch => {
  dispatch(_tokensLoading(true));
  let image = noti.image;
  if (isBase64Image(noti.image)) {
    image = await postImage64({data: noti.image});
    if (image.message) {
      ToastRoot.showError(image.message);
      dispatch(_tokensLoading(false));
      return;
    }
    noti.image = getRealImageUrl(image);
  }
  await gateAPI('device/sendOne', noti);
  dispatch(_tokensLoading(false));
};
export const sendListId = (ids, noti) => async dispatch => {
  dispatch(_tokensLoading(true));
  let image = noti.image;
  if (isBase64Image(noti.image)) {
    image = await postImage64({data: noti.image});
    if (image.message) {
      ToastRoot.showError(image.message);
      dispatch(_tokensLoading(false));
      return;
    }
    noti.image = getRealImageUrl(image);
  }
  await gateAPI('device/sendIds', {...noti, users: ids});
  dispatch(_tokensLoading(false));
};
export const sendById = (noti) => async dispatch => {
  dispatch(_tokensLoading(true));
  let image = noti.image;
  if (isBase64Image(noti.image)) {
    image = await postImage64({data: noti.image});
    if (image.message) {
      ToastRoot.showError(image.message);
      dispatch(_tokensLoading(false));
      return;
    }
    noti.image = getRealImageUrl(image);
  }
  await gateAPI('device/sendSingle', noti);
  dispatch(_tokensLoading(false));
};
export const loadTokenData = () => async dispatch => {
  dispatch(_tokensLoading(true));
  const data = await gateAPI('device/ownerlist');
  batch(() => {

    dispatch(_tokenData(data));
    dispatch(_tokensLoading(false));
  });
};