import React from "react";
// import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
function PrivateRoute({ children }) {
  let { user, isLoading } = useFirebase();
  let location = useLocation();
  if (!isLoading) {
    if (!user.email) {
      return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
  } else {
    return <h3 className="text-center text-primary display-3">loading</h3>;
  }
}

export default PrivateRoute;
