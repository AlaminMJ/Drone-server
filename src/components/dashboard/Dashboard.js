import React from "react";
import { ListGroup } from "react-bootstrap";
// import AddProduct from "../addProduct/AddProduct";
import { Outlet, Link, useLocation } from "react-router-dom";
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
import DashboardNav from "../../shared/dashboardNavbar/DashboardNav";
const Dashboard = () => {
  const location = useLocation();

  return (
    <div>
      <DashboardNav />
      <div className="dashboard">
        <div className="left">
          <h4 className="mb-3">Dashboard</h4>
          <ListGroup as="ul" className="navigator">
            <Link
              to="myorder"
              className={
                location.pathname.split("/")[2] === "myorder" || ""
                  ? "active "
                  : ""
              }
            >
              <ListGroup.Item as="li">
                <BiShoppingBag className="nav-icon" /> My Order
              </ListGroup.Item>
            </Link>
            <Link
              to="payment"
              className={
                location.pathname.split("/")[2] === "payment" ? "active " : ""
              }
            >
              <ListGroup.Item as="li">
                <BiCreditCardAlt className="nav-icon" />
                Payment
              </ListGroup.Item>
            </Link>
            <Link
              to="addreview"
              className={
                location.pathname.split("/")[2] === "addreview" ? "active " : ""
              }
            >
              <ListGroup.Item as="li">
                <BiHeart className="nav-icon" />
                Review
              </ListGroup.Item>
            </Link>
          </ListGroup>
          {/* admin */}
          <ListGroup as="ul" className="navigator">
            <Link
              to="manageallproduct"
              className={
                location.pathname.split("/")[2] === "manageallproduct"
                  ? "active "
                  : ""
              }
            >
              <ListGroup.Item as="li">
                <BiTask className="nav-icon" /> Manage All Product
              </ListGroup.Item>
            </Link>

            <Link
              to="addproduct"
              className={
                location.pathname.split("/")[2] === "addproduct"
                  ? "active "
                  : ""
              }
            >
              <ListGroup.Item as="li">
                <BiPlus className="nav-icon" />
                Add A Product
              </ListGroup.Item>
            </Link>
            <Link
              to="makeadmin"
              className={
                location.pathname.split("/")[2] === "makeadmin" ? "active " : ""
              }
            >
              <ListGroup.Item as="li">
                <BiUserPlus className="nav-icon" />
                Make Admin
              </ListGroup.Item>
            </Link>
            <Link
              to="manageproduct"
              className={
                location.pathname.split("/")[2] === "manageproduct"
                  ? "active "
                  : ""
              }
            >
              <ListGroup.Item as="li">
                <BiStats className="nav-icon" />
                Manage products
              </ListGroup.Item>
            </Link>
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
