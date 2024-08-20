// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC49IPEQP_Nsb3XkoBsoREvaWZhsK_NVdU",
  authDomain: "reactchat-f229d.firebaseapp.com",
  projectId: "reactchat-f229d",
  storageBucket: "reactchat-f229d.appspot.com",
  messagingSenderId: "668078692530",
  appId: "1:668078692530:web:1552e086b39e2c5a7b51ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };
