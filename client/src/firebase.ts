// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC2tR1MaXypt4EVk9trBeou050nEeaQBrw",
  authDomain: "sunaar-f076f.firebaseapp.com",
  projectId: "sunaar-f076f",
  storageBucket: "sunaar-f076f.appspot.com",
  messagingSenderId: "904452414001",
  appId: "1:904452414001:web:6f763fecaaebb006959310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)