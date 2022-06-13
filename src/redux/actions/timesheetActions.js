import axios from "axios"
import { API_ENDPOINTS } from "../../appConfig"
import {SET_TIMESHEET_DATA, SET_TIMESHEET_DATA_ERR} from '../type'

export const getTimesheetData = (localDate) => {
    return async function getTimesheetDataThunk(dispatch) {
        console.log(API_ENDPOINTS.timesheet);
        const requestUrl = `${API_ENDPOINTS.timesheet}${localDate}`;
        try{
            const response = await axios.get(requestUrl);
            dispatch({type:SET_TIMESHEET_DATA, payload: response.data.projects})
        }catch(err){
            dispatch({type:SET_TIMESHEET_DATA_ERR, payload: err})
        }
    }
}