import React from "react";
import { ListGroup } from "react-bootstrap";
import Navbar from "../../shared/navbar/Navbar";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="left">
          <ListGroup as="ul" className="navigator">
            <ListGroup.Item as="li" active>
              Cras justo odio
            </ListGroup.Item>
            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
            <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="right">Right</div>
      </div>
    </div>
  );
};

export default Dashboard;
