import { initializeApp } from "firebase/app";
//import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArtQOmXM5ccyNfedygF3aTIlaF3g0NPFI",
  authDomain: "studyapp-bb030.firebaseapp.com",
  projectId: "studyapp-bb030",
  storageBucket: "studyapp-bb030.appspot.com",
  messagingSenderId: "743940466644",
  appId: "1:743940466644:web:863d7b14d39d093e9a5841",
  measurementId: "G-80R0WQP4EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFireStore(app);
export default app;