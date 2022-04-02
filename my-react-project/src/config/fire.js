// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6QQsqAQG6Y0Eds47o3fPeOT2x6X6aaHM",
  authDomain: "virtual-tou.firebaseapp.com",
  projectId: "virtual-tou",
  storageBucket: "virtual-tou.appspot.com",
  messagingSenderId: "755075563178",
  appId: "1:755075563178:web:1557cf19b7480ff2665ad3",
  measurementId: "G-KCEQGPK24G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);