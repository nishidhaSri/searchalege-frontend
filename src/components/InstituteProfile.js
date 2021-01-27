import { Col, Row } from "antd";
import React from "react";
import { withRouter } from "react-router";
import { getColleges, getStudents } from "../auth";
import img from "../assets/insti.png";
import "../css/student-profile.css";
import "../css/institute-profile.css";
import { LoadingOutlined } from "@ant-design/icons";

class InstituteProfile extends React.Component {
  state = {
    colList: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });

    getColleges()
      .then((col) => {
        this.setState({ colList: col.data, loading: false });
      })
      .catch((err) => console.log(err.message));
  }
  render() {
    // console.log(this.props.match.params);
    const stu = this.state.colList.filter(
      (x) => x.name === this.props.match.params.instiName + " "
    );
    const stu1 = this.state.colList.filter(
      (x) => x.name === this.props.match.params.instiName
    );
    let fin = [];
    stu[0] === undefined ? (fin = stu1) : (fin = stu);
    // console.log(fin);

    return (
      <div className="student-profile insti-profile">
        <Row>
          <Col className="first-col" md={10} sm={24}>
            <img src={img} alt="Varied Studnts" />
          </Col>
          <Col className="second-col" md={14} sm={24}>
            {!this.state.loading && fin[0] !== undefined ? (
              <div className="sec-col">
                <div className="student-data">
                  <h1 className="student-name">{fin[0].name}</h1>
                  <p className="helper-text">located in</p>
                  <h1 className="college-name">
                    {fin[0].city}, {fin[0].district}
                  </h1>
                  <h1 className="college-name">
                    {fin[0].state}, {fin[0].pincode}
                  </h1>
                  <p className="helper-text" style={{ margin: "20px 0" }}>
                    offer courses like
                  </p>
                  {fin[0].courses.map((i) => (
                    <h1 className="college-name">{i}</h1>
                  ))}
                  <h1 className="college-name">{fin[0].skills}</h1>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", height: "100%" }}>
                <LoadingOutlined
                  style={{ fontSize: 40, color: "white", margin: "auto" }}
                />
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(InstituteProfile);
