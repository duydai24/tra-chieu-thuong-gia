import {AUTH, AUTH_CLEAR, LOGIN_CLEAR, PROCESS, TOGGLE_LOGIN} from './consts';

const initialState = {
  hasMore: true
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        ...action.payload
      };
    case AUTH_CLEAR:
      return initialState;

    default:
      return state;
  }
};

const initialLoginState = {
  phoneNumber: '',
  code: '',
  processing: false,
  isBrand: false,
  confirmResult: null
};

export function loginReducer(state = initialLoginState, action) {
  switch (action.type) {

    case PROCESS:
      return {
        ...state,
        processing: action.payload
      };

    case TOGGLE_LOGIN:
      return {
        ...state,
        showLogin: action.payload
      };
    case LOGIN_CLEAR:
      return initialLoginState;
    default:
      return state;
  }
}
