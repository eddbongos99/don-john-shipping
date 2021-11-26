import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDKFoBfnycKfHtDPlLXPIPvXamF6EYFmUM",
  authDomain: "don-john-shipping.firebaseapp.com",
  projectId: "don-john-shipping",
  storageBucket: "don-john-shipping.appspot.com",
  messagingSenderId: "940961436950",
  appId: "1:940961436950:web:2a7fd4d10142270af2ec37",
  measurementId: "G-EC7T1VQN0B"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
