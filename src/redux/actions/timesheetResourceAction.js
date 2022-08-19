import http from "../../hoc/axiosClient"
import { API_ENDPOINTS } from "../../appConfig";
import {
    SET_TIMESHEET_RESOURCE_DATA,
    SET_TIMESHEET_RESOURCE_DATA_ERR,
    GET_TIMESHEET_DETAILED_RESOURCE_DATA,
    GET_TIMESHEET_DETAILED_RESOURCE_DATA_ERR,
    RESOURCE_NAME_TIMELOGGED,
} from "../type";
import moment from "moment";
import axios from "axios";

export const getTimesheetResourceData = (id,localStartDate, localEndDate) => {
    return async function getTimesheetResourceDataThunk(dispatch) {
        const requestUrl = `${API_ENDPOINTS.timesheetResource}${id}&start_date=${localStartDate}&end_date=${localEndDate}`;
        try{
            const response = await http.get(requestUrl);
            const filterData = [];
            response.data.result.forEach(ele => {
                filterData.push({
                   UserId: ele.id,
                   UserName: ele.name,
                   Hours_logged: ele.time_logged

                })
                
            });
            dispatch({type:SET_TIMESHEET_RESOURCE_DATA, payload:filterData});
        }catch (err) {
            dispatch({ type:SET_TIMESHEET_RESOURCE_DATA_ERR, payload: err });

        }
    }
}
export const getParticularResourceData = (_id, startDate, endDate, userId, monthYear) => {
    return async function getParticularResourceDataThunk(dispatch) {
        const requestUrl = `${API_ENDPOINTS.timesheetDetailedResource}webtracker_project_id=${_id}&user_id=${userId}&monthYear=${moment(startDate).format('MM-YYYY')}`
        try{
            const response = await axios.get(requestUrl);
            if( response.data.projects === []){
                dispatch({type:GET_TIMESHEET_DETAILED_RESOURCE_DATA, payload: null});
            }else{
                dispatch({type:GET_TIMESHEET_DETAILED_RESOURCE_DATA, payload: response.data.projects});
            } 
        }catch (err){
            dispatch({ type:GET_TIMESHEET_DETAILED_RESOURCE_DATA_ERR, payload: err });

        }
    }
}

export const setResourceName = (name) => {
    return async(dispatch) => {
        dispatch({type:RESOURCE_NAME_TIMELOGGED, payload:name })
    }
}





