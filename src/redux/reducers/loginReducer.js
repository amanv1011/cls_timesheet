import ActionTypes from "../actionTypes";
import initialState from "../initialstate";
import {
  storeUserProfile,
  getUserProfile,
  deleteUserProfile,
} from "../../actions/user";

export default (state = {}, action) => {
  //   console.log("action in spinner reducer", action, "initial state", state);
  switch (action.type) {
    case ActionTypes.USER_DETAILS: {
      return {
        ...state,
        userDetails: action.payload,
      };
    }
    case ActionTypes.GET_USER_TOOLS: {
      return {
        ...state,
        userTools: action.payload,
      };
    }
    default:
      return state;
  }
};
