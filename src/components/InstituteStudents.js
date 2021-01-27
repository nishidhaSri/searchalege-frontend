import { LoadingOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";
import { withRouter } from "react-router";
import { getColleges, getStudents } from "../auth";

class InstituteStudents extends React.Component {
  state = {
    loading: false,
    stuList: [],
    colList: [],
  };
  componentDidMount() {
    this.setState({ loading: true });
    getStudents()
      .then((stu) => {
        this.setState({ stuList: stu.data, loading: false });
      })
      .catch((err) => console.log(err));

    getColleges()
      .then((col) => {
        this.setState({ colList: col.data, loading: false });
      })
      .catch((err) => console.log(err.message));
  }
  render() {
    let filteredStudents = [];
    // console.log(this.state.colList);
    let fil = this.state.colList.filter(
      (c) => c.name === this.props.match.params.instiName
    );
    let similarColleges = [];
    if (fil[0] !== undefined) {
      filteredStudents = this.state.stuList.filter((i) => i.cid === fil[0].cid);
      // console.log(filteredStudents);
      const { city, state, region, name } = fil[0];

      similarColleges = this.state.colList.filter(
        (c) => c.city === city && c.name !== name
      );
      if (similarColleges.length < 6) {
        let sim = this.state.colList.filter(
          (c) => c.city !== city && c.state === state && c.name !== name
        );
        for (let i = 0; i < 5 - similarColleges.length; i++) {
          similarColleges.push(sim[i]);
        }
      }

      if (similarColleges.length < 6) {
        let sim = this.state.colList.filter(
          (c) =>
            c.city !== city &&
            c.state !== state &&
            c.region === region &&
            c.name !== name
        );
        for (let i = 0; i < 5 - similarColleges.length; i++) {
          similarColleges.push(sim[i]);
        }
      }
    }

    const columns = [
      {
        title: "Student Id",
        dataIndex: "sid",
        key: "id",
        sorter: (a, b) => a.sid - b.sid,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        ellipsis: true,
        render: (text) => (
          <a onClick={() => this.props.history.push(`/students/${text}`)}>
            {text}
          </a>
        ),
      },
      {
        title: "Batch Year",
        dataIndex: "yearOfBatch",
        key: "year",
        sorter: (a, b) => a.yearOfBatch - b.yearOfBatch,
      },
    ];
    const columns1 = [
      {
        title: "College Id",
        dataIndex: "cid",
        key: "id",
        sorter: (a, b) => a.sid - b.sid,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        ellipsis: true,
        render: (text) => (
          <a onClick={() => this.props.history.push(`/institutes/${text}`)}>
            {text}
          </a>
        ),
      },
      {
        title: "City",
        dataIndex: "city",
        key: "city",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
      {
        title: "Region",
        dataIndex: "region",
        key: "region",
      },
    ];
    return (
      <div className="student-table">
        <h1 style={{ color: "#000" }} className="college-name">
          Students of this College
        </h1>
        {this.state.loading ? (
          <div style={{ display: "flex" }}>
            <LoadingOutlined style={{ fontSize: 40, margin: "30px auto" }} />
          </div>
        ) : (
          <React.Fragment>
            <Table
              dataSource={filteredStudents}
              columns={columns}
              className="table"
              size="small"
              pagination={{ pageSize: 5 }}
            />
            <h1 style={{ color: "#000" }} className="college-name">
              Nearby similar colleges
            </h1>
            <Table
              dataSource={similarColleges}
              columns={columns1}
              className="table similar-table"
              size="small"
              pagination={{ pageSize: 5 }}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(InstituteStudents);
