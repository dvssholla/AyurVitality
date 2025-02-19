import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqQZ1s1P7HwRQC74uHeAAV3MyxSPuJAAs",
  authDomain: "ayurvitality-5f0d5.firebaseapp.com",
  projectId: "ayurvitality-5f0d5",
  storageBucket: "ayurvitality-5f0d5.firebasestorage.app",
  messagingSenderId: "656564298673",
  appId: "1:656564298673:web:ee6c74ae65a6d01c239390",
  measurementId: "G-VQM7NGTZCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };