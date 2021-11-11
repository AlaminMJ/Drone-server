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
import { axios } from "axios";

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
        console.log(err);
        callback("failur");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const createUserEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log(name);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        })
          .then(() => {
            axios
              .post("http://localhost:5000/users", {
                name,
                email: "demo",
              })
              .then((res) => {
                console.log(res.data);
              });
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        console.log(error);
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
  return { user, isLoading, logInWithGoogle, signUp, logOut, createUserEmail };
};
export default useFirebase;
