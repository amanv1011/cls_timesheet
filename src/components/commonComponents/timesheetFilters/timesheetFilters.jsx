import React from "react";
import { useState } from "react";
import { RiFilterOffFill } from "react-icons/ri";
import { Button, Tooltip } from "antd";
import moment from "moment";
import Switch from "@mui/material/Switch";
import {
  setSwitchActive,
  setSwitchDeactive,
} from "../../../redux/actions/timesheetFilterSwitch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimesheetFilterData,
  getHoursLoggedFilterData,
} from "../../../redux/actions/timesheetFilterAction";
import { getTimesheetData } from "../../../redux/actions/timesheetActions";
import { getHoursloggedData } from "../../../redux/actions/hoursloggedAction";
import { cardsDisplayAction } from "../../../redux/actions/timesheetFilterAction";
import { message } from "antd";
import * as XLSX from "xlsx";
import "./timesheetFilter.css";
const label = { inputProps: { "aria-label": "Switch demo" } };
const TimesheetFilters = (props) => {
  const dispatch = useDispatch();
  const todaysDate = moment().format("MM/YYYY");
  const [checked, setChecked] = useState(false);
  const [filterProjectName, setFilterProjectName] = useState("");
  const [filterProjectOwner, setFilterProjectOwner] = useState("");
  const [filterEngagementType, setFilterEngagementType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // for timesheet
  const cardsDisplayAction = useSelector(
    (state) => state.timesheet.timesheetData
  );

  // for hourslogged
  const cardsDisplayActionHoursLog = useSelector(
    (state) => state.hoursLogged.hoursloggedData
  );

  const downloadLeads = (timeshhetDataList, excelFileName) => {
    let workBook = XLSX.utils.book_new();
    let workSheet = XLSX.utils.json_to_sheet(timeshhetDataList);
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    XLSX.writeFile(workBook, `${excelFileName}.xlsx`);
  };

  const exportDataToExcel = () => {
    if (window.location.pathname === "/timesheet") {
      downloadLeads(
        cardsDisplayAction,
        "Timesheet Resource"
      )(message.success("Download Successful"));
    } else if (
      window.location.pathname === "/hours-logged" &&
      cardsDisplayActionHoursLog.projects
    ) {
      downloadLeads(
        cardsDisplayActionHoursLog.projects,
        "HoursLogged Resource"
      )(message.success("Download Successful"));
    }
  };
  const timesheetStartDate = useSelector(
    (state) => state.dateFilter.filterDateStart
  );
  const filterDate = moment(timesheetStartDate).format("MM-YYYY");
  const changeProjectName = (event) => {
    event.preventDefault();
    setFilterProjectName(event.target.value);
  };
  const changeProjectOwner = (event) => {
    event.preventDefault();
    setFilterProjectOwner(event.target.value);
  };
  const changeEngagementType = (event) => {
    event.preventDefault();
    setFilterEngagementType(event.target.value);
  };
  const changeStatus = (event) => {
    event.preventDefault();
    setFilterStatus(event.target.value);
  };
  const filterApiCall = () => {
    if (window.location.pathname === "/timesheet") {
      dispatch(
        getTimesheetFilterData(
          filterProjectName,
          filterProjectOwner,
          filterEngagementType,
          filterStatus,
          filterDate
        )
      );
    } else if (window.location.pathname === "/hours-logged") {
      dispatch(
        getHoursLoggedFilterData(
          filterProjectName,
          filterProjectOwner,
          filterEngagementType,
          filterStatus,
          filterDate
        )
      );
    }
  };
  const clearFilter = () => {
    setFilterProjectName("");
    setFilterProjectOwner("");
    setFilterEngagementType("");
    setFilterStatus("");
    dispatch(getTimesheetData(filterDate));
    dispatch(getHoursloggedData(filterDate));
  };
  const handleChange = (event) => {
    checked === true
      ? dispatch(setSwitchActive(event.target.checked))
      : dispatch(setSwitchDeactive(event.target.checked));
    setChecked(event.target.checked);
  };
  useEffect(() => {
    checked === true
      ? dispatch(setSwitchActive(checked))
      : dispatch(setSwitchDeactive(checked));
  }, []);
  return (
    <>
      <div className="filterBy">
        <p className="filter-by">Filter By</p>
      </div>
      <div className="horizontal-slidder">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="project-name-tab">
            <input
              value={filterProjectName}
              className="project-name"
              placeholder="Project Name"
              onChange={changeProjectName}
            />
          </div>
          <div className="project-owner-tab">
            <input
              value={filterProjectOwner}
              className="project-owner"
              placeholder="Project Owner"
              onChange={changeProjectOwner}
            />
          </div>
          <div className="project-engagement-tab">
            <input
              value={filterEngagementType}
              className="project-engagement"
              placeholder="Engagement Type"
              onChange={changeEngagementType}
            />
          </div>
          <div className="project-status-tab">
            <input
              value={filterStatus}
              className="project-status"
              placeholder="Status"
              onChange={changeStatus}
            />
          </div>
          <div className="buttonGo">
            <button className="button-go" onClick={filterApiCall}>
              {" "}
              Go
            </button>
          </div>
          <div className="buttonGo">
            <Tooltip placement="top" title={"Clear all Filter"}>
              <Button
                className="button-clear"
                type="primary"
                onClick={clearFilter}
                shape="circle"
              >
                <RiFilterOffFill />
              </Button>
            </Tooltip>
          </div>
          <Tooltip placement="top" title={"Download Resource"}>


            {cardsDisplayAction !== null ? <><button style={{ float: "right", marginTop: "1px" }} className="export-to-excel" onClick={exportDataToExcel} > Export to Excel</button> </> : <><button style={{ float: "right", marginTop: "1px", cursor: "not-allowed" }} className="disable-export-to-excel" > Export to Excel</button> </>}
          </Tooltip>
        </div>
      </div>
    </>
  );
};
export default TimesheetFilters;
