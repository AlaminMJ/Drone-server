import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const firebaseInitialize = () => {
  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
export default firebaseInitialize;
