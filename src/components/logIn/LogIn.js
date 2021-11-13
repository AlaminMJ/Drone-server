import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./logIn.css";
const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  let from = location.state?.from?.pathname || "/";
  const { signUp } = useFirebase();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signUp(data.email, data.password, (err) => {
      if (!err) {
        navigate(from, { replace: true });
        setError("");
      } else {
        setError(err);
      }
    });
  };
  return (
    <div className="log-in">
      <div className="wrapper">
        <h3 className="text-center fw-normal text-primary">LogIn</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </Form.Group>
          {error && (
            <Alert key={1} variant={"danger"}>
              {error}
            </Alert>
          )}
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
