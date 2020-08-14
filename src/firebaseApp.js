import firebase from 'firebase';
//App's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_ajyBDSyEtitvQja9RjazFvXvg9dIMZI",
    authDomain: "makeapin-8e06f.firebaseapp.com",
    databaseURL: "https://makeapin-8e06f.firebaseio.com",
    projectId: "makeapin-8e06f",
    storageBucket: "makeapin-8e06f.appspot.com",
    messagingSenderId: "295154334827",
    appId: "1:295154334827:web:a656af508beaec8ae0052e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export default firebase;