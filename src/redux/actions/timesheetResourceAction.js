
import axios from "axios";
import { API_ENDPOINTS } from "../../appConfig";
import {
    SET_TIMESHEET_RESOURCE_DATA,
    SET_TIMESHEET_RESOURCE_DATA_ERR,
} from "../type";

export const getTimesheetResourceData = (id) => {
    return async function getTimesheetResourceDataThunk(dispatch) {
        console.log("IDDDDDDDDDDDDDDDDDDDDDDD", id);
        const requestUrl = `${API_ENDPOINTS.timesheetResource}${id}`;
        try{
            const response = await axios.get(requestUrl);
            console.log(response, "rrrrrrrrrrrrrrrrrrrrrr");
            dispatch({type:SET_TIMESHEET_RESOURCE_DATA, payload:response.data.result});
        }catch (err) {
            dispatch({ type:SET_TIMESHEET_RESOURCE_DATA_ERR, payload: err });

        }
    }
}




