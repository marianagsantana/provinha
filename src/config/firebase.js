// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsjcgmnpDCAA0-8y_B0dmAj0eLKOt8N-k",
  authDomain: "my-app-d1d7d.firebaseapp.com",
  projectId: "my-app-d1d7d",
  storageBucket: "my-app-d1d7d.appspot.com",
  messagingSenderId: "70016922117",
  appId: "1:70016922117:web:423e37500d387cfbd3a26c",
  measurementId: "G-DWZ3FQZGXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
