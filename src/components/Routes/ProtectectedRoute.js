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
import {getCookie} from "../../actions/user"
import {InactiveToolsStorageName} from "../../assets/text"

let bool = true;
function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isLoggedIn = getCookie('token');
  const isAuthenticated = getUserProfile(LoginStorageUserDetails);
  var restrictedTools = JSON.parse(localStorage.getItem(InactiveToolsStorageName))

  if (bool) {
    Store.dispatch(syncActions.UserProfile(JSON.parse(isAuthenticated)));
    bool = false;
  
  }
  // let restrictedTools = [
  //   "/weekly-status"
  // ]
  // console.log("restOfProps",restOfProps)
  // console.log("path",restOfProps.path)

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn && !restrictedTools.includes(restOfProps.path)? (
          <Component {...props} userData={isAuthenticated} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default ProtectedRoute;
