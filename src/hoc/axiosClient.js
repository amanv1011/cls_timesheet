import axios from "axios";
import Store from "../redux/store";
import * as syncActions from "../actions/syncActions";
import { LoginStorageUserDetails } from "../assets/text";
import {getCookie,removeCookie, deleteUserProfile} from "../actions/user"
import history from "./history";

const http = axios.create({
  // baseURL: "http://localhost:3501/",
  baseURL: "https://stagea/pp.api.classicinformatics.net/",
  // headers: {
    // Authorization:  `Bearer ${
    //   getCookie('token')
    // }`
  // baseURL: process.env.REACT_APP_API_URL_HOSTED,
});

// Authorization: "Bearer ryJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MCIsImVtYWlsIjoic25vdy53aGl0ZUBjbGFzc2ljaW5mb3JtYXRpY3MuY29tIiwiaWF0IjoxNjUxNDc3MzIyLCJleHAiOjE2NTE2NTAxMjJ9.LsYIHrIn2BfvlZ5BQGe5uBG4oqXgDAJaTnKQKEHVGtI"

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

    Store.dispatch(syncActions.Spinner(false));
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response error",error.status);
    if(error.status == 503){
      console.log("token error")
      deleteUserProfile(LoginStorageUserDetails);
      removeCookie('token');
      history.push("/");
    }
    Store.dispatch(syncActions.Error(error));
    Store.dispatch(syncActions.Spinner(false));
    return Promise.reject(error);
  }
);

export default http;
