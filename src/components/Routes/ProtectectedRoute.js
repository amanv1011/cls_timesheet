import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  storeUserProfile,
  getUserProfile,
  deleteUserProfile,
} from "../../actions/user";
import {LoginStorageUserDetails} from "../../assets/text"
import http from "../../hoc/axiosClient"
import * as syncActions from "../../actions/syncActions";
import Store from "../../redux/store";
import {getCookie, removeCookie} from "../../actions/user"
import {InactiveToolsStorageName} from "../../assets/text"

let bool = true;
const dashboardTools = ["/dashboard","/hours-logged","/projects","/reports","/resources","/settings","/timesheet"]
var ActiveTools = JSON.parse(localStorage.getItem('ActiveToolsName'))
// console.log("a-tools",localStorage.getItem('ActiveToolsName'));
// var ActiveTools=["/weekly-status"];
function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isLoggedIn = getCookie('token');
  const isAuthenticated = getUserProfile(LoginStorageUserDetails);
  var restrictedTools = JSON.parse(localStorage.getItem(InactiveToolsStorageName))

  if (bool) {
    Store.dispatch(syncActions.UserProfile(JSON.parse(isAuthenticated)));
    bool = false;
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn && !restrictedTools.includes(restOfProps.path) && Tools(restOfProps.path)? (
          <Component {...props} userData={isAuthenticated} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default ProtectedRoute;

function Tools(paths) {
 if((ActiveTools.includes(paths) && dashboardTools.includes(paths)) || (dashboardTools.includes(paths) && ActiveTools.includes("/dashboard")) || ActiveTools.includes(paths)){
  return true
 }
 return false;
}