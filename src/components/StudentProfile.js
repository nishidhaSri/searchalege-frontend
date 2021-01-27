import { Col, Row } from "antd";
import React from "react";
import { withRouter } from "react-router";
import { getColleges, getStudents } from "../auth";
import img from "../assets/stu.png";
import "../css/student-profile.css";
import { LoadingOutlined } from "@ant-design/icons";

class StudentProfile extends React.Component {
  state = {
    stuList: [],
    colList: [],
    loading1: false,
    loading2: false,
  };
  componentDidMount() {
    this.setState({ loading1: true, loading2: true });
    getStudents()
      .then((stu) => {
        this.setState({ stuList: stu.data, loading1: false });
      })
      .catch((err) => console.log(err));

    getColleges()
      .then((col) => {
        this.setState({ colList: col.data, loading2: false });
      })
      .catch((err) => console.log(err.message));
  }
  render() {
    const stu = this.state.stuList.filter(
      (x) => x.name === this.props.match.params.stuName + " "
    );
    const stu1 = this.state.stuList.filter(
      (x) => x.name === this.props.match.params.stuName
    );
    let fin = [];
    stu[0] === undefined ? (fin = stu1) : (fin = stu);
    // console.log(fin);

    return (
      <div className="student-profile">
        <Row>
          <Col className="first-col" md={10} sm={24}>
            <img src={img} alt="Varied Studnts" />
          </Col>
          <Col className="second-col" md={14} sm={24}>
            {!this.state.loading1 &&
            !this.state.loading2 &&
            fin[0] !== undefined ? (
              <div className="sec-col">
                <div className="student-data">
                  <h1 className="student-name">{fin[0].name}</h1>
                  <p className="helper-text">studying in</p>
                  {this.state.colList
                    .filter((i) => i.cid === fin[0].cid)
                    .map((c) => (
                      <h1
                        className="college-name"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          this.props.history.push(`/institutes/${c.name}`)
                        }
                      >
                        {c.name}
                      </h1>
                    ))}
                  <h1 className="college-name">Batch {fin[0].yearOfBatch}</h1>
                  <p className="helper-text" style={{ margin: "20px 0" }}>
                    posses skills like
                  </p>
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

export default withRouter(StudentProfile);
