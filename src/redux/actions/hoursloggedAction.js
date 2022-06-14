import axios from "axios";
import { API_ENDPOINTS } from "../../appConfig";
import { SET_HOURSLOGGED_DATA, SET_HOURSLOGGED_DATA_ERR } from "../type";

export const getHoursloggedData = (localDate) => {
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
