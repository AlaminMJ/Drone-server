import axios from "axios";
import React from "react";
import "./myOrderCard.css";

const MyOrderCard = ({ data, isRelode, setIsRelode }) => {
  const { product } = data;

  const handelDelete = (id) => {
    axios
      .delete(`https://peaceful-sands-20601.herokuapp.com/orders/${id}`)
      .then((res) => {
        setIsRelode(!isRelode);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="order-card">
      <div className="product-img">
        <img src={product.img} alt={product.name} />
      </div>
      <button className="status complite">{data.status}</button>
      <h4 className="product-title">{product.title}</h4>
      <div className="cost">
        <p className="price"> {product.price}</p>
        <button className="delete" onClick={() => handelDelete(product._id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default MyOrderCard;
