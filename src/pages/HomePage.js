import React from "react";
import FirstBlock from "../components/first-block";
import Navbar from "../components/navbar";
import SecondBlock from "../components/second-block";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SecondBlock />
    </div>
  );
};

export default HomePage;
