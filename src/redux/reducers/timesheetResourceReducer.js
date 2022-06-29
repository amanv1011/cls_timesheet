import { SET_TIMESHEET_RESOURCE_DATA, SET_TIMESHEET_RESOURCE_DATA_ERR } from "../type";

const initialState = {
    timesheetResourceData: [],
    timesheetResourceDataErr: null,
};

const timesheetResourceReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_TIMESHEET_RESOURCE_DATA:
            return { ...state, timesheetResourceData: payload };

        case SET_TIMESHEET_RESOURCE_DATA_ERR:
            return { ...state, timesheetResourceDataErr: payload };

        default:
            return { ...state };
    }
}
export default timesheetResourceReducer;

