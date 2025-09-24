// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdKCOuWv2GRFB2DkWSOGb1gy593FWBSwM",
  authDomain: "reactcoder-a82b7.firebaseapp.com",
  projectId: "reactcoder-a82b7",
  storageBucket: "reactcoder-a82b7.firebasestorage.app",
  messagingSenderId: "1029908363501",
  appId: "1:1029908363501:web:f6365760b98967d064b4e4",
  measurementId: "G-5PNFMTKCSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);