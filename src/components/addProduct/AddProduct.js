import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://peaceful-sands-20601.herokuapp.com/products", data)
      .then((res) => {
        console.log(res.data);
        reset();
      });
  };

  return (
    <div className="add-product ">
      <Form className="w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="display-6  text-primary text-center">Add Product</h1>

        <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            required
            {...register("name", { required: true })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
          <Form.Label>Product title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            required
            {...register("title", { required: true })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Price"
            required
            {...register("price", { required: true })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
          <Form.Label> Product Img Url</Form.Label>
          <Form.Control
            type="url"
            placeholder="Product img url"
            required
            {...register("img", { required: true })}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Description"
            required
            {...register("desc", { required: true })}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="px-5"
          // onClick={addProduct}
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
