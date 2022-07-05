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
  billedHours: `${API_PREFIX}/hourslog/hourslog/billedData?`,
  timesheetResource: `${API_PREFIX}/projects/allresource?webtracker_project_id=`,
};
