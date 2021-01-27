import { Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import { withRouter } from "react-router";

const CourseModal = ({ isOpen, handleOpen, val, colleges, map, history }) => {
  const filteredColleges = colleges.filter((u) => u.courses.includes(val));
  const columns = [
    {
      title: "College Id",
      dataIndex: "cid",
      key: "cid",
      sorter: (a, b) => a.cid - b.cid,
    },
    {
      title: "Name of College",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <a onClick={() => history.push(`/institutes/${text}`)}>{text}</a>
      ),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
  ];
  return (
    <div>
      <Modal
        title="Course wise statistics"
        style={{ top: 20 }}
        visible={isOpen}
        onOk={handleOpen}
        onCancel={handleOpen}
      >
        <h1>
          {((map.get(val) * 100) / 150).toFixed(0)}% of colleges offer {val}
        </h1>
        <p>List of the Colleges</p>
        <Table
          dataSource={filteredColleges}
          columns={columns}
          className="table insti"
          size="small"
          pagination={{ pageSize: 10 }}
        />
      </Modal>
    </div>
  );
};

export default withRouter(CourseModal);
