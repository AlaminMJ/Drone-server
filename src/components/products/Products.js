import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import Product from "../../shared/product/Product";
import "./products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("https://peaceful-sands-20601.herokuapp.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="products">
      <Navbar />
      <div className="container">
        <h1 className="display-5 text-center text-primary py-3">
          Our Products
        </h1>
        <div className="wrapper py-4">
          {products.map((product) => (
            <Product key={product._id} data={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
