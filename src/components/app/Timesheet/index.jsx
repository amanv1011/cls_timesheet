import React from "react";
import DashboardTemplate from "../../layouts/template";

import { DatePicker } from "antd";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";
import Table from "../../commonComponents/Table/Table";
import BackArrow from "../../../assets/images/icons/BackArrow";

import './timesheetModule.css';
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";






const Timesheet = () => {
  return (
    <>
      <div className="timesheet-container">
        <div className="timesheet-back-button">
          <p className="back-to-dashboard"> <span className="back-arrow"> <BackArrow /> </span> Back Dashboard</p>

        </div>
        <div className="timesheet-container-heading">
          <div className="timesheet-heading-title">
            <h3 > Timesheet </h3>

          </div>
          <div className="timesheet-heading-date">
          <DateFilter />

          </div>

        </div>
        <TimesheetFilters />

        {/*Timesheet Table is In Progress */}

        {/* <div className="table-container">
          
          <Table />

        </div> */}

      </div>
    </>
  )
}



export default DashboardTemplate(
  Timesheet
);
