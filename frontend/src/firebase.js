// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-app-1f89a.firebaseapp.com",
  projectId: "real-estate-mern-app-1f89a",
  storageBucket: "real-estate-mern-app-1f89a.appspot.com",
  messagingSenderId: "484184520674",
  appId: "1:484184520674:web:48837cc0c6f1bb6f036bbb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);