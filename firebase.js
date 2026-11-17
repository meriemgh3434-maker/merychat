// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvZbYGgj3W3R4CALcp8QmDcPFS9akY4QM",
  authDomain: "merychat-52ce9.firebaseapp.com",
  projectId: "merychat-52ce9",
  storageBucket: "merychat-52ce9.firebasestorage.app",
  messagingSenderId: "688433844323",
  appId: "1:688433844323:web:81d4bb63b071fed0bbe856",
  measurementId: "G-T8LGKLZ3EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
