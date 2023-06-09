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
import showSwitch from "./resourceSwitchReducer";
import timesheetResourceReducer from "./timesheetResourceReducer";
import timesheetDetailedResource from "./timesheetDetailedResource";
import timesheetFilterReducer from "./timesheetFilterReducer";
import timesheetTableReducer from "./timesheetTableReducer"

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
  timesheetFilterSwitch: showSwitch,
  timesheetResource: timesheetResourceReducer,
  dashboard: dashboardReducer,
  detailedResource: timesheetDetailedResource,
  dateFilter: dateFilterReducer,
  timesheetFilter:timesheetFilterReducer,
  timesheetTableData: timesheetTableReducer,
  // time_sheet: timesheet,
  // landing:LandingReducer
});
