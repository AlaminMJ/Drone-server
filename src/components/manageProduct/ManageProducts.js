import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import UpdateProduct from "../updateProduct/UpdateProduct";

const ManageProducts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("https://peaceful-sands-20601.herokuapp.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const handelDelete = (id) => {
    if (window.confirm("are you sure to delete it ?")) {
      axios
        .delete(`https://peaceful-sands-20601.herokuapp.com/products/${id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="manageproducts">
      <h4 className="display-6 text-center text-primary">
        Manage All Products
      </h4>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>product Name</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>

              <td>{product.price}</td>
              <td>
                <Button
                  variant={"danger"}
                  size="sm"
                  className="mx-2"
                  onClick={() => handelDelete(product._id)}
                >
                  Delete
                </Button>
                <Button
                  variant={"success"}
                  size="sm"
                  onClick={() => setModalShow(true)}
                >
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <UpdateProduct show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default ManageProducts;
