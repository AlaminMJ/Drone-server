import React from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={match ? "nav-link active" : "nav-link "}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
