import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvZbYGgj3W3R4CALcp8QmDcPFS9akY4QM",
  authDomain: "merychat-52ce9.firebaseapp.com",
  projectId: "merychat-52ce9",
  storageBucket: "merychat-52ce9.firebasestorage.app",
  messagingSenderId: "688433844323",
  appId: "1:688433844323:web:81d4bb63b071fed0bbe856"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
