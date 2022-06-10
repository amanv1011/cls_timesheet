import Store from "../redux/store";
import * as syncActions from "./syncActions";
import http from "../hoc/axiosClient";
import axios from "axios";
import React from "react";
// const rowData = document.getElementById("row");
import moment from "moment";
export const Logout = (req, res) => {};
export const getTools = (req, res) => {
  http
    .get(`/api/auth/getusertools?id=${req}`)
    .then((response) => {
      Store.dispatch(
        syncActions.getUserTools(response.data.sort((a, b) => a.id - b.id))
      );
    })
    .catch((err) => {
      throw err;
    });
};

export const getWeeklyStatus = async (
  strtDate,
  endDate,
  filter,
  pageNumber
) => {
  return http
    .get(
      `/api/projects/status/weekly?startDate=${moment(strtDate).format(
        "YYYY-MM-DD"
      )}&endDate=${moment(endDate).format(
        "YYYY-MM-DD"
      )}&engagement_type=${encodeURIComponent(
        filter
      )}&limit=10&pageNumber=${pageNumber}`
    )
    .then((response) => {
      Store.dispatch(syncActions.getWeeklyStatus(response.data));
      return;
    })
    .catch((err) => {});
};

export const updateWeeklyStatus = (
  data,
  strtDate,
  endDate,
  pageNumber,
  engagement_type
) => {
  http
    .put(
      `/api/projects/${data.project_id}/status/weekly?startDate=${moment(
        strtDate
      ).format("YYYY-MM-DD")}&endDate=${moment(endDate).format("YYYY-MM-DD")}`,
      data
    )
    .then((response) => {
      getWeeklyStatus(strtDate, endDate, engagement_type, pageNumber);
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
      Store.dispatch(syncActions.getTimesheetResources(response.data));
    })
    .catch((err) => console.log(err));
};

export const getWeeklyStatusProjects = async (
  searchquery,
  eT,
  id,
  pageNumber
) => {
  http
    .get(
      `/api/projects/status/weekly/searchtable?searchquery=${encodeURIComponent(
        searchquery
      )}&project_owner_id=${id}&engagement_type=${encodeURIComponent(
        eT
      )}&limit=10&pageNumber=${pageNumber}`
    )
    .then((response) => {
      Store.dispatch(syncActions.getWeeklyStatus(response.data));
    })
    .catch((err) => {});
};

export const get_health_status = () => {
  http
    .get(`/api/table/project_health_status`)
    .then((response) => {
      Store.dispatch(syncActions.get_health_status(response.data));
    })
    .catch((err) => {});
};
export const get_engagement_types = (id) => {
  http
    .get(`/api/table/projects/field/engagement_type?id=${id}`)
    .then((response) => {
      Store.dispatch(syncActions.get_engagement_types(response.data));
    })
    .catch((err) => {});
};

// hourslogged
export const getHoursLogged = async (date) => {
  console.log("&&&&&&&&&", date);
  http
    .get(`/api/hourslog/hourslog?monthYear=${date}&id=18`)
    .then((response) => {
      console.log("hl response:", response);
      Store.dispatch(syncActions.getHoursLogged(response.data));
    })
    .catch((err) => console.log(err));
};
