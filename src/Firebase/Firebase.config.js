// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQHRyP3uFo4YIrnFGSWKFb9CUn8ssCOBU",
  authDomain: "tech-and-gaming-event-9e78c.firebaseapp.com",
  projectId: "tech-and-gaming-event-9e78c",
  storageBucket: "tech-and-gaming-event-9e78c.appspot.com",
  messagingSenderId: "359498183843",
  appId: "1:359498183843:web:3f86eedb0debd745dd7b16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)