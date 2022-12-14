//import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import "firebase/database";
import { collection, getFirestore } from "firebase/firestore";


var firebaseConfig = { 
  apiKey:            process.env.REACT_APP_APIKEY,
  authDomain:        process.env.REACT_APP_AUTHDOMAIN,
  databaseURL:       process.env.REACT_APP_DATABASEURL,
  projectId:         process.env.REACT_APP_PROJECTID,
  storageBucket:     process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId:             process.env.REACT_APP_APPID,
  measurementId:     process.env.REACT_APP_MEASUREMENTID
}
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const db = getFirestore(app)
const usersCollectionRef = collection(db, "users")
export const userRef = usersCollectionRef
