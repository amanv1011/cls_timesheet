import React, { useEffect, useState } from "react";
import timesheetLayoutTemplate from "../../layouts/timesheetLayout/timesheetLayoutTemplate";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";
import BackArrow from "../../../assets/images/icons/BackArrow";
import nodataFound from "../../../assets/images/disabled_icon/nodataFound.png"
import TimesheetTable from "../../commonComponents/TimesheetTable/TimesheetTable";
import "./TimesheetModule.css";
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import ModalTimesheet from "../../commonComponents/Modal/ModalTimesheet";
import { useDispatch, useSelector } from "react-redux";
import { setModalActive } from "../../../redux/actions/modalAction";
import { getTimesheetData } from "../../../redux/actions/timesheetActions";
import { getTimesheetFilterData } from "../../../redux/actions/timesheetFilterAction";
import moment from "moment";
import { useHistory } from "react-router-dom";
import {
  getTimesheetResourceData,
  getParticularResourceData,
  setResourceName,
} from "../../../redux/actions/timesheetResourceAction";
import { setActivePage } from "../../../redux/actions/paginationActions"
import "./TimesheetModule.css";
import { style } from "@mui/system";

const Timesheet = (props) => {
  const history = useHistory();
  const todaysDate = moment().format("MM/YYYY");
  const [timesheetFilterData, setTimesheetFilterData] = useState(null);
  const [projectNameHeading, setProjectNameHeading] = useState(null);
  const [timesheetResources, setTimesheetResources] = useState();
  const [filterDataMini, setFilterDataMini] = useState(null);
  const [webtrackerId, setWebtrackerId] = useState(" ");
  const timesheetModuleData = useSelector((state) => state.timesheet.timesheetData);
  const [timesheetFilterSwitch, setTimesheetFilterSwitch] = useState(false);
  const [resTableActivePage, setResTableActivePage] = useState(1);



  const timesheetStartDate = useSelector(
    (state) => state.dateFilter.filterDateStart
    
  );

const filterDate = moment(timesheetStartDate).format("MM-YYYY");

  const timesheetEndDate = useSelector(
    (state) => state.dateFilter.filterDateEnd
  );

  const dispatch = useDispatch();

  const timesheetResourceData = useSelector(
    (state) => state.timesheetResource.timesheetResourceData
  );

  useEffect(() => {
    dispatch(
      getTimesheetResourceData(
        webtrackerId,
        timesheetStartDate,
        timesheetEndDate,
        
      )
    );

  }, [timesheetStartDate, timesheetEndDate])


  // pagination functions

  const resGotoNextPage = () => {
    setResTableActivePage((page) => page + 1);
  };

  const resgotoPrevPage = () => {
    setResTableActivePage((page) => page - 1);
  };

  const resChangePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setResTableActivePage(pageNumber);
  };

  const setResourcesData = (event) => {
    setProjectNameHeading(event.target.innerText);
    setWebtrackerId(event.target.id);
    dispatch(
      getTimesheetResourceData(
        event.target.id,
        timesheetStartDate,
        timesheetEndDate
      )
    );
    setTimesheetFilterSwitch(true);
  };

  const setResourceDetailedData = (event) => {
    const userID = event.target.id;
    dispatch(setResourceName(event.target.innerText));
    dispatch(
      getParticularResourceData(
        webtrackerId,
        timesheetStartDate,
        timesheetEndDate,
        userID
      )
    );
    dispatch(setModalActive());
  };

  const TimesheetSwitchCols = [
    {
      columnName: "Projects",
      columnKeyValue: "WebTrackerId",
      keyFunction: setResourcesData,
    },

    {
      columnName: "Project Owner",
    },
  ];
  const TimesheetSwitchCols2 = [
    {
      columnName: "Resource",
      columnKeyValue: "UserId",
      keyFunction: setResourceDetailedData,
    },

    {
      columnName: "Hours Logged",
    },
  ];
  const TimesheetModalCols = [
    {
      columnName: "Projects",
      columnKeyValue: "WebTrackerId",
      keyFunction: setResourcesData,
    },

    {
      columnName: "Project Owner",
    },
    {
      columnName: "Project Code",
    },

    {
      columnName: "Account Code",
    },

    {
      columnName: "Engagement Type",
    },

    {
      columnName: "Hours Logged",
    },

    {
      columnName: "Billed Hours",
    },
  ];
  useEffect(() => {
    dispatch(getTimesheetData(filterDate));
  }, []);
  useEffect(() => {
    dispatch(setActivePage(1))
  },[])


  useEffect(() => {
    const filterData = [];
    if (timesheetResourceData.length >= 1) {
      timesheetResourceData.forEach((ele) => {
        filterData.push({
          ResourceName: ele.name,
          TimeLog: parseInt(ele.time_logged) / 60,
        });    
      });
    }
  
    
      
    setTimesheetResources(filterData);
    return () => { };
  }, [timesheetResourceData]);

  useEffect(() => {
    const filterData = [];
    const filterDataMini = [];

    if (timesheetModuleData !== null) {
      timesheetModuleData.forEach((ele) => {
        filterDataMini.push({
          WebTrackerId: ele.webtracker_project_id,
          Projects: ele.project_name,
          ProjectOwner: ele.project_owner,
        });
        filterData.push({
          WebTrackerId: ele.webtracker_project_id,
          Projects: ele.project_name,
          ProjectOwner: ele.project_owner,
          ProjectCode: ele.project_code,
          AccountCode: ele.account_code,
          EngagementType: ele.engagement_type,
          HoursLogged: ele.hours_logged,
          BilledHours: ele.billed_hours,
        });
      });
    }
    setTimesheetFilterData(filterData);
    setFilterDataMini(filterDataMini);
  }, [timesheetModuleData]);

  return (
    <>

      <div>
        <ModalTimesheet />
      </div>
     
      <div className="timesheet-container">
        <div className="timesheet-container-heading">
          <div className="timesheet-heading-title">
            <h3> Timesheet </h3>
          </div>
          <div className="timesheet-heading-date">
            <DateFilter />
          </div>
        </div>
        <TimesheetFilters />
        <div>{""}</div>
        
        

        { timesheetFilterSwitch && <div  onClick={() => { setTimesheetFilterSwitch(false)}} className="timesheet-back-button">
          <p  className="back-to-dashboard">
            {" "}
            <span className="back-arrow">
              {" "}
              <BackArrow />{" "}
            </span>{" "}
            Back to Table
          </p>
        </div>}

        <div
        
          className= {window.location.pathname === "/timesheet" ? "table-container-custom" : "table-container"}  
          style={
            timesheetFilterSwitch === true
              ? { background: "#F5F7FB" }
              : { background: "#FFF" }
          }
        >
          {timesheetFilterSwitch === false ? (
            timesheetFilterData !== null ? (
              <>
                <TimesheetTable
                  tableCols={TimesheetModalCols}
                  tableData={timesheetFilterData}
                />
              </>
            ) : null
          ) : (
            <>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "50%",
                    borderRadius: "15px",
                    margin: "3px",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  {filterDataMini && (
                    <TimesheetTable
                      tableCols={TimesheetSwitchCols}
                      tableData={filterDataMini}
                    />
                  )}
                </div>

                <div
                  style={{
                    width: "50%",
                    borderRadius: "15px",
                    margin: "3px",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div className="table-project-name">{projectNameHeading}</div>
                  {timesheetResourceData && (
                    <TimesheetTable
                      tableCols={TimesheetSwitchCols2}
                      tableData={timesheetResourceData}
                      locChangePage={resChangePage}
                      locgotoNextPage={resGotoNextPage}
                      locgotoPrevPage={resgotoPrevPage}
                      locCurrentPage={resTableActivePage}
                      tableHeight={"80%"}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default timesheetLayoutTemplate(Timesheet);
