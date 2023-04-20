
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB4fcgya4fgfzUcoTfXPZw9eHNHXz4mnE",
  authDomain: "ecommerce-app-9838b.firebaseapp.com",
  projectId: "ecommerce-app-9838b",
  storageBucket: "ecommerce-app-9838b.appspot.com",
  messagingSenderId: "210301135482",
  appId: "1:210301135482:web:e4a3ca94d2e42a7526e9c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
