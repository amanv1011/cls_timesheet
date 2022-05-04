import axios from "axios";
import Store from "../redux/store";
import * as syncActions from "../actions/syncActions";
import { LoginStorageUserDetails } from "../assets/text";

const http = axios.create({
  baseURL: "https://stageapp.api.classicinformatics.net/",
});

if (JSON.parse(localStorage.getItem(LoginStorageUserDetails))) {
  http.defaults.headers.common = {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem(LoginStorageUserDetails)).token
    }`,
  };
}

http.interceptors.request.use(
  function (config) {
    Store.dispatch(syncActions.Spinner(true));
    return config;
  },
  function (error) {
    Store.dispatch(syncActions.Error(error));
    Store.dispatch(syncActions.Spinner(false));
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    Store.dispatch(syncActions.Spinner(false));
    return response;
  },
  function (error) {
    Store.dispatch(syncActions.Error(error));
    Store.dispatch(syncActions.Spinner(false));
    return Promise.reject(error);
  }
);

export default http;
