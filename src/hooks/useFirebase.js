import firebaseInitialize from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

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
      .then((user) => {})
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //   Sign Up
  const signUp = (email, password, callback) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        callback(null);
      })
      .catch((err) => {
        callback(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const createUserEmail = (name, email, password, callback) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        saveUser(name, email);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            callback(null);
          })
          .catch((err) => {
            callback(err.message);
          });
      })
      .catch((error) => {
        callback(error.message);
      });
  };

  //   log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("logout");
      })
      .catch(() => {})
      .finally(() => {});
  };
  // Save user
  const saveUser = (name, email, img) => {
    const user = { name, email, img };
    axios
      .post("https://peaceful-sands-20601.herokuapp.com/users", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { user, isLoading, logInWithGoogle, signUp, logOut, createUserEmail };
};
export default useFirebase;
