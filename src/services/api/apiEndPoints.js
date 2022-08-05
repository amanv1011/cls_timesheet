const hostname = window.location.hostname;
let BASE_URL;

if (hostname === "localhost") {
  BASE_URL = "http://localhost:3501";
} else {
  BASE_URL = "https://stageapp.api.classicinformatics.net";
}

const API_PREFIX = `${BASE_URL}/api`;

export const apiUrls = {
  timesheet: `${API_PREFIX}/projects/timesheet?monthYear=`,
  dashboard: `${API_PREFIX}/dashboard/activeProject?`,
  hourslogged: `${API_PREFIX}/hourslog/hourslog?monthYear=`,
  resourceHoursLogged: `${API_PREFIX}/hourslog/hourslog/data?`,
  modalResources: `${API_PREFIX}/hourslog/hourslog/getUsers`,
  newResources: `${API_PREFIX}/hourslog/hourslog/addUser?`,
  billedHours: `${API_PREFIX}/hourslog/hourslog/addInWeekly?`,
  deleteResources: `${API_PREFIX}/hourslog/hourslog/deleteResource?`,
  timesheetResource: `${API_PREFIX}/projects/allresource?webtracker_project_id=`,
  timesheetDetailedResource: `${API_PREFIX}/projects/detailedResource?`,
  timesheetFilterReducer: `${API_PREFIX}/projects/timesheet/filter?`,
};

//http://localhost:3501/api/projects/timeSheet/filter?monthYear=05-2022&project_owner_id=18&projectName=bloon&engagement_type=Dedicated
