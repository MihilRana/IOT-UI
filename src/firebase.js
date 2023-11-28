// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAZs3Grqcf7NMBH9mVSwa1ehc5gOhCC6bo",
  authDomain: "smartcarpark-8fd32.firebaseapp.com",
  databaseURL: "https://smartcarpark-8fd32-default-rtdb.firebaseio.com",
  projectId: "smartcarpark-8fd32",
  storageBucket: "smartcarpark-8fd32.appspot.com",
  messagingSenderId: "484834450417",
  appId: "1:484834450417:web:1d819daad312b9d2600250",
  measurementId: "G-FWTJFJQSM3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default database;
