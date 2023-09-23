import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD4byhRnlLXAnYzkuXNOjkH8d8_XUb2RKw',
  authDomain: 'flix-62482.firebaseapp.com',
  projectId: 'flix-62482',
  storageBucket: 'flix-62482.appspot.com',
  messagingSenderId: '628386617055',
  appId: '1:628386617055:web:7dc1b60b9899ae56ff7b6a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
