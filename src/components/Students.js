import { LoadingOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";
import { withRouter } from "react-router";
import { getStudents } from "../auth";
import "../css/students.css";

class Students extends React.Component {
  state = {
    stuList: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    getStudents()
      .then((stu) => this.setState({ stuList: stu.data, loading: false }))
      .catch((err) => console.log(err));
  }
  render() {
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
    return (
      <div className="student-table">
        <h1 className="college-name" style={{ color: "#000" }}>
          All Students
        </h1>
        {this.state.loading ? (
          <div style={{ display: "flex" }}>
            <LoadingOutlined style={{ fontSize: 40, margin: "30px auto" }} />
          </div>
        ) : (
          <Table
            dataSource={this.state.stuList}
            columns={columns}
            className="table"
            size="small"
            pagination={{ pageSize: 25 }}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Students);
