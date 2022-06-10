import { combineReducers } from "redux";
import SpinnerReducer from "./spinnerReducer";
import LoginReducer from "./loginReducer";
import WeeklyStatus from "./weeklyStatus";
import timesheet from "./timesheet";
import hoursLogged from "./hoursLogged";
import LandingReducer from "./landingReducer";
import errorReducer from "./errorReducer";
import paginationReducer from "./paginationReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  spin: SpinnerReducer,
  user: LoginReducer,
  week_status: WeeklyStatus,
  time_sheet: timesheet,
  hours_logged: hoursLogged,
  error: errorReducer,
  paginationStates: paginationReducer,
  modalStates: modalReducer,
  // landing:LandingReducer
});
