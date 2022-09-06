// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTGo_18qJWhfRy0j8-3rZdzAoEvyd9g5s",
  authDomain: "house-marketplace-app-3a2c2.firebaseapp.com",
  projectId: "house-marketplace-app-3a2c2",
  storageBucket: "house-marketplace-app-3a2c2.appspot.com",
  messagingSenderId: "599610633591",
  appId: "1:599610633591:web:ddd46e07e8bc597430c572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
