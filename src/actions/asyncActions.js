import Store from "../redux/store";
import * as syncActions from "./syncActions";
import http from "../hoc/axiosClient";
import axios from "axios";

import moment from "moment";
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
  console.log("req", req);
  const data = {
    id: req,
  };
  http
    .get(`/api/auth/getusertools?id=${req}`)
    .then((response) => {
      // console.log(response);
      Store.dispatch(
        syncActions.getUserTools(response.data.sort((a, b) => a.id - b.id))
      );
    })
    .catch((err) => {});
};

export const getWeeklyStatus = (date, filter, pageNumber) => {
  const data = {
    // id: req,
  };
  console.log(
    "Filterzzzzzzzzzzzzzzzzzz",
    encodeURIComponent(filter),
    decodeURIComponent(encodeURIComponent(filter))
  );
  // filter = filter.replaceAll("&", "%26");
  http
    .get(
      `/api/projects/status/weekly?startDate=${moment(date.strt).format(
        "YYYY-MM-DD"
      )}&endDate=${moment(date.end).format(
        "YYYY-MM-DD"
      )}&engagement_type=${encodeURIComponent(
        filter
      )}&limit=20&pageNumber=${pageNumber}`
    )
    .then((response) => {
      Store.dispatch(syncActions.getWeeklyStatus(response.data));
    })
    .catch((err) => {});
};

export const updateWeeklyStatus = (req, res, pageNumber) => {
  // console.log(
  //   `/api/projects/${req.project_id}/status/weekly?startDate=${moment(
  //     res.strt
  //   ).format("YYYY-MM-DD")}&endDate=${moment(res.end).format(
  //     "YYYY-MM-DD"
  //   )}   reeeeeeeeeeeeeeeeeeeee`,
  //   req
  // );
  http
    .put(
      `/api/projects/${req.project_id}/status/weekly?startDate=${moment(
        res.strt
      ).format("YYYY-MM-DD")}&endDate=${moment(res.end).format("YYYY-MM-DD")}`,
      req
    )
    .then((response) => {
      let date = {
        strt: res.strt,
        end: res.end,
      };
      getWeeklyStatus(date, "", pageNumber);
    })
    .catch((err) => {});
};

export const getTimeSheet = (date) => {
  const data = {
    // id: req,
  };
  http
    .get(`/api/projects/timesheet/?monthYear=${date}`)
    .then((response) => {
      console.log(
        "got the response : ",
        date,
        "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        response.data.projects
      );
      const resp = response.data.projects.map((doc, index) => {
        return {
          ...doc,
          key: index,
        };
      });
      console.log("resp data ; ", resp);
      Store.dispatch(syncActions.getTimeSheet(resp));
    })
    .catch((err) => {});
};

export const getTimesheetResources = () => {
  const data = {
    // id: req,
  };
  http
    .get(
      "http://localhost:3500/api/projects/25/resources?monthYear=02-2022&webtracker_project_id=21620"
    )
    .then((response) => {
      console.log("data of resources : ", response.data);

      Store.dispatch(syncActions.getTimesheetResources(response.data));
    })
    .catch((err) => {});
};

export const get_health_status = () => {
  const data = {
    // id: req,
  };
  http
    // .get(`/api/projects/status?startDate=2022-02-05&endDate=2022-02-12`)date.end
    .get(`/api/table/project_health_status`)
    .then((response) => {
      // console.log(
      //   `/api/projects/status/weekly?startDate=${moment(date.strt).format(
      //     "YYYY-MM-DD"
      //   )}&endDate=${moment(date.end).format(
      //     "YYYY-MM-DD"
      //   )}&engagement_type=${filter}zzzzzzzzzzzzzzzzzzzzzzzzzzzzz`
      // );
      console.log(response.data, "HEALTH TYPE");
      Store.dispatch(syncActions.get_health_status(response.data));
    })
    .catch((err) => {});
};
export const get_engagement_types = () => {
  const data = {
    // id: req,
  };
  http
    // .get(`/api/projects/status?startDate=2022-02-05&endDate=2022-02-12`)date.end
    .get(`/api/table/projects/field/engagement_type`)
    .then((response) => {
      // console.log(
      //   `/api/projects/status/weekly?startDate=${moment(date.strt).format(
      //     "YYYY-MM-DD"
      //   )}&endDate=${moment(date.end).format(
      //     "YYYY-MM-DD"
      //   )}&engagement_type=${filter}zzzzzzzzzzzzzzzzzzzzzzzzzzzzz`
      // );
      console.log(response.data, "Engagement TYPE");
      Store.dispatch(syncActions.get_engagement_types(response.data));
    })
    .catch((err) => {});
};
