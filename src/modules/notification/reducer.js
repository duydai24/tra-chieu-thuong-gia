import {CLEAR, LIST, LOAD, TOKEN} from './consts';

const initialState = {
  loading: null,
  deviceId: 'web',
  token: null,
  isActive: false,
  data: []
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: action.payload
      };
    case TOKEN:
      return {
        ...state,
        ...action.payload
      };
    case LIST:
      return {
        ...state,
        data: action.payload
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
