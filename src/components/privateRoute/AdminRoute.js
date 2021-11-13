import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
// import useFirebase from "../../hooks/useFirebase";
function AdminRoute({ children }) {
  let { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;
