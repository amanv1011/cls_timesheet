import axios from "axios";
import { API_ENDPOINTS } from "../../appConfig";
import {
  SET_HOURSLOGGED_DATA,
  SET_HOURSLOGGED_DATA_ERR,
  SET_RES_HOURSLOGGED_DATA,
  SET_RES_HOURSLOGGED_DATA_ERR,
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

    const requestUrl = `${API_ENDPOINTS.resourceHoursLogged}webtracker_project_id=${id}&start_date=2022-06-01&end_date=2022-06-28`;
    try {
      const response = await axios.get(requestUrl);
      console.log(response.data, "dataaaaaaaaaaaaaaaaaaaaaa");
      dispatch({ type: SET_RES_HOURSLOGGED_DATA, payload: response.data });
    } catch (err) {
      dispatch({ type: SET_RES_HOURSLOGGED_DATA_ERR, payload: err });
    }
  };
};
