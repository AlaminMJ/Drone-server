import React from "react";
import { ListGroup } from "react-bootstrap";
// import AddProduct from "../addProduct/AddProduct";
import { Outlet } from "react-router-dom";
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
import DeashboardActivelink from "../../shared/customLilnk/DeashboardActivelink";
const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <div className="dashboard">
        <div className="left">
          <h4 className="mb-3">Dashboard</h4>
          <ListGroup as="ul" className="navigator">
            <DeashboardActivelink to="myorder">
              <ListGroup.Item as="li">
                <BiShoppingBag className="nav-icon" /> My Order
              </ListGroup.Item>
            </DeashboardActivelink>
            <DeashboardActivelink to="payment">
              <ListGroup.Item as="li">
                <BiCreditCardAlt className="nav-icon" />
                Payment
              </ListGroup.Item>
            </DeashboardActivelink>
            <DeashboardActivelink to="addreview">
              <ListGroup.Item as="li">
                <BiHeart className="nav-icon" />
                Review
              </ListGroup.Item>
            </DeashboardActivelink>
          </ListGroup>
          {/* admin */}
          <ListGroup as="ul" className="navigator">
            <DeashboardActivelink to="manageallproduct">
              <ListGroup.Item as="li">
                <BiTask className="nav-icon" /> Manage All Product
              </ListGroup.Item>
            </DeashboardActivelink>

            <DeashboardActivelink to="addproduct">
              <ListGroup.Item as="li">
                <BiPlus className="nav-icon" />
                Add A Product
              </ListGroup.Item>
            </DeashboardActivelink>
            <DeashboardActivelink to="makeadmin">
              <ListGroup.Item as="li">
                <BiUserPlus className="nav-icon" />
                Make Admin
              </ListGroup.Item>
            </DeashboardActivelink>
            <DeashboardActivelink to="manageproduct">
              <ListGroup.Item as="li">
                <BiStats className="nav-icon" />
                Manage products
              </ListGroup.Item>
            </DeashboardActivelink>
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
