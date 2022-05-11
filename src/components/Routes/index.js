import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/weekly-status" exact component={WeeklyStatus} />
      <ProtectedRoute path="/dashboard" exact component={Dashboard} />
      <ProtectedRoute path="/hours-logged" exact component={HoursLogged} />
      <ProtectedRoute path="/projects" exact component={Projects} />
      <ProtectedRoute path="/reports" exact component={Report} />
      <ProtectedRoute path="/resources" exact component={Resource} />
      <ProtectedRoute path="/settings" exact component={Settings} />
      <ProtectedRoute path="/timesheet" exact component={Timesheet} />
      <ProtectedRoute path="/" component={LandingPage} />
    </BrowserRouter>
  );
}

export default Routes;
