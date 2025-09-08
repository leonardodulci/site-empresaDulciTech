
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp6CXEJDcsh1-Z3acW9DN-80NF9VXzR9E",
  authDomain: "dulcitech-ff47d.firebaseapp.com",
  projectId: "dulcitech-ff47d",
  storageBucket: "dulcitech-ff47d.firebasestorage.app",
  messagingSenderId: "330323001783",
  appId: "1:330323001783:web:73fd0819dd053c3438e832",
  measurementId: "G-17E35J2V0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);