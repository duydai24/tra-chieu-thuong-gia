
import {LOADING, REFRESH, SEARCH_CHANGE, TOGGLE_MENU_USER} from './consts';

const initialState = {
  search: '',
  loading: null,
  refresh: null
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_MENU_USER:
      return {
        ...state,
        userMenu: !state.userMenu
      };
    case SEARCH_CHANGE:
      return {
        ...state,
        search: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case REFRESH:
      return {
        ...state,
        refresh: new Date()
      };

    default:
      return state;
  }
};
