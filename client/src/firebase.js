// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dag-tech.firebaseapp.com",
  projectId: "dag-tech",
  storageBucket: "dag-tech.appspot.com",
  messagingSenderId: "9132165593",
  appId: "1:9132165593:web:d383a721c2f98517ec31c8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
