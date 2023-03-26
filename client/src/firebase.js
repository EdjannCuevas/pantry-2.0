// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfPKhdKcagA7RqtNy3ZlyEsyQKtoSZvaY",
  authDomain: "pantry2-e7578.firebaseapp.com",
  projectId: "pantry2-e7578",
  storageBucket: "pantry2-e7578.appspot.com",
  messagingSenderId: "1071522985426",
  appId: "1:1071522985426:web:5b5910b6efe1f28de2040b",
  measurementId: "G-DLBN5E8W0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
