import {layoutReducer} from 'modules/layout/reducers';
import {tokenReducer} from 'modules/notification/reducer';
import {loginReducer, userReducer} from 'modules/user/reducers';
import {useMemo} from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import FirebaseWebHandler from './notification/FirebaseWebHandler';

const rootReducer = combineReducers({
  authUser: userReducer,
  layout: layoutReducer,
  token: tokenReducer,
  login: loginReducer,
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function configureStore(preloadedState) {
  return createStore(
    rootReducer, // root reducer with router state
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
let store;
let fb;

export const initializeStore = (preloadedState) => {
  let _store = store ?? configureStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = configureStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }
  if (!fb) fb = new FirebaseWebHandler(_store);

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};
export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
