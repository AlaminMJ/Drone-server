import React from "react";
import { ListGroup, Button } from "react-bootstrap";
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
import logo from "../../images/logo.png";
import useAuh from "../../hooks/useAuth";
import DeashboardActivelink from "../../shared/customLilnk/DeashboardActivelink";
const Dashboard = () => {
  const { logOut, isAdmin } = useAuh();
  return (
    <div>
      <div className="dash-nav">
        <div className="container">
          <nav className="nav ">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="dashboard">
        <div className="left">
          <h4 className="mb-3">Dashboard</h4>
          {!isAdmin ? (
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
          ) : (
            <>
              <ListGroup as="ul" className="navigator">
                <DeashboardActivelink to="manageallproduct">
                  <ListGroup.Item as="li">
                    <BiTask className="nav-icon" /> Manage All Order
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
            </>
          )}
          <Button className="log-out " size="sm" onClick={logOut}>
            Log Out
          </Button>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
