import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSOI2fyHbYo3LiKKaRl5F8rSd9DaStc9o",
  authDomain: "munivation-8529f.firebaseapp.com",
  projectId: "munivation-8529f",
  storageBucket: "munivation-8529f.appspot.com",
  messagingSenderId: "863121854445",
  appId: "1:863121854445:web:7f6477b942a7965de161e4",
  measurementId: "G-Z8MM5TKK2C",
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }
