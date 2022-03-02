import actionTypes from "../redux/actionTypes";

// export const Profile = (data) => ({
//   type: actionTypes.AUTH_RESULT,
//   payload: data,
// });

export const UserProfile = (data) => ({
  type: actionTypes.USER_DETAILS,
  payload: data,
});

export const getUserTools = (data) => ({
  type: actionTypes.GET_USER_TOOLS,
  payload: data,
});
export const getWeeklyStatus = (data) => ({
  type: actionTypes.GET_WEEKLY_STATUS,
  payload: data,
});

export const Spinner = (data) => ({
  type: actionTypes.SPINNER,
  payload: data,
});

// ERROR
export const Error = (data) => ({
  type: actionTypes.ERROR,
  payload: data,
});

export const clearError = () => ({
  type: actionTypes.CLEAR_ERROR,
});
