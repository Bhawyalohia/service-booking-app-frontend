import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBoX8c-ZVti8xfuTkQZpFhEOYLKMD1WOF4",
    authDomain: "eservices-606bf.firebaseapp.com",
    projectId: "eservices-606bf",
    storageBucket: "eservices-606bf.appspot.com",
    messagingSenderId: "751987689351",
    appId: "1:751987689351:web:aef1ebea127dd5e3f5b522",
    measurementId: "G-HSP4WS4LNP"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
//firebase.analytics();
export const auth=firebase.auth();
export const googleAuthProvider=new firebase.auth.GoogleAuthProvider();