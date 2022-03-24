import ActionTypes from "../actionTypes";
export default (state = {}, action) => {
  console.log("action in weekly reducer", action);
  switch (action.type) {
    case ActionTypes.GET_WEEKLY_STATUS: {
      return {
        ...state,
        weeklyStatus: action.payload,
      };
    }
    case ActionTypes.GET_HEALTH_STATUS: {
      return {
        ...state,
        healthStatus: action.payload,
      };
    }
    case ActionTypes.GET_ENGAGEMENT_TYPES: {
      return {
        ...state,
        engagementType: action.payload,
      };
    }
    default:
      return state;
  }
};
