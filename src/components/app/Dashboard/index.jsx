import React from "react";

import DashboardTemplate from "../../layouts/template";
import TablePagination from "../../commonComponents/TablePagination/tablePagination"
import { IoIosArrowDown } from "react-icons/io";
import { DatePicker } from "antd";
import { RiCalendar2Line } from "react-icons/ri";
import Today from "../../../assets/dashboardIcons/today";
import ThisWeek from "../../../assets/dashboardIcons/thisWeek"
import UserWorked from "../../../assets/dashboardIcons/userWorked";
import WorkedProject from "../../../assets/dashboardIcons/workedProject"
import Arrow from "../../../assets/dashboardIcons/Arrow"
import Table from "../../commonComponents/Table/Table"
import {  useSelector } from "react-redux";
import "./style.css";
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import dummyData from "../../commonComponents/Table/dummyData"


const Dashboard = () => {
  
  const tableColArray = ['Projects', 'ProjectOwner', 'EngagementType', 'ProjectHealth', 'HoursLogged', 'Members']

  const currentPage = useSelector((state) => state.paginationStates.activePage);
  const dataPerPage = useSelector((state) => state.paginationStates.dataPerPage);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dummyData.slice(indexOfFirstData, indexOfLastData);

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
                <Table tableCols={tableColArray} tableHeading={"Active Projects"} tableData={currentData}/>
                <TablePagination dataLength={dummyData.length} dataLimit={10} pageLimit={3}/>
                <button className="dashboard-table-button">
                  <span style={{marginRight:"6px", fontSize:"14px"}}>View Projects  </span>
                  <Arrow/>
                </button>
          </div>
      </div>
    </>
  );
};

export default DashboardTemplate(Dashboard);
