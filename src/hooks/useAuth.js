import { useContext } from "react";
import { FirebaseContext } from "../context/authContext";

const useAuth = () => {
  return useContext(FirebaseContext);
};
export default useAuth;
