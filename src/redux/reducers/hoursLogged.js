import { SET_HOURSLOGGED_DATA, SET_HOURSLOGGED_DATA_ERR } from "../type";

const initialState = {
  hoursloggedData: null,
  hoursloggedDataErr: null,
};
const hoursLoggedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HOURSLOGGED_DATA: {
      return {
        ...state,
        hoursloggedData: payload,
      };
    }
    case SET_HOURSLOGGED_DATA_ERR: {
      return {
        ...state,
        hoursloggedDataErr: payload,
      };
    }

    default:
      return state;
  }
};

export default hoursLoggedReducer;
