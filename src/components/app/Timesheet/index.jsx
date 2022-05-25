import React from "react";
import DashboardTemplate from "../../layouts/template";
import Switch from '@mui/material/Switch';
import { IoIosArrowDown } from "react-icons/io";
import { RiCalendar2Line } from "react-icons/ri";
import { DatePicker } from "antd";

import BackArrow from "../../../assets/images/icons/BackArrow";

import './TimesheetModule.css';

const monthFormat = "MMM YYYY";


const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
              style={{
                width: " 140px",
                height: "40px",
                borderRadius: "10px",
                color: "#1f4173",
              }}
              format={monthFormat}
            />

          </div>

        </div>
        <div className="filterBy">
          <p>Filter By</p>

        </div>
        <div className="timesheet-tabs">
          <div className="project-name-tab">
            <input className="project-name" placeholder="Project Name" />

          </div>

          <div className="project-owner-tab">
            <input className="project-owner" placeholder="Project Owner" />

          </div>

          <div className="project-engagement-tab">
            <input className="project-engagement" placeholder="Engagement Type" />

          </div>

          <div className="project-status-tab">
            <input className="project-status" placeholder="Status" />

          </div>
          <div className="buttonGo">
            <button className="button-go"> Go</button>

          </div>
          <div className="switch-resource">

            <Switch {...label} defaultChecked color="warning" /><span className="switch-resources">Resources</span>
          </div>
          <div >
            <button className="export-to-excel"> Export to Excel</button>

          </div>
        </div>

      </div>
    </>
  )
}



export default DashboardTemplate(
  Timesheet
);
