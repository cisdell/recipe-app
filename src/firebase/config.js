import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD1eVmJGkf5J_aYQl2IYNlFrMZS3vPmBZw",
  authDomain: "first-firebase-project-d9294.firebaseapp.com",
  projectId: "first-firebase-project-d9294",
  storageBucket: "first-firebase-project-d9294.appspot.com",
  messagingSenderId: "184846967920",
  appId: "1:184846967920:web:9553429c0051bcb25480b5"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export {projectFirestore }