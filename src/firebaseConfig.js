import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyD4nH1z-jOOYYkeqGrGx5up4bR8Zo-p3VQ",
  authDomain: "loginapp-cebb3.firebaseapp.com",
  projectId: "loginapp-cebb3",
  storageBucket: "loginapp-cebb3.appspot.com",
  messagingSenderId: "460045626153",
  appId: "1:460045626153:web:a34bb6ed5400f38824a538",
});
// inner object is firebase Config given by firebase , when trying to run project on your machine plesae add firbase config object inside initializeApp
export const auth = getAuth(app);
export const db = getFirestore(app);
