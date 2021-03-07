import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAP6evvLhpuu5vxAFsWy58MP6iwHixfF8s",
    authDomain: "snapchatclone-9ed8a.firebaseapp.com",
    projectId: "snapchatclone-9ed8a",
    storageBucket: "snapchatclone-9ed8a.appspot.com",
    messagingSenderId: "799988550132",
    appId: "1:799988550132:web:bc20e5a010a32a013811a1"
  }; 


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, auth, storage, provider };