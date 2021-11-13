import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import { Button } from "react-bootstrap";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoLogOutOutline,
  // IoPersonOutline,
} from "react-icons/io5";
import UseFirebase from "../../hooks/useFirebase";
import CustomLink from "../customLilnk/CustomLink";

const Navbar = ({ to }) => {
  const [istoggle, setIstoggle] = useState(false);
  const toggle = () => {
    setIstoggle(!istoggle);
  };

  // const {} = useAuth();
  const { logOut, user } = UseFirebase();
  console.log(user);

  return (
    <div className="navbar-m stic">
      <div className="container">
        <nav className="nav">
          <div className="toggle" onClick={toggle}>
            <IoMenuOutline />
          </div>
          <div className="logo">
            <CustomLink to="/">
              <img src={logo} alt="logo" />
            </CustomLink>
          </div>
          <div className={istoggle ? "menu active" : "menu"}>
            <ul className="navlist mb-0">
              <div className="icon" onClick={toggle}>
                <IoCloseOutline />
              </div>
              <li className="nav-item">
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink to="/products">Products</CustomLink>
              </li>
              {user?.email && (
                <li className="nav-item">
                  <CustomLink to="/dashboard" className="nav-link">
                    Dashboard
                  </CustomLink>
                </li>
              )}
            </ul>
          </div>
          <div className="nav-icons">
            {user?.email ? (
              <>
                <div className=" icons">
                  {/* <IoPersonOutline title="Profile" /> */}
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
                    }
                    alt="profile"
                  />
                </div>
                <div className=" icons" onClick={logOut}>
                  <IoLogOutOutline title="Log Out" />
                </div>
              </>
            ) : (
              <div className=" icons">
                <Link to="/login">
                  <Button size="sm">LogIn</Button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
