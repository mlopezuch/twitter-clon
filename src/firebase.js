import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0TPMBbVKiXsYHhH9_tszJjc2GPEXfoD8",
    authDomain: "twitter-f2ee8.firebaseapp.com",
    databaseURL: "https://twitter-f2ee8.firebaseio.com",
    projectId: "twitter-f2ee8",
    storageBucket: "twitter-f2ee8.appspot.com",
    messagingSenderId: "735225568186",
    appId: "1:735225568186:web:a9bedf8bc06bc81481db83"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  export default db;