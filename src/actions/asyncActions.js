import Store from "../redux/store";
import * as syncActions from "./syncActions";
import http from "../hoc/axiosClient";
import axios from "axios";
export const Authenticate = (req) => {
  //   console.log("in authenicate", req);
  //   const data = {
  //     email: req.profileObj.email,
  //   };
  //   axios
  //     .post(`http://localhost:3500/api/auth/checkUser`, data)
  //     .then((response) => {
  //       console.log(response);
  //       //   Store.dispatch(syncActions.logout(response.data));
  //     })
  //     .catch((err) => {});
};
export const getTools = (req, res) => {
  const data = {
    id: req,
  };
  http
    .post(`/api/auth/getusertools`, data)
    .then((response) => {
      // console.log(response);
      Store.dispatch(syncActions.getUserTools(response.data));
    })
    .catch((err) => {});
};

export const getWeeklyStatus = (req, res) => {
  const data = {
    id: req,
  };
  http
    // .get(`/api/projects/status?startDate=2022-02-05&endDate=2022-02-12`)
    .get(`/api/projects/status/weekly?startDate=${req}&endDate=${res}`)
    .then((response) => {
      // console.log(req, res, "zzzzzzzzzzzz");
      console.log("UPDATES");
      Store.dispatch(syncActions.getWeeklyStatus(response.data));
    })
    .catch((err) => {});
};

export const updateWeeklyStatus = (req, res) => {
  // console.log(responsez, "updatinggggggggggggg", req);
  http
    .put(
      `/api/projects/${req.project_id}/status/weekly?startDate=${res.strt}&endDate=${res.end}`,
      req
    )
    .then((response) => {
      getWeeklyStatus(res.strt, res.end);
    })
    .catch((err) => {});
};
