import {LOADING, REFRESH, SEARCH_CHANGE, TOGGLE_MENU_USER} from './consts';

export const _layToggleMenuUser = () => ({type: TOGGLE_MENU_USER});
export const _laySearchChange = (payload) => ({type: SEARCH_CHANGE, payload});
export const _layResfresh = () => ({type: REFRESH});
export const _layLoad = (payload) => ({type: LOADING, payload});