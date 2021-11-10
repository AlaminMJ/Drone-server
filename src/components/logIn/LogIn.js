import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./logIn.css";
const LogIn = () => {
  return (
    <div className="log-in">
      <div className="wrapper">
        <h3 className="text-center fw-normal text-primary">LogIn</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="text-center px-5 mx-auto"
          >
            LogIn
          </Button>
        </Form>
        <p className="text-center mt-3 create-accoutn">
          Don't have any account ? <Link to="/signup">Create an Account</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
