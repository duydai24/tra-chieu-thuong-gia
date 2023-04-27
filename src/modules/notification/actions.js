import {ACTIVE, CLEAR, LIST, LOAD, TOKEN} from './consts';

export const _tokenClear = () => ({
  type: CLEAR,
});
export const _token = (payload) => ({
  type: TOKEN,
  payload
});
export const _tokenActive = (payload) => ({
  type: ACTIVE,
  payload
});
export const _tokensLoading = payload => {
  return {
    type: LOAD,
    payload
  };
};
export const _tokenData = payload => {
  return {
    type: LIST,
    payload
  };
};