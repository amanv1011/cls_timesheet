import React from "react";
import DashboardTemplate from "../../layouts/template";
import TablePagination from "../../commonComponents/TablePagination/tablePagination"
import Today from "../../../assets/dashboardIcons/today";
import ThisWeek from "../../../assets/dashboardIcons/thisWeek"
import UserWorked from "../../../assets/dashboardIcons/userWorked";
import WorkedProject from "../../../assets/dashboardIcons/workedProject"
import Arrow from "../../../assets/dashboardIcons/Arrow"
import "./style.css";
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import dummyData from "./dummyData"
import TimesheetTable from "../../commonComponents/TimesheetTable/TimesheetTable";

const Dashboard = () => {
  
  const tableColArray = ['Projects', 'Project Owner', 'Engagement Type', 'Project Health', 'Hours Logged', 'Members', ]



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
          <TimesheetTable tableCols={tableColArray} tableData={dummyData}/>
          <TablePagination dataLength={dummyData.length} dataLimit={10} pageLimit={3}/>
          <button className="dashboard-table-button">
                  <span style={{marginRight:"6px", fontSize:"14px"}}>View Projects  </span>
                  <Arrow/>
                </button>
                {/* <Table tableCols={tableColArray} tableHeading={"Active Projects"} tableData={dummyData}/>
                // 
                 */}
          </div>
      </div>
     
    </>
  );
};

export default DashboardTemplate(Dashboard);
