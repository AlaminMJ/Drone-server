import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoLogOutOutline,
  // IoPersonOutline,
  IoCartOutline,
} from "react-icons/io5";
import UseFirebase from "../../hooks/useFirebase";

const Navbar = () => {
  const [istoggle, setIstoggle] = useState(false);
  const toggle = () => {
    setIstoggle(!istoggle);
  };

  // const {} = useAuth();
  const { logOut } = UseFirebase();
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
              {/* <IoPersonOutline title="Profile" /> */}
              <img
                src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/203228012_1339889339742318_2660820128908142869_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=E8OpIyrfG_0AX8nfKqj&_nc_ht=scontent.fdac138-1.fna&oh=6ed272aa3aad067321564124e0454aaa&oe=61B0EC46"
                alt="profile"
              />
            </div>
            <div className=" icons">
              <IoCartOutline title="Cart" />
              <span className="bedge">5</span>
            </div>
            <div className=" icons" onClick={logOut}>
              <IoLogOutOutline title="Log Out" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
