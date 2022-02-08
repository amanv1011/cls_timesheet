import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  storeUserProfile,
  getUserProfile,
  deleteUserProfile,
} from "../../actions/user";

import * as syncActions from "../../actions/syncActions";
import Store from "../../redux/store";
let bool = true;
function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = getUserProfile("user");
  // console.log("isAuthenticated", isAuthenticated);

  if (bool) {
    Store.dispatch(syncActions.UserProfile(JSON.parse(isAuthenticated)));
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
