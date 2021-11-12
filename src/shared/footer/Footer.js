import React from "react";
import "./footer.css";
import logo from "../../images/logo-white.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosCall, IoIosMailOpen, IoIosBook } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer py-5 ">
      <div className="container">
        <div className="wrapper">
          <div className="logo-conatiner">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p>
              Airy is your #1 place to shop for the first-class drones and
              accessories worldwide.
            </p>
            <div className="social-icons">
              <div className="icons">
                <GrFacebookOption />
              </div>
              <div className="icons">
                <AiOutlineTwitter />
              </div>
              <div className="icons">
                <GrFacebookOption />
              </div>
            </div>
          </div>
          <div>
            <h3>Purposes</h3>
            <ul className="m-0 p-0">
              <li>Movie Production</li>
              <li>Mineral Exploration</li>
              <li>Aerial Surveillance</li>
              <li>Public Security</li>
              <li>Recreational Use</li>
              <li>Remote Sensing</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <ul className="m-0 p-0">
              <li>
                <div className="icons">
                  <HiLocationMarker />
                </div>
                670 Lafayette Ave, Brooklyn, NY 11216
              </li>
              <li>
                <div className="icons">
                  <IoIosCall />
                </div>
                (123) 456-7890
              </li>
              <li>
                <div className="icons">
                  <IoIosMailOpen />
                </div>
                info@demolink.org
              </li>
              <li>
                <div className="icons">
                  <IoIosBook />
                </div>
                Book an Appointment
              </li>
            </ul>
          </div>

          <div>
            <h3>Useful Links</h3>
            <ul className="m-0 p-0">
              <li>About Us</li>
              <li>Showcase</li>
              <li>Contacts</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
