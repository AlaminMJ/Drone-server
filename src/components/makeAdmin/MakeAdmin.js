import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import "./makeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelAdmin = (e) => {
    e.preventDefault();
    axios
      .put("https://peaceful-sands-20601.herokuapp.com/users/makeadmin", {
        email,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          setIsSuccess(true);
        }
      })
      .catch((err) => {
        setIsSuccess(false);
      });
  };
  return (
    <div className="make-admin">
      <div className="wrapper d-flex justify-content-center align-items-center flex-column">
        <Form className="form p-4" onSubmit={handelAdmin}>
          <h1 className="display-6 text-center text-primary mb-4">
            Make Admin
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handelEmail}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Make Admin
          </Button>
        </Form>
        {isSuccess && <Alert variant={"success"}>Successfull make admin</Alert>}
      </div>
    </div>
  );
};

export default MakeAdmin;
