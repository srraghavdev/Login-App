import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
 
});
// inner object is firebase Config given by firebase , when trying to run project on your machine plesae add firbase config object inside initializeApp
export const auth = getAuth(app);
export const db = getFirestore(app);
