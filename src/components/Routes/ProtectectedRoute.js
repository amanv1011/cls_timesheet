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
let bool = true;
function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = getUserProfile(LoginStorageUserDetails);

  if (bool) {
    Store.dispatch(syncActions.UserProfile(JSON.parse(isAuthenticated)));
    console.log(Store.getState())
    if(Store.getState().user.userDetails){
    http.defaults.headers.common['Authorization'] = Store.getState().user.userDetails.token;
    }

    bool = false;
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} userData={isAuthenticated} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
