import ActionTypes from "../actionTypes";
const initialState = {
  hourslogged: {
    results: [],
    count: 0,
  },
};
export default (state = initialState, action) => {
  console.log("action in time sheet reducer", action);
  switch (action.type) {
    case ActionTypes.GET_HOURS_LOGGED: {
      return {
        ...state,
        hoursLogged: action.payload,
      };
    }
    // case ActionTypes.GET_HOURS_LOGGED: {
    //   return {
    //     ...state,
    //     resources: action.payload,
    //   };
    // }
    default:
      return state;
  }
};
