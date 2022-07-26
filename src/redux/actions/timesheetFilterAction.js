import http from "../../hoc/axiosClient"
import { API_ENDPOINTS } from "../../appConfig";
import {
    SET_TIMESHEET_DATA,
    SET_TIMESHEET_DATA_ERR


} from "../type";

import axios from "axios";


export const getTimesheetFilterData = ( projectName, projectOwner, engagementType, status ) => {
   
    return async function getTimesheetFilterDataThunk(dispatch) {
        const requestUrl = `${API_ENDPOINTS.timesheetFilterReducer}monthYear=05-2022&project_owner_id=18&${projectName !== "" ? `projectName=${projectName}` : ""}&${projectOwner !== "" ? `projectOwnerName=${projectOwner}` : ""}&${engagementType !== "" ? `engagement_type=${engagementType}` : ""}`
        
        try {
            const response = await axios.get(requestUrl);
            dispatch({ type: SET_TIMESHEET_DATA, payload:response.data.projects});
            
        } catch (error) {
            dispatch({ type: SET_TIMESHEET_DATA_ERR, payload: error});

        }
    
    }
}
