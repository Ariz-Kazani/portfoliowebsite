import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEShTKqO-HUf7tvi9IaVPXCTU1vglW2sw",
  authDomain: "ariz-kazani.firebaseapp.com",
  projectId: "ariz-kazani",
  storageBucket: "ariz-kazani.appspot.com",
  messagingSenderId: "623039835888",
  appId: "1:623039835888:web:40347d242edadf95189c35",
  measurementId: "G-ND3W30HFEY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);