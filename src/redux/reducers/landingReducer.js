import ActionTypes from "../actionTypes";

const initialState={
  userTools:[]
}

export default (state = initialState, action) => {
  // console.log("action in weekly reducer", action);
  switch (action.type) {
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
