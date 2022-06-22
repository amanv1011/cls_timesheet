import { SET_TIMESHEET_DATA, SET_TIMESHEET_DATA_ERR } from "../type";

const initialState = {
  timesheetData: null,
  timesheetDataErr: null,
};

const timesheetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TIMESHEET_DATA:
      return { ...state, timesheetData: payload };
    case SET_TIMESHEET_DATA_ERR:
      return { ...state, timesheetDataErr: payload };
    default:
      return { ...state };
  }
};

export default timesheetReducer;
