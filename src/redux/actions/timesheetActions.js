import http from "../../hoc/axiosClient"
import { API_ENDPOINTS } from "../../appConfig"
import {SET_TIMESHEET_DATA, SET_TIMESHEET_DATA_ERR} from '../type'
import {SETFALSE_TIMESHEET_TABLE_DATA, SETTRUE_TIMESHEET_TABLE_DATA} from '../type'

export const getTimesheetData = (localDate) => {
    return async function getTimesheetDataThunk(dispatch) {
        console.log(API_ENDPOINTS.timesheet);
        const requestUrl = `${API_ENDPOINTS.timesheet}${localDate}`;
        try{

            const response = await http.get(requestUrl);
            
            if((response.data.projects).length === 0 ) {
                dispatch({type:SET_TIMESHEET_DATA, payload: null})
                dispatch({ type: SETFALSE_TIMESHEET_TABLE_DATA})
            } else {
                dispatch({type:SET_TIMESHEET_DATA, payload: response.data.projects})
                dispatch({ type: SETTRUE_TIMESHEET_TABLE_DATA})
            }
        }catch(err){
            dispatch({type:SET_TIMESHEET_DATA, payload: null})
            dispatch({type:SET_TIMESHEET_DATA_ERR, payload: err})
            dispatch({ type: SETFALSE_TIMESHEET_TABLE_DATA})
            
        }
    }
}