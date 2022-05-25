import React from "react";
import DashboardTemplate from "../../layouts/template";

import { IoIosArrowDown } from "react-icons/io";
import { RiCalendar2Line } from "react-icons/ri";
import { DatePicker } from "antd";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";
import Table from "../../commonComponents/Table/Table";
import BackArrow from "../../../assets/images/icons/BackArrow";

import './timesheetModule.css';

const monthFormat = "MMM YYYY";




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
          <DatePicker
              className="dashboard-datepicker"
              picker="month"
              suffixIcon={
                <span className="styleDateIcons">
                  <RiCalendar2Line
                    style={{
                      right: "8.33%",
                      top: "4.17%",
                      bottom: "12.5%",
                    }}
                  />
                  <IoIosArrowDown />
                </span>
              }
              format={monthFormat}
            />

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
