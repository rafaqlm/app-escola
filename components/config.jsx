// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuHsbt4pGrD4nEkU7GZDeYIhiwLt7WCtg",
  authDomain: "arvore-15cfb.firebaseapp.com",
  projectId: "arvore-15cfb",
  storageBucket: "arvore-15cfb.appspot.com",
  messagingSenderId: "356389611216",
  appId: "1:356389611216:web:335ce7ffc5058f46d060d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);
export const authentication = getAuth(app);