const hostname = window.location.hostname;
let BASE_URL;

if (hostname === "localhost") {
  BASE_URL = "http://localhost:3501";
} else if (hostname === "https://stagingapp.classicinformatics.net") {
  BASE_URL = "https://stageapp.api.classicinformatics.net";
}

const API_PREFIX = `${BASE_URL}/api`;

export const apiUrls = {
  timesheet: `${API_PREFIX}/projects/timesheet?monthYear=`,
  hourslogged: `${API_PREFIX}/hourslog/hourslog?monthYear=`,
  resourceHoursLogged: `${API_PREFIX}/hourslog/hourslog/data?`,
};
