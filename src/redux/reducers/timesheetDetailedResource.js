import {
    GET_TIMESHEET_DETAILED_RESOURCE_DATA,
    GET_TIMESHEET_DETAILED_RESOURCE_DATA_ERR,
    RESOURCE_NAME_TIMELOGGED
}
    from "../type";

const initialState = {
    TimesheetDetailedResourceData: [],
    TimesheetDetailedResourceDataErr: null,
    resourceNameTimeLogged:"",
}

const timesheetDetailedResource = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_TIMESHEET_DETAILED_RESOURCE_DATA:
            return { ...state, TimesheetDetailedResourceData: payload }
        case GET_TIMESHEET_DETAILED_RESOURCE_DATA_ERR:
            return { ...state, TimesheetDetailedResourceDataErr: payload }
        case RESOURCE_NAME_TIMELOGGED:
            return { ...state, resourceNameTimeLogged: payload }
        default:
            return { ...state }
    }

}

export default timesheetDetailedResource;
