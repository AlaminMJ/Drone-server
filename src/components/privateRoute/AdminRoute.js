import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
// import useFirebase from "../../hooks/useFirebase";
function AdminRoute({ children }) {
  let { isAdmin, isLoading } = useAuth();

  if (!isLoading) {
    if (!isAdmin) {
      return <Navigate to="/" />;
    }

    return children;
  } else {
    return (
      <h3
        className="text-center text-primary display-4
    m-5"
      >
        loading
      </h3>
    );
  }
}

export default AdminRoute;
