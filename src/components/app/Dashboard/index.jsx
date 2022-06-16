import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getTimesheetData } from "../../../redux/actions/timesheetActions";
import timesheetLayoutTemplate from "../../layouts/timesheetLayout/timesheetLayoutTemplate";

import Today from "../../../assets/dashboardIcons/today";
import ThisWeek from "../../../assets/dashboardIcons/thisWeek";
import UserWorked from "../../../assets/dashboardIcons/userWorked";
import WorkedProject from "../../../assets/dashboardIcons/workedProject";
import Arrow from "../../../assets/dashboardIcons/Arrow";
import "./style.css";
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";

import TimesheetTable from "../../commonComponents/TimesheetTable/TimesheetTable";

const Dashboard = () => {
  const dispatch = useDispatch();

  const todaysDate = moment().format("MM/YYYY");

  const [dashboardFilterData, setDashboardFilterData] = useState(null);

  const dashboardModuleData = useSelector(
    (state) => state.timesheet.timesheetData
  );

  const tempFunEventHandler = (event) => {
    console.log(event.target.id);
  };

  const tempTableColArray = [
    {
      columnName: "Projects",
      columnKeyValue: "ProjectId",
      keyFunction: tempFunEventHandler,
    },
    {
      columnName: "Project Owner",
    },
    {
      columnName: "Engagement Type",
    },
    {
      columnName: "Project Health",
    },
    {
      columnName: "Hours Logged",
    },
    {
      columnName: "Members",
    },
  ];

  // const tableColArray = [
  //   "Projects",
  //   "Project Owner",
  //   "Engagement Type",
  //   "Project Health",
  //   "Hours Logged",
  //   "Members",
  // ];

  useEffect(() => {
    dispatch(getTimesheetData(todaysDate));
  }, []);

  useEffect(() => {
    const filterData = [];

    if (dashboardModuleData !== null) {
      dashboardModuleData.forEach((ele) => {
        filterData.push({
          ProjectId: ele.project_id,
          Projects: ele.project_name,
          ProjectOwner: ele.project_owner,
          EngagementType: ele.engagement_type,
          ProjectHealth: ele.health_status_description,
          HoursLogged: ele.hours_logged,
          Members: 1,
        });
      });
    }

    setDashboardFilterData(filterData);
  }, [dashboardModuleData]);

  return (
    <>
      <div className="dashboard-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "25px",
          }}
        >
          <div className="dashboard-header">Dashboard</div>
          <div>
            <DateFilter />
          </div>
        </div>
        <div className="cards-container">
          <div className="dashboard-cards">
            <div>
              <p className="cards-heading">8h 15m</p>
              <p className="cards-subheading">Today</p>
            </div>
            <div className="dashboard-cards-sub">
              <Today />
            </div>
          </div>
          <div className="dashboard-cards">
            <div>
              <p className="cards-heading">8h 15m</p>
              <p className="cards-subheading">This Week</p>
            </div>
            <div className="dashboard-cards-sub">
              <ThisWeek />
            </div>
          </div>
          <div className="dashboard-cards">
            <div>
              <p className="cards-heading">02</p>
              <p className="cards-subheading">Users Worked</p>
            </div>
            <div className="dashboard-cards-sub">
              <UserWorked />
            </div>
          </div>
          <div className="dashboard-cards">
            <div>
              <p className="cards-heading">02 of 15</p>
              <p className="cards-subheading">Worked Projects</p>
            </div>
            <div className="dashboard-cards-sub">
              <WorkedProject />
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="dashboard-table-heading">Active Projects</div>
          {dashboardFilterData !== null ? (
            <TimesheetTable
              tableCols={tempTableColArray}
              tableData={dashboardFilterData}
            />
          ) : null}

          <button className="dashboard-table-button">
            <span style={{ marginRight: "6px", fontSize: "14px" }}>
              View Projects{" "}
            </span>
            <Arrow />
          </button>
        </div>
      </div>
    </>
  );
};

export default timesheetLayoutTemplate(Dashboard);
