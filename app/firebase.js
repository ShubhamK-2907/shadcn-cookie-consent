import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDqGxC15szo35xv6UQZERpfpUHwmALEL8",
  authDomain: "shadcn-cookie-consent.firebaseapp.com",
  projectId: "shadcn-cookie-consent",
  storageBucket: "shadcn-cookie-consent.appspot.com",
  messagingSenderId: "1011782456648",
  appId: "1:1011782456648:web:52d9c550a59c04911c8f7d",
  measurementId: "G-PRHLSVXN0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);