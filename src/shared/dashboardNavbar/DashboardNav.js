import "./dashboardnav.css";
import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className="dash-nav">
      <div className="container">
        <nav className="nav ">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNav;
