import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./logIn.css";
const LogIn = () => {
  const location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const { signUp, user } = useFirebase();

  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signUp(data.email, data.password, (err) => {
      if (!err) {
        navigate(from, { replace: true });
      }
      console.log(user);
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
