// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEYTT23LQN8tHhchANNGxMyqFUUWbxXk",
  authDomain: "project-messaging-2fe85.firebaseapp.com",
  projectId: "project-messaging-2fe85",
  storageBucket: "project-messaging-2fe85.firebasestorage.app",
  messagingSenderId: "633018366624",
  appId: "1:633018366624:web:1e7862bf58d4b25cec67c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const db = firebase.database();
const storage = firebase.storage();