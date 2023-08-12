
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjdAObLSJjxGqYiNZcBY4r-ODd1qeKtSg",
  authDomain: "e-clone-2e8a0.firebaseapp.com",
  projectId: "e-clone-2e8a0",
  storageBucket: "e-clone-2e8a0.appspot.com",
  messagingSenderId: "131729607859",
  appId: "1:131729607859:web:f654ddd970ae462a4e34c6",
  measurementId: "G-VWBPYR13W6"
};


const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };

