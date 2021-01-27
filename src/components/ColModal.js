import { Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import { withRouter } from "react-router";

const ColModal = ({ isOpen, colleges, handleOpen, history }) => {
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
    <div className="student-table">
      <Modal
        title=""
        style={{ top: 20 }}
        visible={isOpen}
        onOk={handleOpen}
        onCancel={handleOpen}
      >
        <p>List of all Colleges</p>
        <Table
          dataSource={colleges}
          columns={columns}
          className="table insti"
          size="small"
          pagination={{ pageSize: 10 }}
        />
      </Modal>
    </div>
  );
};

export default withRouter(ColModal);
