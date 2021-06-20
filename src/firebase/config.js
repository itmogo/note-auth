import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCrQ9M2XorC-N7z_e0Tr_FvNxWrvv579ms",
    authDomain: "notes-app-90d2d.firebaseapp.com",
    projectId: "notes-app-90d2d",
    storageBucket: "notes-app-90d2d.appspot.com",
    messagingSenderId: "283194119567",
    appId: "1:283194119567:web:ce0ebe7f81fb4fe0d5a7fa",
    measurementId: "G-QV49ZNL2HN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapShots: true});

  export default firebase;
