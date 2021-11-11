import firebaseInitialize from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();
const useFirebase = () => {
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // log in with
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);
  const logInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //   Sign Up
  const signUp = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const createUserEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setUser({
          name,
          email,
        });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   log out
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {})
      .finally(() => {});
  };
  return { user, isLoading, logInWithGoogle, signUp, logOut, createUserEmail };
};
export default useFirebase;
