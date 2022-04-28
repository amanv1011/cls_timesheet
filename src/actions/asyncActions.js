import Store from "../redux/store";
import * as syncActions from "./syncActions";
import http from "../hoc/axiosClient";
import axios from "axios";
// const rowData = document.getElementById("row");

import moment from "moment";
export const Logout = (req,res) => {
  
};
export const getTools = (req, res) => {
  http
    .get(`/api/auth/getusertools?id=${req}`)
    .then((response) => {
      Store.dispatch(
        syncActions.getUserTools(response.data.sort((a, b) => a.id - b.id))
      );
    })
    .catch((err) => {});
};

export const getWeeklyStatus = (date, filter, pageNumber) => {
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
      // console.log("'''''''''''''''''''''''first'''''''''''''''''''''''",response)
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
  http
    .get(`/api/projects/timesheet/?monthYear=${date}`)
    .then((response) => {
      const resp = response.data.projects.map((doc, index) => {
        return {
          ...doc,
          key: index,
        };
      });
      Store.dispatch(syncActions.getTimeSheet(resp));
    })
    .catch((err) => {});
};

export const getTimesheetResources = (date, id) => {
  http
    .get(
      `/api/projects/25/resources?monthYear=${date}&webtracker_project_id=${id}`
    )
    .then((response) => {
      // console.log("data of resources : ", response.data, date, id);

      Store.dispatch(syncActions.getTimesheetResources(response.data));
    })
    .catch((err) => console.log(err));
};

export const getWeeklyStatusProjects = (name, id) => {
  // console.log(name,id,"?????????????????????????????????")
  http
    .get(`/api/projects/status/weekly/searchtable?searchquery=${name}&id=${id}`)
    .then((response) => {
      // console.log("$$$$$$$$$$$$$$$$$$$$", response.data);
      Store.dispatch(syncActions.getWeeklyStatus(response.data));
    })
    .catch((err) => {
      // console.log("error found", err);
    });
};

export const get_health_status = () => {
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
      Store.dispatch(syncActions.get_health_status(response.data));
    })
    .catch((err) => {});
};
export const get_engagement_types = () => {
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
      Store.dispatch(syncActions.get_engagement_types(response.data));
    })
    .catch((err) => {});
};
