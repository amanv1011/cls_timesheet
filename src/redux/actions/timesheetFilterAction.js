import http from "../../hoc/axiosClient"
import { API_ENDPOINTS } from "../../appConfig";
import {
    SET_TIMESHEET_DATA,
    SET_TIMESHEET_DATA_ERR,
    DISPLAY_TIMESHEET_FILTER_DATA


} from "../type";
import { SETFALSE_TIMESHEET_TABLE_DATA, SETTRUE_TIMESHEET_TABLE_DATA } from '../type'

import axios from "axios";


export const getTimesheetFilterData = (projectName, projectOwner, engagementType, status, filterDate) => {

    return async function getTimesheetFilterDataThunk(dispatch) {
        const requestUrl = `${API_ENDPOINTS.timesheetFilterReducer}monthYear=${filterDate}&project_owner_id=18&${projectName !== "" ? `projectName=${projectName}` : ""}&${projectOwner !== "" ? `projectOwnerName=${projectOwner}` : ""}&${engagementType !== "" ? `engagement_type=${engagementType}` : ""}`

        try {
            const response = await axios.get(requestUrl);

            if ((response.data.projects).length === 0) {
                dispatch({ type: SETFALSE_TIMESHEET_TABLE_DATA })
            } else {
                dispatch({ type: SET_TIMESHEET_DATA, payload: response.data.projects })
                dispatch({ type: SETTRUE_TIMESHEET_TABLE_DATA })
            }

        } catch (error) {
            dispatch({ type: SET_TIMESHEET_DATA_ERR, payload: error });
            dispatch({ type: SETFALSE_TIMESHEET_TABLE_DATA })
        }

    }
}

export const cardsDisplayAction = (cards) => {
    return async (dispatch) => {
        await dispatch({ type: DISPLAY_TIMESHEET_FILTER_DATA, payload: cards });
    };
};
