// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzCamIk9PRXVYGOXETtwWJzrXHQcX3YY8",
  authDomain: "book-club-f080f.firebaseapp.com",
  projectId: "book-club-f080f",
  storageBucket: "book-club-f080f.appspot.com",
  messagingSenderId: "638153203717",
  appId: "1:638153203717:web:08f22ff2975bb3b6fcfc6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
