// import * as firebase from 'firebase/compat/app'
// import { firebase } from '@firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ_XU4R9GiUpVdSXorUTZwPn3O4C6vpMQ",
    authDomain: "renzo-cologram.firebaseapp.com",
    projectId: "renzo-cologram",
    storageBucket: "renzo-cologram.appspot.com",
    messagingSenderId: "578017803014",
    appId: "1:578017803014:web:7197194dea98759708fc87"
  };

  // Here we initialize Firebase
  // const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };