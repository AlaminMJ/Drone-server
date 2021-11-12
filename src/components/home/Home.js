import React from "react";
import Navbar from "../../shared/navbar/Navbar";
import "./home.css";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiBox, BiVideo, BiMapAlt, BiMicrophone } from "react-icons/bi";
import { RiToolsFill } from "react-icons/ri";
import Footer from "../../shared/footer/Footer";
import Product from "../../shared/product/Product";
import { Link } from "react-router-dom";
import Review from "../../shared/review/Review";

// swiper core styles
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
// install Swiper modules
SwiperCore.use([Pagination, Autoplay, Pagination, Navigation]);

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* service section */}
      {/* banner */}
      <div className="banners">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner banner-1">
              <div className="container">
                <h1 className="title">
                  Top-Rated Camera <br /> Drones
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" banner banner-2">
              <div className="container">
                <h1 className="title">
                  Top-Rated Camera <br /> Drones
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" banner banner-3">
              <div className="container">
                <h1 className="title">
                  Top-Rated Camera <br /> Drones
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
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
      <section className="products py-5">
        <div className="container">
          <h3 className="sub-title">Featured products</h3>
          <div className="product-wrapper">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="more">
            <Link to="/products">More</Link>
          </div>
        </div>
      </section>
      {/* Review */}
      <section className="reviwes py-2">
        <div className="container">
          <h3 className="sub-title">Our Clint Say</h3>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              <Review />
            </SwiperSlide>
          </Swiper>
          {/* <div className="reviwe-wrapper">
            <Review />
            <Review />
            <Review />
            <Review />
          </div> */}
        </div>
      </section>
      {/* footer setcion */}
      <Footer />
    </div>
  );
};

export default Home;
