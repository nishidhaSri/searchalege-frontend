import React from "react";
import BarAndPie from "../components/BarAndPie";
import InstiFirstBlock from "../components/InstiFirstBlock";
import Navbar from "../components/navbar";
import StatesPie from "../components/StatesPie";

const InstituteDashboard = () => {
  return (
    <div className="institute-dashboard">
      <Navbar />
      <InstiFirstBlock />
      <BarAndPie />
      <StatesPie />
    </div>
  );
};

export default InstituteDashboard;
