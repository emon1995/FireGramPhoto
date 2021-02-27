import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAhbWPm4fIm6_9MNTjqM4NKftlY--Kl3rc",
    authDomain: "gallery-photo-228cc.firebaseapp.com",
    projectId: "gallery-photo-228cc",
    storageBucket: "gallery-photo-228cc.appspot.com",
    messagingSenderId: "767485282096",
    appId: "1:767485282096:web:80e00dcaf9d7b1cba46af5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFireStore, timestamp };


