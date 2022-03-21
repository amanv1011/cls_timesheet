import ActionTypes from "../actionTypes";
export default (state = {}, action) => {
  console.log("action in time sheet reducer", action);
  switch (action.type) {
    case ActionTypes.GET_TIME_SHEET: {
      return {
        ...state,
        timesheet: action.payload,
      };
    }
    default:
      return state;
  }
};
