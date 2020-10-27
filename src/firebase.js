import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyALtISPxt5Y9NUH1f9ejyyCRTh0u8YUK-Q',
  authDomain: 'shipping-169e3.firebaseapp.com',
  databaseURL: 'https://shipping-169e3.firebaseio.com',
  projectId: 'shipping-169e3',
  storageBucket: 'shipping-169e3.appspot.com',
  messagingSenderId: '1011621550286',
  appId: '1:1011621550286:web:418339737cc5ec845d989f',
  measurementId: 'G-6K838NCTGX',
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
