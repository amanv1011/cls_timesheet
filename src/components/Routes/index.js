import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ProtectedRoute from "./ProtectectedRoute";
import Dashboard from "../app/Dashboard";
import LandingPage from "../app/LandingPage";
import HoursLogged from "../app/HoursLogged";
import Projects from "../app/Projects";
import Report from "../app/Report";
import Resource from "../app/Resource";
import Settings from "../app/Settings";
import Timesheet from "../app/Timesheet";
import Login from "../Login";
import WeeklyStatus from "../app/WeeklyStatus";
import {getCookie} from "../../actions/user"
import http from "../../hoc/axiosClient";
// import {InactiveToolsStorageName} from "../../assets/text"
function App() {
  var isLoggedIn = getCookie("token");
  if (getCookie('token')) {
    http.defaults.headers.common = {
      Authorization: `Bearer ${
        getCookie('token')
      }`,
    };
  }
  return (
    <>
      <Router>
        {/* <Switch> */}
        <ProtectedRoute path="/weekly-status" exact onEnter={() => console.log("Entered weekly status")} component={WeeklyStatus} />
        <ProtectedRoute path="/dashboard" exact component={Dashboard} />
        {/* <ProtectedRoute path="/" exact component={LandingPage} /> */}
        <ProtectedRoute path="/hours-logged" exact component={HoursLogged} />
        <ProtectedRoute path="/projects" exact component={Projects} />
        <ProtectedRoute path="/reports" exact component={Report} />
        <ProtectedRoute path="/resources" exact component={Resource} />
        <ProtectedRoute path="/settings" exact component={Settings} />
        <ProtectedRoute path="/timesheet" exact component={Timesheet} />
        <Route path="/" exact component={ isLoggedIn ? LandingPage : Login} />

        {/* <Redirect to="/login" /> */}
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;

