import { GET_TOTAL_COUNT, GET_DATA_PER_PAGE, GET_ACTIVE_COUNT } from "../type"

export const setTotalCount = (value) => {
    return async (dispatch) => {
      dispatch({ type: GET_TOTAL_COUNT, payload: value });
    };
  };
  
  export const setDataPerPage = (value) => {
    return async (dispatch) => {
      dispatch({ type: GET_DATA_PER_PAGE, payload: Number(value) });
    };
  };
  export const setActivePage = (value) => {
    return async (dispatch) => {
      dispatch({ type: GET_ACTIVE_COUNT, payload: value });
    };
  };
  