import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_edrm2eUb6bE22BcGhkqrQC6AVd1gnDg",
  authDomain: "facebook-clone-a2166.firebaseapp.com",
  databaseURL: "https://facebook-clone-a2166.firebaseio.com",
  projectId: "facebook-clone-a2166",
  storageBucket: "facebook-clone-a2166.appspot.com",
  messagingSenderId: "202544468181",
  appId: "1:202544468181:web:5361ac6f0022dc2a5fd25c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
