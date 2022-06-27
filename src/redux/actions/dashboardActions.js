import http from "../../hoc/axiosClient"
import { API_ENDPOINTS } from "../../appConfig"
import {SET_DASHBOARD_DATA, SET_DASHBOARD_DATA_ERR} from '../type'

export const getDashboardData = (localStartData, localEndDate, localId) => {
    return async function getDashboardDataThunk(dispatch) {
        const requestUrl =`${API_ENDPOINTS.dashboard}startDate=${localStartData}&endDate=${localEndDate}&id=${localId}`
        try{
            const response = await http.get(requestUrl);
            console.log(response);
            dispatch({type: SET_DASHBOARD_DATA, payload: response.data.result})
        }catch(err){
            dispatch({type: SET_DASHBOARD_DATA_ERR, payload: err})
        }
    }
}