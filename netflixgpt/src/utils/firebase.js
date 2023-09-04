// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMnf3tLOyszr_caZJBzkTRjhCjam3L-1E",
  authDomain: "netflixgpt-aa324.firebaseapp.com",
  projectId: "netflixgpt-aa324",
  storageBucket: "netflixgpt-aa324.appspot.com",
  messagingSenderId: "299347548743",
  appId: "1:299347548743:web:b54c1995c8920113696f62",
  measurementId: "G-3VYQYW359F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
