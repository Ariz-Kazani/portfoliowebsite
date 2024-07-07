// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEShTKqO-HUf7tvi9IaVPXCTU1vglW2sw",
  authDomain: "ariz-kazani.firebaseapp.com",
  projectId: "ariz-kazani",
  storageBucket: "ariz-kazani.appspot.com",
  messagingSenderId: "623039835888",
  appId: "1:623039835888:web:40347d242edadf95189c35",
  measurementId: "G-ND3W30HFEY"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
let analytics = null;

if (import.meta.env.VITE_MODE !== 'dev') {
  analytics = getAnalytics(app);
}

export { analytics };