import axios from "axios";
import Store from "../redux/store";
import * as syncActions from "../actions/syncActions";
import { LoginStorageUserDetails } from "../assets/text";
import {getCookie,removeCookie, deleteUserProfile} from "../actions/user"
import history from "./history";

let count = 0;
const http = axios.create({
  // baseURL: "http://localhost:3501/",
  baseURL: "https://stageapp.api.classicinformatics.net/",
});

http.interceptors.request.use(
  function (config) {
    if (JSON.parse(localStorage.getItem(LoginStorageUserDetails))) {
      config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(LoginStorageUserDetails)).token}`
    }
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
    if(error.response.status == 503){
      deleteUserProfile(LoginStorageUserDetails);
      removeCookie('token');
      history.push("/");
    }
    Store.dispatch(syncActions.Error(error));
    Store.dispatch(syncActions.Spinner(false));
    return Promise.resolve(error);
  }
);

export default http;
