// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJbS12N34OSPDjgjhr5VtbZsc4ujTvsGA",
  authDomain: "j-shop-a12ef.firebaseapp.com",
  projectId: "j-shop-a12ef",
  storageBucket: "j-shop-a12ef.appspot.com",
  messagingSenderId: "615474511667",
  appId: "1:615474511667:web:a7618083689c67e976c846",
  measurementId: "G-EHTBEQP7MQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//  export const analytics = getAnalytics(app);