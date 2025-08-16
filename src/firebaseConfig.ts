// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCacyoAa6JLazdPFTEaYNELjfBq5c3S6Kk",
  authDomain: "myordersapp-af653.firebaseapp.com",
  databaseURL: "https://myordersapp-af653-default-rtdb.firebaseio.com",
  projectId: "myordersapp-af653",
  storageBucket: "myordersapp-af653.firebasestorage.app",
  messagingSenderId: "1052952825499",
  appId: "1:1052952825499:web:b5b5ce7b467683921b003e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);