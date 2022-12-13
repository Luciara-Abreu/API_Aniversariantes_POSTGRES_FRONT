//import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCXDY3YsF2qWBuo2tQ1-vYZz6kTrv0BVMw",
  authDomain: "agenda-aniversariantes-51185.firebaseapp.com",
  databaseURL:"https://agenda-aniversariantes-51185-default-rtdb.firebaseio.com",
  projectId: "agenda-aniversariantes-51185",
  storageBucket: "agenda-aniversariantes-51185.appspot.com",
  messagingSenderId: "952173678197",
  appId: "1:952173678197:web:41da4c1c9a395348a8f23c",
  measurementId: "G-WQVTZC01HL",
}


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

/**
 * 
 * const firebaseConfig = initializeApp({  
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL, 
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
});

 */