import Store from "../redux/store";
import * as syncActions from "./syncActions";
import http from "../hoc/axiosClient";

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
    .get(`/api/projects/status?startDate=${req}&endDate=${res}`)
    .then((response) => {
      console.log(req, res, "zzzzzzzzzzzz");
      Store.dispatch(syncActions.getWeeklyStatus(response.data));
    })
    .catch((err) => {});
};
