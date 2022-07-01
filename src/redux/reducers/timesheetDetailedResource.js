import { GET_TIMESHEET_DETAILED_RESOURCE_DATA, GET_TIMESHEET_DETAILED_RESOURCE_DATA_ERR } from "../type";

const initialState = {
    getTimesheetDetailedResourceData: [],
    getTimesheetDetailedResourceDataErr: null,
}

const timesheetDetailedResource = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_TIMESHEET_DETAILED_RESOURCE_DATA:
            return { ...state, getTimesheetDetailedResourceData: payload }
        case GET_TIMESHEET_DETAILED_RESOURCE_DATA_ERR:
            return { ...state, getTimesheetDetailedResourceDataErr: payload }
        default:
            return { ...state }
    }

}

export default timesheetDetailedResource;
