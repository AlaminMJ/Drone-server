import React from "react";
import MyOrderCard from "../../shared/myOrderCard/MyOrderCard";
import "./myOrder.css";
const MyOrder = () => {
  return (
    <div className="my-order">
      <h5 className="display-6 text-center mb-4 text-primary">My Order</h5>
      <div className="wrapper">
        <MyOrderCard />
        <MyOrderCard />
        <MyOrderCard />
        <MyOrderCard />
        <MyOrderCard />
      </div>
    </div>
  );
};

export default MyOrder;
