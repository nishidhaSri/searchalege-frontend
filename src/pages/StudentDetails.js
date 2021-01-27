import React from "react";
import Navbar from "../components/navbar";
import StudentProfile from "../components/StudentProfile";

const StudentDetails = (props) => {
  // console.log(props);
  return (
    <div style={{ background: "#fcaaa9" }}>
      <Navbar />
      <StudentProfile />
    </div>
  );
};

export default StudentDetails;
