import axios from "axios";
import { API_ENDPOINTS } from "../../appConfig";
import {
  SET_HOURSLOGGED_DATA,
  SET_HOURSLOGGED_DATA_ERR,
  SET_RES_HOURSLOGGED_DATA,
  SET_RES_HOURSLOGGED_DATA_ERR,
  SET_MODAL_RES_DATA,
  SET_MODAL_RES_ERR,
  SET_RES_NAME,
  SET_RES_NAME_ERR,
  SET_BILL_HOUR,
  SET_BILL_HOUR_ERR,
  SET_DEL_RES,
  SET_DEL_RES_ERR,
} from "../type";

export const getHoursloggedData = (localDate) => {
  const date = "08/2022";

  return async function getHoursloggedDataThunk(dispatch) {
    const requestUrl = `${API_ENDPOINTS.hourslogged}${localDate}&id=18`;
    try {
      const response = await axios.get(requestUrl);

      dispatch({ type: SET_HOURSLOGGED_DATA, payload: response.data });
    } catch (err) {
      dispatch({ type: SET_HOURSLOGGED_DATA_ERR, payload: err });
    }
  };
};

export const getResourcesHoursloggedData = (
  webTrackerId,
  projectID,
  startDate
) => {
  console.log("iiiiiiiiiiiiiiiiiiiiii", webTrackerId, projectID, startDate);

  return async function getResourcesHoursloggedDataThunk(dispatch) {
    const requestUrl = `${API_ENDPOINTS.resourceHoursLogged}project_id=${projectID}&webtracker_project_id=${webTrackerId}&date=${startDate}`;
    try {
      const response = await axios.get(requestUrl);
      console.log(response.data, "dataaaaaaaaaaaaaaaaaaaaaa");

      dispatch({ type: SET_RES_HOURSLOGGED_DATA, payload: response.data });
    } catch (err) {
      dispatch({ type: SET_RES_HOURSLOGGED_DATA_ERR, payload: err });
    }
  };
};

export const getModalResourcesData = (id) => {
  return async function getModalResourcesDataThunk(dispatch) {
    const requestUrl = `${API_ENDPOINTS.modalResources}`;
    try {
      const response = await axios.get(requestUrl);
      console.log(response.data, "Modalllllllll");
      dispatch({ type: SET_MODAL_RES_DATA, payload: response.data });
    } catch (err) {
      dispatch({ type: SET_MODAL_RES_ERR, payload: err });
    }
  };
};

export const updateResourceName = (user_id, pro_id) => {
  return async function updateResourceNameThunk(dispatch) {
    console.log("@@@@@@@@@@@", user_id, pro_id);

    const requestUrl = `${API_ENDPOINTS.newResources}user_id=${user_id}&webtracker_project_id=${pro_id}`;
    try {
      const response = await axios.put(requestUrl);
      console.log(response.data.message, "new user updated");

      dispatch({ type: SET_RES_NAME, payload: response.data.message });
    } catch (err) {
      dispatch({ type: SET_RES_NAME_ERR, payload: err });
    }
  };
};

export const updateBilledHour = (obj) => {
  console.log(obj);
  return async function updateBilledHourThunk(dispatch) {
    const requestUrl = `${API_ENDPOINTS.billedHours}project_id=${obj.project_id}&start_date=${obj.start_date}&projectName=${obj.projectName}&user_id=${obj.user_id}&logged_time=${obj.logged_time}&billed_hours=${obj.billed_hours}`;
    try {
      const response = await axios.put(requestUrl);
      console.log(response.data, "billed hour updated");
      dispatch({ type: SET_BILL_HOUR, payload: response.data.message });
    } catch (err) {
      dispatch({ type: SET_BILL_HOUR_ERR, payload: err });
    }
  };
};

//to delete
export const deleteResource = (userId, webtracker_project_id) => {
  return async function deleteResourceThunk(dispatch) {
    console.log("###########", userId, webtracker_project_id);

    const requestUrl = `${API_ENDPOINTS.deleteResources}userId=${userId}&webtracker_project_id=${webtracker_project_id}`;
    try {
      const response = await axios.delete(requestUrl);
      console.log(response.data.message, "confirm");
      dispatch({ type: SET_DEL_RES, payload: response.data.message });
    } catch (err) {
      dispatch({ type: SET_DEL_RES_ERR, payload: err });
    }
  };
};
