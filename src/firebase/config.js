import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4J3ultL9q3_PoyeD1AMoz9321-dMgMtc",
  authDomain: "koxnotes.firebaseapp.com",
  projectId: "koxnotes",
  storageBucket: "koxnotes.appspot.com",
  messagingSenderId: "465339919407",
  appId: "1:465339919407:web:a9db6768a33953e3352ada",
  measurementId: "G-22R7643CS3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app)

export { auth };
