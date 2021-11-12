import React from "react";
import { Form, Button } from "react-bootstrap";
import "./makeAdmin.css";
const MakeAdmin = () => {
  return (
    <div className="make-admin">
      <div className="wrapper d-flex justify-content-center align-items-center flex-column">
        <Form className="form p-4">
          <h1 className="display-6 text-center text-primary mb-4">
            Make Admin
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Make Admin
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MakeAdmin;
