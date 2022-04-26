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
export const getWeeklyStatus = (data) => (
  console.log("%%%%%%%%%%%%%%%%%%%%%", data),
  {
    type: actionTypes.GET_WEEKLY_STATUS,
    payload: data,
  }
);
export const get_health_status = (data) => ({
  type: actionTypes.GET_HEALTH_STATUS,
  payload: data,
});
export const get_engagement_types = (data) => ({
  type: actionTypes.GET_ENGAGEMENT_TYPES,
  payload: data,
});

export const getTimeSheet = (data) => (
  console.log("data from payload in sync: ", data),
  {
    type: actionTypes.GET_TIME_SHEET,
    payload: data,
  }
);

export const getTimesheetResources = (data) => (
  console.log("data from payload in sync: ", data),
  {
    type: actionTypes.GET_TIME_SHEET_RESOURCES,
    payload: data,
  }
);

// export const getWeeklyStatusProjects = (data) => (
//   console.log("data from payload in sync: ", data),
//   {
//     type: actionTypes.GET_WEEKLY_STATUS_PROJECT_NAME,
//     payload: data,
//   }
// );

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
