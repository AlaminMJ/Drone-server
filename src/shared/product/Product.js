import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
const Product = ({ data }) => {
  const { _id, img, name, title, price } = data;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt={name} />
      </div>
      <h4 className="product-title">{title}</h4>
      <div className="cost">
        <p className="price"> ${price}</p>
        <Link to={`/placeorder/${_id}`} className="shop">
          Purchase
        </Link>
      </div>
    </div>
  );
};

export default Product;
