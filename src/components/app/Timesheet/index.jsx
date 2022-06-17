import React, { useEffect, useState } from "react";
import DashboardTemplate from "../../layouts/template";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";
import BackArrow from "../../../assets/images/icons/BackArrow";

import TimesheetTable from "../../commonComponents/TimesheetTable/TimesheetTable"
import './TimesheetModule.css';
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import ModalTimesheet from "../../commonComponents/Modal/ModalTimesheet";
import { useDispatch, useSelector } from "react-redux";
import { setModalActive } from "../../../redux/actions/modalAction";
import TimesheetDummyData from "./TimesheetDummyData";
import { getTimesheetData } from "../../../redux/actions/timesheetActions";
import moment from "moment";
import { useHistory } from "react-router-dom";
import './TimesheetModule.css';


const Timesheet = (props) => {

  const history = useHistory()
  const todaysDate = moment().format("MM/YYYY");
  const [timesheetFilterData, setTimesheetFilterData] = useState(null);
  const timesheetModuleData = useSelector((state) => state.timesheet.timesheetData)
 


  const dispatch = useDispatch()
  const handleShow = () => { dispatch(setModalActive()) };



  // const TimesheetTableCols = ['Projects', 'Project Owner', 'Project Code', 'Account Code', 'Engagement Type', 'Hours Logged', 'Billed Hours']
  const backToDashboard = () => {
    history.push("/dashboard")
  }
  const TimesheetModalCols = [
    {
      columnName: 'Projects',
      keyFunction: handleShow

    },
    {
      columnName: 'Project Owner',

    },
    {
      columnName: 'Project Code',

    },
    {
      columnName: 'Account Code',

    },
    {
      columnName: 'Engagement Type',

    },
    {
      columnName: 'Hours Logged',

    },
    {
      columnName: 'Billed Hours',

    },
    
  ]

  useEffect(() => {
    dispatch(getTimesheetData(todaysDate))

  }, [])

  useEffect(() => {
    const filterData = [];
    if (timesheetModuleData !== null) {
      timesheetModuleData.forEach((ele) => {
        filterData.push({
          projectId: ele.project_id,
          Projects: ele.project_name,
          ProjectOwner: ele.project_owner,
          ProjectCode: ele.project_code,
          AccountCode: ele.account_code,
          EngagementType: ele.engagement_type,
          HoursLogged: ele.hours_logged,
          BilledHours: ele.billed_hours

        })

      })
    }
    setTimesheetFilterData(filterData)


  }, [timesheetModuleData])



  return (
    <>
      
      <div>
        <ModalTimesheet />
      </div>


      <div className="timesheet-container">
        <div className="timesheet-back-button">
          <p onClick={backToDashboard} className="back-to-dashboard"> <span  className="back-arrow"> <BackArrow /> </span> Back Dashboard</p>

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

          {/* <button onClick={handleShow}> modal </button> */}

        </div>

        <div className="table-container">
          { timesheetFilterData !== null ?<> <TimesheetTable tableCols={TimesheetModalCols} tableData={timesheetFilterData} /> </> : null  }
          

        </div>
        

      </div>
    </>
  )
}



export default DashboardTemplate(
  Timesheet
);
