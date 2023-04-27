import {authDirectSelector} from 'modules/user/selectors';
import {createSelector} from 'reselect';

export const layoutSelector = state => state.layout;

export const topMenuSelector = () => createSelector(
  [layoutSelector, authDirectSelector],
  ({search, userMenu}, {id: userId, displayName, fName, photoURL}) => {
    return {
      search,
      userMenu,
      userId, displayName, photoURL,
      fName
    };
  }
);