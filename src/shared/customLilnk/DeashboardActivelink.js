import React from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

const DeashboardActivelink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={match ? "active" : ""} to={to} {...props}>
      {children}
    </Link>
  );
};

export default DeashboardActivelink;
