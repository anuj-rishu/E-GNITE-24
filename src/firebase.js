// firebase.js

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAapoRNH_Kk-m3hNoaCK3JEUofij03Jc1A",
    authDomain: "egnite24-login.firebaseapp.com",
    databaseURL: "https://egnite24-login-default-rtdb.firebaseio.com",
    projectId: "egnite24-login",
    storageBucket: "egnite24-login.appspot.com",
    messagingSenderId: "1046601159584",
    appId: "1:1046601159584:web:9fc363e38c1a1d87878ac5",
    measurementId: "G-8DN04L1KCQ"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
