import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0adzjb2-ezyZZ3b8_d1c3Eawh_wrMx50",
    authDomain: "challenge-3009d.firebaseapp.com",
    projectId: "challenge-3009d",
    storageBucket: "challenge-3009d.appspot.com",
    messagingSenderId: "46444833135",
    appId: "1:46444833135:web:dac8fbe1a1ca4e2da8609a",
    measurementId: "G-XXR2WP62E1"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth};