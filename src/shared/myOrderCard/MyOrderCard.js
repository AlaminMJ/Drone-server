import React from "react";
import "./myOrderCard.css";
const MyOrderCard = () => {
  return (
    <div className="order-card">
      <div className="product-img">
        <img
          src="https://ld-wt73.template-help.com/tf/airy/images/product-01-510x510.jpg"
          alt=""
        />
      </div>
      <button className="status complite">Pending</button>
      <h4 className="product-title">
        DJI Mavic 2 Enterprise Dual with Fly More Kit
      </h4>
      <div className="cost">
        <p className="price"> $45.89</p>
        <button className="delete">Remove</button>
      </div>
    </div>
  );
};

export default MyOrderCard;
