/*
  firebase/index.js
*/
import firebase from 'firebase-admin';

import credentials from './auth.js';

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://<yourproject>.firebaseio.com",
});

export default firebase;
