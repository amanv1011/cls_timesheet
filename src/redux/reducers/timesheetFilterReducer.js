import {
    SET_FILTER_PROJECT_NAME,
    SET_FILTER_PROJECT_OWNER,
    SET_FILTER_ENGAGEMENT_TYPE,
    SET_FILTER_STATUS,
    DISPLAY_TIMESHEET_FILTER_DATA,
} from "../type";

const initialState = {
    filterProjectName: null,
    filterProjectOwner: null,
    filterEngegementType: null,
    filterStatus: null,
    displayData: [],

}

const timesheetFilterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FILTER_PROJECT_NAME:
            return { ...state, filterProjectName: payload }
        case SET_FILTER_PROJECT_OWNER:
            return { ...state, filterProjectOwner: payload }
        case SET_FILTER_ENGAGEMENT_TYPE:
            return { ...state, filterEngegementType: payload }
        case SET_FILTER_STATUS:
            return { ...state, filterStatus: payload }
        case DISPLAY_TIMESHEET_FILTER_DATA:
            return { ...state, displayData: payload }
        default:
            return { ...state };
    }
}
export default timesheetFilterReducer;


