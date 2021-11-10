import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signUp.css";
const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="wrapper">
        <h3 className="text-center fw-normal text-primary">Sign Up</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control type="password" placeholder=" Confirm Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="px-5">
            Sign Up
          </Button>
        </Form>
        <p className="text-center mt-3 create-accoutn">
          Already have an account ? <Link to="/login">LogIn </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
