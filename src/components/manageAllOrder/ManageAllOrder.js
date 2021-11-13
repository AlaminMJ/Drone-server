import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Table } from "react-bootstrap";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios("https://peaceful-sands-20601.herokuapp.com/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handelChangeStatus = (id) => {
    axios
      .put(`https://peaceful-sands-20601.herokuapp.com/orders/${id}`)
      .then((res) => {
        console.log("update successfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="display-6 text-primary text-center">Manage All Order</h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Product Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.number}</td>
              <td>{order.product.name}</td>
              <td>
                <Form.Select onChange={() => handelChangeStatus(order._id)}>
                  <option>{order.status}</option>
                  <option>Shoped</option>
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrder;
