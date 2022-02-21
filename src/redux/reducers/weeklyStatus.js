import ActionTypes from "../actionTypes";
export default (state = {}, action) => {
  console.log("action in spinner reducer", action);
  switch (action.type) {
    case ActionTypes.GET_WEEKLY_STATUS: {
      return {
        ...state,
        weeklyStatus: action.payload,
      };
    }
    default:
      return state;
  }
};
