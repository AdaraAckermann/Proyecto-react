// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIfZNzgF73OdELr9qV3J3U8zygUWbjss0",
  authDomain: "proyectoreact-dc-e5b97.firebaseapp.com",
  projectId: "proyectoreact-dc-e5b97",
  storageBucket: "proyectoreact-dc-e5b97.appspot.com",
  messagingSenderId: "853348561711",
  appId: "1:853348561711:web:e78f4116bd835f9370e7da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore ( app );