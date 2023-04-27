import {FCM} from 'config/firebase';
import {gateAPI} from 'core/gateAPI';
import {trackerError} from 'core/trackerError';
import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getMessaging, getToken, onMessage} from 'firebase/messaging';
import ToastRoot from 'lib/ToastRoot';
import {_token} from 'modules/notification/actions';
import {_authFull, _authLogout, reloadAuth} from 'modules/user/creators';

function processNotification(payload, store) {
  const {
    data: {m, b, mv,
      // eslint-disable-next-line
      ...otherData},
  } = payload;
  if (m === '0') {
    ToastRoot.show(b || '');
  } else {
    if (b) {
      ToastRoot.show(b || '');
    }

    if (m === '1') {
      store?.dispatch(reloadAuth());
      //Đơn hàng
    } else if (m === '99') {
      store?.dispatch(reloadAuth(mv));
    }

  }
}
class FirebaseWebHandler {
  constructor(store) {
    this.store = store;
    this.init();
  }
  app = null;
  dispatch = (action) => {
    if (this.store && this.store.dispatch) {
      this.store.dispatch(action);
    } else {
      trackerError('STORE NULL');
    }
  };
  onGetNotificationToken = async (token) => {
    const {
      authUser: {id: ownerId},
    } = this.store?.getState();
    if (ownerId) {
      const postData = {
        deviceId: 'web',
        id: token,
        ownerId, //this.auth.currentUser.uid
      };

      const isActive = await gateAPI('device/token', postData);
      const authUserWithDeviceActive = {
        deviceActive: !!isActive,
        token,
        deviceId: 'web',
      };
      this.dispatch(_token(authUserWithDeviceActive));
    }
  };

  init = () => {
    try {

      const app = initializeApp(FCM.config);

      if (typeof window !== 'undefined') {
        const auth = getAuth();

        onAuthStateChanged(auth, this.onAuthStateChanged);
        try {
          this.messaging = getMessaging(app);
        } catch (err) {
          trackerError('token', err);
        }
      }
    } catch (err) {
      trackerError('Unable to retrieve refreshed token ', err);
    }
  };

  onAuthStateChanged = (authUser) => {
    if (authUser) {
      this.onSnapshotUser(authUser);
    } else {
      this.dispatch(_authLogout());
    }
  };

  onSnapshotUser = async (authUser) => {
    const {
      uid: id,
      ma: token,
      email,
      photoURL,
      emailVerified,
      providerData,
      displayName,
    } = authUser;
    const postData = {
      id,
      token,
      email,
      emailVerified,
      providerData,
      displayName,
      photoURL,
    };
    const data = await gateAPI('auth/owner', postData);
    if (data) {
      this.dispatch(_authFull(data));

      if (this.messaging) {
        try {
          const perm = await Notification.requestPermission();
          if (perm === 'granted') {
            const refreshedToken = await getToken(this.messaging, {
              vapidKey: FCM.vapidKey
            });
            this.onGetNotificationToken(refreshedToken);
            onMessage((pay) =>
              processNotification(pay, this.store)
            );
          }
        } catch (e) {
          // eslint-disable-next-line
          console.log(e);
        }
      }
    } else {
      this.dispatch(_authLogout());
    }
  };
}

export default FirebaseWebHandler;
