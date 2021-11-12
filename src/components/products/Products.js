import React from "react";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import Product from "../../shared/product/Product";
import "./products.css";
const Products = () => {
  return (
    <div className="products">
      <Navbar />
      <div className="container">
        <h1 className="display-5 text-center text-primary py-3">
          Our Products
        </h1>
        <div className="wrapper py-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
