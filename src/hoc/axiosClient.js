import axios from "axios";
import Store from "../redux/store";
import * as syncActions from "../actions/syncActions";
import { LoginStorageUserDetails } from "../assets/text";
import {removeCookie, deleteUserProfile} from "../actions/user"
import history from "./history";

const http = axios.create({
  // baseURL: "http://localhost:3501/",
  baseURL: "https://stageapp.api.classicinformatics.net/",
  // headers: {
  //   Authorization:
  //     "Bearer " + Object.keys(Store.getState().user).length > 0
  //       ? Store.getState().user.userDetails.token
  //       : "",
  // },
  // baseURL: process.env.REACT_APP_API_URL_HOSTED,
});
if (JSON.parse(localStorage.getItem(LoginStorageUserDetails))) {
  http.defaults.headers.common = {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem(LoginStorageUserDetails)).token
    }`,
  };
}

// console.log("token@@@", Store.getState().user.userDetails.token.toString());
// console.log(Object.keys(Store.getState().user).length > 0);
// http.defaults.headers.post["Content-Type"] =
//   // "application/x-www-form-urlencoded";
//   "application/json";
// console.log("before headers$$$");
// if (Object.keys(Store.getState().user).length > 0) {
//   console.log("state log%%%");
//   axios.defaults.headers = {
//     Authorization: "Bearer " + Store.getState().user.userDetails.token,
//   };
// }

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // useHistory().push("/dashboard");
    Store.dispatch(syncActions.Spinner(true));
    return config;
  },
  function (error) {
    // Do something with request error
    Store.dispatch(syncActions.Error(error));
    Store.dispatch(syncActions.Spinner(false));
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //LOGOUT
    if(response.status == 503){
      deleteUserProfile(LoginStorageUserDetails);
      removeCookie('token');
      history.push("/");
    }
    Store.dispatch(syncActions.Spinner(false));
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  
    Store.dispatch(syncActions.Error(error));
    Store.dispatch(syncActions.Spinner(false));
    return Promise.reject(error);
  }
);

export default http;
