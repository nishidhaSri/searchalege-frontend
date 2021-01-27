import React from "react";
import "../css/second-block.css";
import front3 from "../assets/front3.png";
import { Row, Col, Button } from "antd";
import { withRouter } from "react-router";

const SecondBlock = ({ history }) => {
  return (
    <div className="second-block">
      <div className="second-block-content">
        Search.a.<span>(Col)</span>.lege
      </div>
      <Row className="under-data">
        <Col sm={24} md={10} className="content">
          <div>
            Identifying right college and course is extremely valuable. Doing
            what we love brings joy everyday. Choosing the course to study is
            the first stepping stone in one's life
          </div>
          <div className="second-block-buttons">
            <Button onClick={() => history.push("/institute/dashboard")}>
              Institutes
            </Button>
            <Button onClick={() => history.push("/students")}>Students</Button>
          </div>
        </Col>
        <Col sm={24} md={10}>
          <img style={{ maxWidth: "100%" }} src={front3} alt="Craazzyy" />
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(SecondBlock);
