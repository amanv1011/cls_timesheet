import ActionTypes from "../actionTypes";
import initialState from "../initialstate";

const spinner = {
  spin: false,
};

export default (state = spinner, action) => {
  //   console.log("action in spinner reducer", action, "initial state", state);
  switch (action.type) {
    case ActionTypes.SPINNER: {
      return {
        ...state,
        spin: action.payload,
      };
    }
    default:
      return state;
  }
};
