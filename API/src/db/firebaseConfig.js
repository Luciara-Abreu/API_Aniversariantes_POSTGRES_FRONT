//import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import "firebase/database";


var firebaseConfig = initializeApp({
  apiKey: "AIzaSyCXDY3YsF2qWBuo2tQ1-vYZz6kTrv0BVMw",
  authDomain: "agenda-aniversariantes-51185.firebaseapp.com",
  databaseURL: "https://agenda-aniversariantes-51185-default-rtdb.firebaseio.com",
  projectId: "agenda-aniversariantes-51185",
  storageBucket: "agenda-aniversariantes-51185.appspot.com",
  messagingSenderId: "952173678197",
  appId: "1:952173678197:web:41da4c1c9a395348a8f23c",
  measurementId: "G-WQVTZC01HL",
})


export default firebaseConfig;
