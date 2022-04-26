import axios from "axios";
import Store from "../redux/store";
import * as syncActions from "../actions/syncActions";
import { LoginStorageUserDetails } from "../assets/text";
const http = axios.create({
  // baseURL: "http://localhost:3500/",
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
    Authorization: `Bearer ${JSON.parse(localStorage.getItem(LoginStorageUserDetails)).value.token}`,
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
    Store.dispatch(syncActions.Error(error));
    Store.dispatch(syncActions.Spinner(false));
    return Promise.reject(error);
  }
);

export default http;
