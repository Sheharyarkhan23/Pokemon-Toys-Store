// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  apiKey: "AIzaSyCYRwO2L0fRdthuO_9F_1KjY2mrYCp_zCk",
  authDomain: "getlivedata.firebaseapp.com",
  databaseURL: "https://getlivedata-default-rtdb.firebaseio.com",
  projectId: "getlivedata",
  storageBucket: "getlivedata.firebasestorage.app",
  messagingSenderId: "733388105198",
  appId: "1:733388105198:web:46b6fdddd90fd8e7c65aff",
  measurementId: "G-E2HR9YQ2QV"
};

// Initialize Firebase with a unique name to avoid conflicts
const app2 = initializeApp(firebaseConfig2, "secondary");

export const database2 = getDatabase(app2);