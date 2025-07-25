 // firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWR-KHmGJeBsgldWYsevX46I41MzG37xM",
    authDomain: "my-portfolio-72b29.firebaseapp.com",
    projectId: "my-portfolio-72b29",
    storageBucket: "my-portfolio-72b29.firebasestorage.app",
    messagingSenderId: "932256735136",
    appId: "1:932256735136:web:9a3400582256a50cf84ec5",
    measurementId: "G-4K58ND2QN5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
