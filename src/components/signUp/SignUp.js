import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";
import "./signUp.css";
const SignUp = () => {
  const { createUserEmail } = useFirebase();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      createUserEmail(data.name, data.email, data.password);
      setError("");
    } else {
      setError("Password are not match");
    }
  };
  return (
    <div className="sign-up">
      <div className="wrapper">
        <h3 className="text-center fw-normal text-primary">Sign Up</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              {...register("name", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder=" Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
          </Form.Group>
          {error && (
            <Alert key={1} variant={"danger"}>
              {error}
            </Alert>
          )}
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
