import { combineReducers } from "redux";
import SpinnerReducer from "./spinnerReducer";
import LoginReducer from "./loginReducer";
import WeeklyStatus from "./weeklyStatus";
// import timesheet from "./timesheet";
// import LandingReducer from "./landingReducer";
import errorReducer from "./errorReducer";
import paginationReducer from "./paginationReducer";
import modalReducer from "./modalReducer";
import timesheetReducer from "./timesheetReducer"
import sidebarCollapsReducer from "./sidebarCollaps"
import dashboardReducer from "./dashboardReducer";
import hoursLoggedReducer from "./hoursLogged";
import dateFilterReducer from "./dateFilterReducer"

export default combineReducers({
  spin: SpinnerReducer,
  user: LoginReducer,
  week_status: WeeklyStatus,
  hoursLogged: hoursLoggedReducer,
  error: errorReducer,
  paginationStates: paginationReducer,
  modalStates: modalReducer,
  timesheet: timesheetReducer,
  sidebarCollaps: sidebarCollapsReducer,
  dashboard: dashboardReducer,
  dateFilter: dateFilterReducer,
  // time_sheet: timesheet,
  // landing:LandingReducer
});
