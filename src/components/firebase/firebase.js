// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX0kutR7cLxC8KTNVXKPd6AkO9Nj10wqM",
  authDomain: "learning-react-6c1d8.firebaseapp.com",
  projectId: "learning-react-6c1d8",
  storageBucket: "learning-react-6c1d8.firebasestorage.app",
  messagingSenderId: "663207184069",
  appId: "1:663207184069:web:e81d513cbae802608612ac",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);