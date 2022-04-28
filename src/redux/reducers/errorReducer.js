import ActionTypes from "../actionTypes";
export default (state = {}, action) => {
  // console.log("action in weekly reducer", action);
  switch (action.type) {
    case ActionTypes.ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.CLEAR_ERROR: {
        return {
          ...state,
          error: "",
        };
      }
    default:
      return state;
  }
};
