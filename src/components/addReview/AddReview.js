import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./AddReview.css";
const AddReview = () => {
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/reviews", { ...data, rating: rating })
      .then((res) => {
        console.log(res.data);
      });
  };
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="add-review">
      <Form className="w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="display-3 text-center">Add Review</h1>
        <Row>
          <Col>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                required
                {...register("name", { required: true })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                {...register("email", { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
          <Form.Label> Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="message"
            required
            {...register("message", { required: true })}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
          <Form.Label>Review</Form.Label>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </Form.Group>

        <Button variant="primary" type="Send" className="px-5">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddReview;
