import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, updateCurrentUser } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC1z8UwMuLTsf_u71g_DwZbleCtwahKtkw",
  authDomain: "ticketapp-d0b16.firebaseapp.com",
  projectId: "ticketapp-d0b16",
  storageBucket: "ticketapp-d0b16.appspot.com",
  messagingSenderId: "239924697919",
  appId: "1:239924697919:web:04eb969f79d9d2d437118a",
  measurementId: "G-2J8CMS0JWP"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const auth = getAuth(app)
export const db = getFirestore(app)


