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
} from "../type";

export const getHoursloggedData = (localDate) => {
  return async function getHoursloggedDataThunk(dispatch) {
    const requestUrl = `${API_ENDPOINTS.hourslogged}${localDate}&id=18`;
    try {
      // console.log("getinggggggggggggggg", localDate);
      const response = await axios.get(requestUrl);

      dispatch({ type: SET_HOURSLOGGED_DATA, payload: response.data });
    } catch (err) {
      dispatch({ type: SET_HOURSLOGGED_DATA_ERR, payload: err });
    }
  };
};

export const getResourcesHoursloggedData = (id) => {
  return async function getResourcesHoursloggedDataThunk(dispatch) {
    console.log("iiiiiiiiiiiiiiiiiiiiii", id);

    const requestUrl = `${API_ENDPOINTS.resourceHoursLogged}webtracker_project_id=${id}&start_date=2022-06-15&end_date=2022-06-30`;
    // const requestUrl = `/api/hourslog/hourslog/data?webtracker_project_id=21562 &start_date=2022-06-15&end_date=2022-06-30`;
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
    // console.log("iiiiiiiiiiiiiiiiiiiiii", id);

    const requestUrl = `${API_ENDPOINTS.modalResources}`;
    try {
      const response = await axios.get(requestUrl);
      console.log(response.data, "Modalllllllll dataaaaaaaaaaaaaaaaaaaaaa");
      dispatch({ type: SET_MODAL_RES_DATA, payload: response.data });
    } catch (err) {
      dispatch({ type: SET_MODAL_RES_ERR, payload: err });
    }
  };
};

export const updateResourceName = (user_id, pro_id) => {
  return async function updateResourceNameThunk(dispatch) {
    console.log("iiiiiiiiiiiiiiiiiiiiii", user_id, pro_id);

    const requestUrl = `${API_ENDPOINTS.newResources}user_id=${user_id}&project_id=${pro_id}`;
    try {
      const response = await axios.put(requestUrl);
      console.log(response.data.message, "new user updated");
      dispatch({ type: SET_RES_NAME, payload: response.data.message });
    } catch (err) {
      dispatch({ type: SET_RES_NAME_ERR, payload: err });
    }
    // getResourcesHoursloggedData(pro_id);
  };
};
