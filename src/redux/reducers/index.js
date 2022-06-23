import { combineReducers } from "redux";
import SpinnerReducer from "./spinnerReducer";
import LoginReducer from "./loginReducer";
import WeeklyStatus from "./weeklyStatus";
// import timesheet from "./timesheet";
// import LandingReducer from "./landingReducer";
import errorReducer from "./errorReducer";
import paginationReducer from "./paginationReducer";
import modalReducer from "./modalReducer";
import timesheetReducer from "./timesheetReducer";
import sidebarCollapsReducer from "./sidebarCollaps";
import hoursLoggedReducer from "./hoursLogged";
import showSwitch from "./resourceSwitchReducer";

export default combineReducers({
  spin: SpinnerReducer,
  user: LoginReducer,
  week_status: WeeklyStatus,
  // time_sheet: timesheet,
  hoursLogged: hoursLoggedReducer,
  error: errorReducer,
  paginationStates: paginationReducer,
  modalStates: modalReducer,
  timesheet: timesheetReducer,
  sidebarCollaps: sidebarCollapsReducer,
  timesheetFilterSwitch: showSwitch,
  // landing:LandingReducer
});
