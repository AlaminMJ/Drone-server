import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrderCard from "../../shared/myOrderCard/MyOrderCard";
import "./myOrder.css";
const MyOrder = () => {
  const [myOrder, setMyorder] = useState([]);
  const [isRelode, setIsRelode] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    axios(
      `https://peaceful-sands-20601.herokuapp.com/orders/myorder/${user.email}`
    ).then((res) => {
      setMyorder(res.data);
    });
  }, [isRelode]);

  return (
    <div className="my-order">
      <h5 className="display-6 text-center mb-4 text-primary">My Order</h5>
      <div className="wrapper">
        {myOrder.map((order) => (
          <MyOrderCard data={order} setIsRelode isRelode />
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
