import { initializeApp, getApps } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwpS7NglkHhKJNsui9oLPX8iY5myjacFo",
    authDomain: "hackathon-2a5e1.firebaseapp.com",
    projectId: "hackathon-2a5e1",
    storageBucket: "hackathon-2a5e1.appspot.com",
    messagingSenderId: "988543414185",
    appId: "1:988543414185:web:627539c1c8f599ffbf5eb8"
  };

console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;