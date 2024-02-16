import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqz4Se_kao6Xkr4sGFhGXALpFr8_LA65Q",
    authDomain: "election-platform-764aa.firebaseapp.com",
    databaseURL: "https://election-platform-764aa-default-rtdb.firebaseio.com",
    projectId: "election-platform-764aa",
    storageBucket: "election-platform-764aa.appspot.com",
    messagingSenderId: "799491962365",
    appId: "1:799491962365:web:36a5ee9213b2f6ab821594"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
const db = getFirestore(app);

export {app, auth, db}