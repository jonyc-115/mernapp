// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-74a85.firebaseapp.com",
  projectId: "mern-state-74a85",
  storageBucket: "mern-state-74a85.appspot.com",
  messagingSenderId: "551822953352",
  appId: "1:551822953352:web:9fc068592eb6a91fbc483d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
