import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAyb9SJJais36uMoqTy2Z_Gjty3-CxI9HM",
    authDomain: "enince-inventario.firebaseapp.com",
    projectId: "enince-inventario",
    storageBucket: "enince-inventario.appspot.com",
    messagingSenderId: "978025956166",
    appId: "1:978025956166:web:4bfa1204f451a557b39b47",
    measurementId: "G-QY515PYJ3M"
  };

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();