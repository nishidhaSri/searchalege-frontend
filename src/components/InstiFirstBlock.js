import React from "react";
import { Col, Row } from "antd";
import {
  SolutionOutlined,
  TrophyOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "../css/instifirstblock.css";

const InstiFirstBlock = () => {
  return (
    <Row className="insti-first-block">
      <Col xs={24} md={12} lg={6}>
        <div className="dash-block" style={{ background: "#01bd84" }}>
          <BookOutlined style={{ color: "#01bd84" }} />
          <span>150+ Institutes</span>
        </div>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <div className="dash-block" style={{ background: "#3a9fea" }}>
          <UserOutlined style={{ color: "#3a9fea" }} />
          <span>12000+ Students</span>
        </div>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <div className="dash-block" style={{ background: "#e3516b" }}>
          <SolutionOutlined style={{ color: "#e3516b" }} />
          <span>15+ Courses</span>
        </div>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <div className="dash-block" style={{ background: "#f39809" }}>
          <TrophyOutlined style={{ color: "#f39809" }} />
          <span>1 Solution</span>
        </div>
      </Col>
    </Row>
  );
};

export default InstiFirstBlock;
