import React from "react";
import InstituteProfile from "../components/InstituteProfile";
import InstituteStudents from "../components/InstituteStudents";
import Navbar from "../components/navbar";

const InstituteDetails = () => {
  return (
    <div style={{ background: "#fcaaa9" }}>
      <Navbar />
      <InstituteProfile />
      <InstituteStudents />
    </div>
  );
};

export default InstituteDetails;
