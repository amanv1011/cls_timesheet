import axios from "axios";
import Store from "../redux/store";
import * as syncActions from "../actions/syncActions";

const http = axios.create({
  // baseURL: "http://localhost:3500/",
  baseURL: "https://app.api.classicinformatics.net/",
});
http.defaults.headers.post["Content-Type"] =
  // "application/x-www-form-urlencoded";
  "application/json";

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    Store.dispatch(syncActions.Spinner(true));
    return config;
  },
  function (error) {
    // Do something with request error
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
    Store.dispatch(syncActions.Spinner(false));
    return Promise.reject(error);
  }
);

export default http;
