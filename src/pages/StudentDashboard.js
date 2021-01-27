import React from "react";
import Navbar from "../components/navbar";
import Students from "../components/Students";

const StudentDashboard = () => {
  return (
    <div style={{ background: "#fafafa" }}>
      <Navbar />
      <Students />
    </div>
  );
};

export default StudentDashboard;
