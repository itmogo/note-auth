import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDNq6saM4bSiBlThgkF3oLTPOS68G74YE4",
    authDomain: "note-firestore-66533.firebaseapp.com",
    projectId: "note-firestore-66533",
    storageBucket: "note-firestore-66533.appspot.com",
    messagingSenderId: "298984764358",
    appId: "1:298984764358:web:46324cd6714f897d98b8c7",
    measurementId: "G-KT6XYYE8ZG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.firestore().settings({timestampsInSnapShots: true});

  export default firebase;
