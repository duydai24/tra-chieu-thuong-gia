import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import ToastRoot from 'lib/ToastRoot';

import {processLogin} from './actions';

export const loginWithGoogle = () => async (dispatch) => {
  dispatch(processLogin(true));
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    ToastRoot.showError(e);
  }
  dispatch(processLogin(false));
};
