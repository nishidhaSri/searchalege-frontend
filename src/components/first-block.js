import React from "react";
import front1 from "../assets/front1.png";
import "../css/first-block.css";
import { Row, Col } from "antd";

const FirstBlock = () => {
  return (
    <Row className="first-block">
      <Col xs={24} md={12} className="first-block-text">
        <div className="tagline">
          <span>Know</span>
          <span>Your</span>
          <span>Institutes.</span>
        </div>
        <div className="content">
          Browse through various colleges and institutes. Muster up courage to
          become as skillful as the students, studying in these educational
          institutions.
        </div>
      </Col>
      <Col xs={24} md={12} className="first-block-image">
        <img src={front1} alt="Crazzyyy pic" />
      </Col>
    </Row>
  );
};

export default FirstBlock;
