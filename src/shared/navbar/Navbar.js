import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoCartOutline,
} from "react-icons/io5";

const Navbar = () => {
  const [istoggle, setIstoggle] = useState(false);
  const toggle = () => {
    setIstoggle(!istoggle);
  };

  return (
    <div className="navbar-m stic">
      <div className="container">
        <nav className="nav">
          <div className="toggle" onClick={toggle}>
            <IoMenuOutline />
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={istoggle ? "menu active" : "menu"}>
            <ul className="navlist mb-0">
              <div className="icon" onClick={toggle}>
                <IoCloseOutline />
              </div>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-icons">
            <div className=" icons">
              <IoPersonOutline title="Profile" />
            </div>
            <div className=" icons">
              <IoCartOutline title="Cart" />
              <span className="bedge">5</span>
            </div>
            <div className=" icons">
              <IoLogOutOutline title="Log Out" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
