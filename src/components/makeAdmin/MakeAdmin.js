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
  const handelAdmin = () => {
    axios
      .put("https://peaceful-sands-20601.herokuapp.com/users/makeadmin", {
        email,
      })
      .then((res) => {
        console.log(res.data);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
      });
  };
  return (
    <div className="make-admin">
      <div className="wrapper d-flex justify-content-center align-items-center flex-column">
        <Form className="form p-4">
          <h1 className="display-6 text-center text-primary mb-4">
            Make Admin
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onFocus={handelEmail}
            />
          </Form.Group>

          <Button variant="primary" onClick={handelAdmin}>
            Make Admin
          </Button>
        </Form>
        {isSuccess && <Alert variant={"success"}>Successfull make admin</Alert>}
      </div>
    </div>
  );
};

export default MakeAdmin;
