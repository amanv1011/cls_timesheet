import { SET_DATA_DATE_FILTER } from "../type";

export const setFilterDate = (filterStartDate, filterEndDate) => {
  const filterDate = {
    startDate: filterStartDate,
    endDate: filterEndDate,
  };
  return async (dispatch) => {
    dispatch({ type: SET_DATA_DATE_FILTER, payload: filterDate });
  };
};
