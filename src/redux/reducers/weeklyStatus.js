import ActionTypes from "../actionTypes";

const initialState={
  weeklyStatus:[],
  healthStatus:[],
  engagementType:[]
}
export default (state = {}, action) => {
  // console.log("action in weekly reducer", state);
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
