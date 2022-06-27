import { SET_DASHBOARD_DATA, SET_DASHBOARD_DATA_ERR } from "../type";

const initialState = {
  dashboardData: null,
  dashboardDataErr: null,
};

const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DASHBOARD_DATA:
      return { ...state, dashboardData: payload };
    case SET_DASHBOARD_DATA_ERR:
      return { ...state, dashboardDataErr: payload };
    default:
      return{...state};
  }
};

export default dashboardReducer;
