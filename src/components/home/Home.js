import React from "react";
import Navbar from "../../shared/navbar/Navbar";
import "./home.css";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiBox, BiVideo, BiMapAlt, BiMicrophone } from "react-icons/bi";
import { RiToolsFill } from "react-icons/ri";
import Footer from "../../shared/footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="banner">
        <div className="container">
          <h1 className="title">
            Top-Rated Camera <br /> Drones
          </h1>
        </div>
      </div>
      {/* service section */}
      <section className="service py-5">
        <div className="container">
          <h1 className="sub-title">
            Airy provides high-quality drones & accessories for a variety of
            purposes
          </h1>
          <div className="services">
            <div className="service">
              <div className="service-icon">
                <MdOutlinePrivacyTip />
              </div>
              <h3 className="service-title">Public Security </h3>
            </div>
            <div className="service">
              <div className="service-icon">
                <BiBox />
              </div>
              <h3 className="service-title">Mineral exploration </h3>
            </div>
            <div className="service">
              <div className="service-icon">
                <BiVideo />
              </div>
              <h3 className="service-title">Movie Production </h3>
            </div>
            <div className="service">
              <div className="service-icon">
                <BiMapAlt />
              </div>
              <h3 className="service-title">Aerial Surveillance </h3>
            </div>
            <div className="service">
              <div className="service-icon">
                <BiMicrophone />
              </div>
              <h3 className="service-title">Recreational Use </h3>
            </div>
            <div className="service">
              <div className="service-icon">
                <RiToolsFill />
              </div>
              <h3 className="service-title">Remote Sensing </h3>
            </div>
          </div>
        </div>
      </section>
      {/* product */}
      <section className="products">
        <div className="container">
          <h3 className="sub-title">Featured products</h3>
        </div>
      </section>
      {/* footer setcion */}
      <Footer />
    </div>
  );
};

export default Home;
