
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC26HkJIJ0D8Ib7Kh7EWb6xIkrM8AVcqFA",
  authDomain: "resume-builder-1b039.firebaseapp.com",
  projectId: "resume-builder-1b039",
  storageBucket: "resume-builder-1b039.appspot.com",
  messagingSenderId: "950999140109",
  appId: "1:950999140109:web:2fe96195ca870f5d3d5244",
  measurementId: "G-CRREEQE1CD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);
export const storage = getStorage();
 const analytics = getAnalytics(app);