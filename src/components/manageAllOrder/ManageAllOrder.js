import React from "react";
import { Form, Table } from "react-bootstrap";

const ManageAllOrder = () => {
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
          <tr>
            <td>1</td>
            <td>Alamin</td>
            <td>Alamin@gmail.com</td>
            <td>01610132213</td>
            <td>Drone</td>
            <td>
              <Form.Select defaultValue="pending">
                <option>pending</option>
                <option>Shoped</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Alamin</td>
            <td>Alamin@gmail.com</td>
            <td>01610132213</td>
            <td>Drone</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Alamin</td>
            <td>Alamin@gmail.com</td>
            <td>01610132213</td>
            <td>Drone</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Alamin</td>
            <td>Alamin@gmail.com</td>
            <td>01610132213</td>
            <td>Drone</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Alamin</td>
            <td>Alamin@gmail.com</td>
            <td>01610132213</td>
            <td>Drone</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Alamin</td>
            <td>Alamin@gmail.com</td>
            <td>01610132213</td>
            <td>Drone</td>
            <td>pending</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrder;
