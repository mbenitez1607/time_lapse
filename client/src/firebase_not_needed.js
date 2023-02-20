/**
 * src/firebase.js
 */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQCrjWkR9PolBRPBNpqUFP1rIZ0sHVO4g",
    authDomain: "timelapse-934bd.firebaseapp.com",
    projectId: "timelapse-934bd",
    storageBucket: "timelapse-934bd.appspot.com",
    messagingSenderId: "774735906538",
    appId: "1:774735906538:web:dc6ccfee63be14fd2bf993",
    measurementId: "G-6V8SDTJRY0"
  };
  
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
