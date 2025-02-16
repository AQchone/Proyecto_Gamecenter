// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOeepj1Cm1u-FHElvtCocHmkFDqYNCtY8",
  authDomain: "proj-coder-adc.firebaseapp.com",
  projectId: "proj-coder-adc",
  storageBucket: "proj-coder-adc.appspot.com",
  messagingSenderId: "324299204269",
  appId: "1:324299204269:web:a10ab14e51110bfd7d4824"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()