// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFsmQwLN7Ygn4k15psutC_5tRom08_qq0",
  authDomain: "netflixgpt-f1276.firebaseapp.com",
  projectId: "netflixgpt-f1276",
  storageBucket: "netflixgpt-f1276.firebasestorage.app",
  messagingSenderId: "556883788575",
  appId: "1:556883788575:web:9a56ae349170daf64ba62a",
  measurementId: "G-GKB130TRK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);