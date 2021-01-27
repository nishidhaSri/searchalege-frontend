import React, { useState } from "react";
import "../css/navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { withRouter } from "react-router";

const Navbar = ({ history }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="navbar">
      <a
        href="/institute/dashboard"
        className="navlinks hvr-underline-from-center"
      >
        Institutes
      </a>
      <div className="title" onClick={() => history.push("/")}>
        <span className="s-title">S</span>
        <span>earchalege</span>
      </div>
      <a href="/students" className="navlinks hvr-underline-from-center">
        Students
      </a>
      <MenuOutlined onClick={showDrawer} />
      <Drawer
        title=""
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <a href="/institute/dashboard" className="navlinks">
          Institutes
        </a>
        <a href="/students" className="navlinks">
          Students
        </a>
      </Drawer>
    </div>
  );
};

export default withRouter(Navbar);
