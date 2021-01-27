import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage";
import "./css/index.css";
import "antd/dist/antd.css";
import InstituteDashboard from "./pages/InstituteDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentDetails from "./pages/StudentDetails";
import InstituteDetails from "./pages/InstituteDetails";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/institute/dashboard" component={InstituteDashboard} />
      <Route exact path="/students" component={StudentDashboard} />
      <Route exact path="/students/:stuName" component={StudentDetails} />
      <Route exact path="/institutes/:instiName" component={InstituteDetails} />
    </Switch>
  );
};

export default App;
