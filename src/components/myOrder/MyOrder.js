import React from "react";
import MyOrderCard from "../../shared/myOrderCard/MyOrderCard";
import "./myOrder.css";
const MyOrder = () => {
  return (
    <div className="my-order">
      <h1 className="display-5 text-center">My Order</h1>
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
