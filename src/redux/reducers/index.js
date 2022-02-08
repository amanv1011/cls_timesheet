import { combineReducers } from "redux";
import SpinnerReducer from "./spinnerReducer";
import LoginReducer from "./loginReducer";
export default combineReducers({
  spin: SpinnerReducer,
  user: LoginReducer,
});
