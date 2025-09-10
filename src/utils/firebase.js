// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0e18KtSKEyEfcuCIR4CzsZZ3B_F--QfE",
  authDomain: "netflix-gpt-as.firebaseapp.com",
  projectId: "netflix-gpt-as",
  storageBucket: "netflix-gpt-as.firebasestorage.app",
  messagingSenderId: "22273914655",
  appId: "1:22273914655:web:0507eaf6a6822ba876a22a",
  measurementId: "G-5LHBP30YDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();