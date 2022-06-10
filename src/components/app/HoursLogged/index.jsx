import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DashboardTemplate from "../../layouts/template";
import BackArrow from "../../../assets/images/icons/BackArrow";
import "./hoursLogged.css";
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import moment from "moment";
import ProjectComponent from "./ProjectComp";
import TimesheetTable from "../../commonComponents/TimesheetTable/TimesheetTable";
import {getHoursloggedData} from "../../../redux/actions/hoursloggedAction"
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";

const HoursLogged = () => {
  const tableColArray = [
    "Projects",
    "Project Owner",
    "Project Code",
    "Account Code",
    "Engagement Type",
    "Hours Logged",
    "Billed Hours",
    "Status",
  ];

  
  const monthFormat = "MMM YYYY";
  const filterData = [];
  const hoursLoggedModuleData = useSelector(
    (state) => state.hoursLogged.hoursloggedData
  );

  const dispatch = useDispatch();

  //to show ProjectComponent  
  const [hoursloggedResources, setHoursloggedResources] = useState(false)

  const [tableData, setTableData] = useState(null);

 //dispatches API action
  useEffect(() => {
    dispatch(getHoursloggedData("06/2022"));
  }, []);

// sets Hours Logged Data
  useEffect(() => {
    if (hoursLoggedModuleData !== null) {
      hoursLoggedModuleData.forEach((ele) => {
        filterData.push({
          Projects: ele.project_name,
          ProjectOwner: ele.project_owner,
          ProjectCode: ele.project_code,
          AccountCode: ele.account_code,
          EngagementType: ele.engagement_type,
          HoursLogged: ele.hours_logged,
          BilledHours: ele.billed_hours,
          Status: ele.status,
        });
      });
    }

    setTableData(filterData);
  }, [hoursLoggedModuleData]);



  return (
    <>
    {hoursloggedResources ? <ProjectComponent /> : (<>
      <div className="timesheet-container">
        <div className="timesheet-back-button">
          <p className="back-to-dashboard"> <span className="back-arrow"> <BackArrow /> </span> Back Dashboard</p>

        </div>
        <div className="timesheet-container-heading">
          <div className="timesheet-heading-title">
            <h3 > Hours Logged / Project </h3>

          </div>
          <div className="timesheet-heading-date">
            <DateFilter />

          </div>

        </div>
        <TimesheetFilters />


        <div className="table-container">
        {hoursLoggedModuleData !== null ? <TimesheetTable tableCols={tableColArray} tableData={tableData}/>: null}
           
        </div>

    </div>
    </>)}

    </>
  );
};


export default DashboardTemplate(HoursLogged);
