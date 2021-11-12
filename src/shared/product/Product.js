import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
const Product = () => {
  return (
    <div className="product">
      <div className="product-img">
        <img
          src="https://ld-wt73.template-help.com/tf/airy/images/product-01-510x510.jpg"
          alt=""
        />
      </div>
      <h4 className="product-title">
        DJI Mavic 2 Enterprise Dual with Fly More Kit
      </h4>
      <div className="cost">
        <p className="price"> $45.89</p>
        <Link to=" /shop" className="shop">
          purchase
        </Link>
      </div>
    </div>
  );
};

export default Product;
