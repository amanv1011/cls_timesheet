import http from "../../hoc/axiosClient"
import { API_ENDPOINTS } from "../../appConfig";
import {
    SET_TIMESHEET_RESOURCE_DATA,
    SET_TIMESHEET_RESOURCE_DATA_ERR,
    GET_TIMESHEET_DETAILED_RESOURCE_DATA,
    GET_TIMESHEET_DETAILED_RESOURCE_DATA_ERR
} from "../type";
import axios from "axios";

export const getTimesheetResourceData = (id) => {
    return async function getTimesheetResourceDataThunk(dispatch) {
        const requestUrl = `${API_ENDPOINTS.timesheetResource}${id}`;
        try{
            const response = await http.get(requestUrl);
            dispatch({type:SET_TIMESHEET_RESOURCE_DATA, payload:response.data.result});
        }catch (err) {
            dispatch({ type:SET_TIMESHEET_RESOURCE_DATA_ERR, payload: err });

        }
    }
}
export const getParticularResourceData = (_id, startDate, endDate, userId) => {
    return async function getParticularResourceDataThunk(dispatch) {
        const requestUrl = `${API_ENDPOINTS.timesheetDetailedResource}webtracker_project_id=${_id}&start_date=${startDate}&end_date=${endDate}&user_id=${userId}`
        try{
            const response = await axios.get(requestUrl);
            console.log(response);
            dispatch({type:GET_TIMESHEET_DETAILED_RESOURCE_DATA, payload: response});
        }catch (err){
            dispatch({ type:GET_TIMESHEET_DETAILED_RESOURCE_DATA_ERR, payload: err });

        }
    }
}





