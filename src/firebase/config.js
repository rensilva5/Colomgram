import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ_XU4R9GiUpVdSXorUTZwPn3O4C6vpMQ",
    authDomain: "renzo-cologram.firebaseapp.com",
    projectId: "renzo-cologram",
    storageBucket: "renzo-cologram.appspot.com",
    messagingSenderId: "578017803014",
    appId: "1:578017803014:web:7197194dea98759708fc87"
  };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};