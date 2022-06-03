import React from "react";
import DashboardTemplate from "../../layouts/template";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";
import Table from "../../commonComponents/Table/Table";
import BackArrow from "../../../assets/images/icons/BackArrow";
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import ModalTimesheet from "../../commonComponents/Modal/ModalTimesheet";
import dummyData from "../../commonComponents/Table/dummyData";
import { useDispatch } from "react-redux";
import {setModalActive} from "../../../redux/actions/modalAction";
import TimesheetDummyData from "./TimesheetDummyData";

import './TimesheetModule.css';


const Timesheet = (props) => {

  const dispatch = useDispatch()
  const handleShow = () => { dispatch(setModalActive())};



  const TimesheetTable = ['Projects', 'Project Owner', 'Project Code', 'Account Code', 'Engagement Type', 'Hours Logged', 'Billed Hours']

  return (
    <>


      <div>
        <ModalTimesheet />
      </div>


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
        <div>

          <button onClick={handleShow}> modal </button>

        </div>

        <div className="table-container">

          <Table tableCols={TimesheetTable} tableData={TimesheetDummyData} />

        </div>

      </div>
    </>
  )
}



export default DashboardTemplate(
  Timesheet
);
