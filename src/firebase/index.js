import firebase from "firebase";
import "firebase/firestore";
import {signInWithPopup, GoogleAuthProvider, getAuth} from 'firebase/auth';

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')

// export utils/refs
export {
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
  db,
  auth,
  usersCollection,
  postsCollection
}
