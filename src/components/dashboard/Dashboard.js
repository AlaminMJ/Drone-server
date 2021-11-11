import React from "react";
import { ListGroup } from "react-bootstrap";
// import AddProduct from "../addProduct/AddProduct";
import { Outlet, Link } from "react-router-dom";
import {
  BiCreditCardAlt,
  BiShoppingBag,
  BiHeart,
  BiTask,
  BiPlus,
  BiUserPlus,
  BiStats,
} from "react-icons/bi";
import "./dashboard.css";
import Navbar from "../../shared/navbar/Navbar";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="left">
          <h4 className="mb-3">Dashboard</h4>
          <ListGroup as="ul" className="navigator">
            <ListGroup.Item as="li" active>
              <BiShoppingBag className="nav-icon" /> My Order
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <BiCreditCardAlt className="nav-icon" />
              Payment
            </ListGroup.Item>
            <Link to="/dashboard/addreview">
              <ListGroup.Item as="li">
                <BiHeart className="nav-icon" />
                Review
              </ListGroup.Item>
            </Link>
          </ListGroup>
          {/* admin */}
          <ListGroup as="ul" className="navigator">
            <ListGroup.Item as="li" active>
              <BiTask className="nav-icon" /> Manage All Product
            </ListGroup.Item>
            <Link to="addproduct">
              <ListGroup.Item as="li">
                <BiPlus className="nav-icon" />
                Add A Product
              </ListGroup.Item>
            </Link>
            <ListGroup.Item as="li">
              <BiUserPlus className="nav-icon" />
              Make Admin
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <BiStats className="nav-icon" />
              Manage products
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
