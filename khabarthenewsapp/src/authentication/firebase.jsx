import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth,  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
    apiKey: import.meta.env.VITE_KHABAR_FIREBASE_API_KEY,
    authDomain: "khabarthenewsapp.firebaseapp.com",
    projectId: "khabarthenewsapp",
    storageBucket: "khabarthenewsapp.appspot.com",
    messagingSenderId: "95608520008",
    appId: "1:95608520008:web:9592a3563bb3ab1035c77d",
    measurementId: "G-YF3KEFLKXB"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const authentication = getAuth(app);
export default app;