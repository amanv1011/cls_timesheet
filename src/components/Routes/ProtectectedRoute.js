import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getUserProfile } from "../../actions/user";
import { LoginStorageUserDetails } from "../../assets/text"
import * as syncActions from "../../actions/syncActions";
import Store from "../../redux/store";
import { getCookie } from "../../actions/user"
import { InactiveToolsStorageName, ActiveToolsStorageName } from "../../assets/text"


const dashboardTools = ["/dashboard", "/hours-logged", "/projects", "/reports", "/resources", "/settings", "/timesheet"]
var ActiveTools = JSON.parse(localStorage.getItem(ActiveToolsStorageName)) || []
var restrictedTools = JSON.parse(localStorage.getItem(InactiveToolsStorageName)) || []

let bool = false
function ProtectedRoute({ component: Component, ...restOfProps }) {

  const isLoggedIn = getCookie('token');
  const userDetails = getUserProfile(LoginStorageUserDetails) || {}
  if (!bool) {
    if (Object.keys(userDetails).length > 0) Store.dispatch(syncActions.UserProfile(JSON.parse(userDetails)))
    bool = true
  }
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn
          ? window.location.pathname === '/login'
            ? <Redirect to="/" />
            : restOfProps.path === '/' || Tools(restOfProps.path)
              ? <Component {...props} userData={userDetails} />
              : <Redirect to="/" />
          : <Redirect push to="/login" />
      }
    />
  );
}

export default ProtectedRoute;

function Tools(paths) {
  if (!restrictedTools.includes(paths) && ((ActiveTools.includes(paths) && dashboardTools.includes(paths)) || (dashboardTools.includes(paths) && ActiveTools.includes("/dashboard")) || ActiveTools.includes(paths))) {
    return true
  }
  return false;
}