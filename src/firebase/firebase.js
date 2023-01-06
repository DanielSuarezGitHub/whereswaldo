// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEj7AQY9MfVFTyEF5U4b4CqT8h97aIDM0",
  authDomain: "wheres-waldo-d4461.firebaseapp.com",
  projectId: "wheres-waldo-d4461",
  storageBucket: "wheres-waldo-d4461.appspot.com",
  messagingSenderId: "473387950434",
  appId: "1:473387950434:web:350194a855ddc470240c3b",
  measurementId: "G-NW84S4BTMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }