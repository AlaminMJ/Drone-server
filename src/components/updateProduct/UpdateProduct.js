import axios from "axios";
import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const UpdateProduct = (props) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    axios.put("https://peaceful-sands-20601.herokuapp.com/products", {});
  }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>product Name</Form.Label>
            <Form.Control
              placeholder="Product Name"
              {...register("productName")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Title" {...register("title")} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control placeholder="price" {...register("price")} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control placeholder="Photo url" {...register("img")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Details</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("desc")} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button type="submit" variant={"success"}>
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateProduct;

//   <MyVerticallyCenteredModal
//     show={modalShow}
//     onHide={() => setModalShow(false)}
//   />
