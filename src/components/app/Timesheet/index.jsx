import DashboardTemplate from "../../layouts/template";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";
import Table from "../../commonComponents/Table/Table";
import BackArrow from "../../../assets/images/icons/BackArrow";
import React, { useState } from 'react';

import './TimesheetModule.css';
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";


const Timesheet = () => {
  const TimesheetTable =  ['Projects', 'ProjectOwner','ProjectCode','AccountCode','EngagementType', 'HoursLogged', 'BilledHours'] 
  const ResourceTable = ["ProjectOwner","HoursLogged"]
  const [showTable2, setshowTable2] = useState(false);

  return (
    <>
      <div className="timesheet-container">
        <div className="timesheet-back-button" onClick={() => setshowTable2(false)}>
          <p className="back-to-dashboard"> <span className="back-arrow"> <BackArrow /> </span> Back Dashboard</p>

        </div>
        <div className="timesheet-container-heading">
          <div className="timesheet-heading-title">
            {/* <h3 > Timesheet </h3> */}
            {showTable2 ? <h3>Timesheet/Resources</h3> : <h3 > Timesheet </h3>}

          </div>
          <div className="timesheet-heading-date">
          <DateFilter/>

          </div>

        </div>
        <TimesheetFilters  showTable={() => setshowTable2(true)}/>

        {/*Timesheet Table is In Progress */}

        <div className="table-container">
          
          {showTable2 ? <Table tableCols={ResourceTable} /> : <Table tableCols={TimesheetTable} />}

        </div>

      </div>
    </>
  )
}



export default DashboardTemplate(
  Timesheet
);
