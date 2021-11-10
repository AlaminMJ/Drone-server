import { useContext } from "react";
import { FirebaseContext } from "../context/authContext";

const UseAuth = () => {
  return useContext(FirebaseContext);
};
return UseAuth;
