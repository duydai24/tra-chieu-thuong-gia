//importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
//importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
//var firebaseConfig = {
//  apiKey: 'AIzaSyBM9S9hz4McOrejT_A2dNQTeBu8ErY6PcU',
//  authDomain: 'doluongcentralpark-vn.firebaseapp.com',
//  projectId: 'doluongcentralpark-vn',
//  storageBucket: 'doluongcentralpark-vn.appspot.com',
//  messagingSenderId: '81560228348',
//  appId: '1:81560228348:web:a8fffbb5b6fee0a1a16279',
//  measurementId: 'G-DTNQDNL39J'
//};
//firebase.initializeApp(firebaseConfig);

//const isSupported = firebase.messaging.isSupported();
//if (isSupported) {
//  const messaging = firebase.messaging();
//  messaging.onBackgroundMessage(({notification, ...other}) => {
//    if (notification) {
//      const {title, body, image} = notification;
//      self.registration.showNotification(title, {body, icon: image || '/mstile-150x150.png'});

//    }
//    else {
//      console.log(other);
//    }
//  });
//}
