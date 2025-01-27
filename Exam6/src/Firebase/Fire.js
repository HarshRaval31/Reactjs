// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3rjLKklzmvxvnVOyekdkGNp1S6Lwz1bg",
  authDomain: "exam6firebase.firebaseapp.com",
  projectId: "exam6firebase",
  storageBucket: "exam6firebase.firebasestorage.app",
  messagingSenderId: "623805296999",
  appId: "1:623805296999:web:98daee892e9a70bfd87fc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export let db = getFirestore(app);