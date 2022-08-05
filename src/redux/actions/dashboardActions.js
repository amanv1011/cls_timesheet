import http from "../../hoc/axiosClient"
import { API_ENDPOINTS } from "../../appConfig"
import {SET_DASHBOARD_DATA, SET_DASHBOARD_DATA_ERR, SETTRUE_TIMESHEET_TABLE_DATA, SETFALSE_TIMESHEET_TABLE_DATA} from '../type'

export const getDashboardData = (localStartData, localEndDate, localId) => {
    return async function getDashboardDataThunk(dispatch) {
        const requestUrl =`${API_ENDPOINTS.dashboard}startDate=${localStartData}&endDate=${localEndDate}&id=${localId}`
        try{
            const response = await http.get(requestUrl);
            if((response.data.result).length === 0){

                dispatch({type: SETFALSE_TIMESHEET_TABLE_DATA})
            }else{
                dispatch({type: SET_DASHBOARD_DATA, payload: response.data.result})
                dispatch({type: SETTRUE_TIMESHEET_TABLE_DATA})
            }
            
        }catch(err){
            dispatch({type: SET_DASHBOARD_DATA_ERR, payload: err})
            dispatch({type: SETFALSE_TIMESHEET_TABLE_DATA})
        }
    }
}