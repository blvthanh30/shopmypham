import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiMiw1itx80vYF9dpDepKFRboPHz_o5zg",
  authDomain: "shopmypham-39e11.firebaseapp.com",
  projectId: "shopmypham-39e11",
  storageBucket: "shopmypham-39e11.appspot.com",
  messagingSenderId: "275676802178",
  appId: "1:275676802178:web:4ebb39de9339868392d89b",
  measurementId: "G-FNDPLBTPLB"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
