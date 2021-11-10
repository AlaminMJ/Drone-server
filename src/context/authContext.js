import React, { createContext } from "react";
import UseFirebase from "../hooks/useFirebase";
export const FirebaseContext = createContext();
const authContext = ({ children }) => {
  const allContext = UseFirebase();
  return (
    <FirebaseContext.Provider value={allContext}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default authContext;
