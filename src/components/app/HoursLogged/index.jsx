import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BackArrow from "../../../assets/images/icons/BackArrow";
import timesheetLayoutTemplate from "../../layouts/timesheetLayout/timesheetLayoutTemplate";
import "./hoursLogged.css";
import DatePicker from "react-datepicker";
import { RiCalendar2Line } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import moment from "moment";
import ProjectComponent from "./ProjectComp";
import TimesheetTable from "../../commonComponents/TimesheetTable/TimesheetTable";
import {
  getHoursloggedData,
  getResourcesHoursloggedData,
} from "../../../redux/actions/hoursloggedAction";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const HoursLogged = () => {
  const monthFormat = "MMM YYYY";

  const projectData = [];
  const dispatch = useDispatch();
  const history = useHistory();

  //to show ProjectComponent
  const [hoursloggedResources, setHoursloggedResources] = useState(false);

  //to show 2nd screen
  const [tableData, setTableData] = useState(null);

  //date
  const [date, setDate] = useState(new Date());

  const [id, setId] = useState("");

  const [projectID, setProjectID] = useState("");
  const [projectName, setProjectName] = useState("");

  const ProjectComponentHandler = (event) => {
    hoursLoggedModuleData.results.forEach((element) => {
      if (element.webtracker_project_id == event.target.id) {
        setProjectID(element.project_id);
        setProjectName(element.project_name);
      }
    });

    if (projectID) {
      dispatch(
        getResourcesHoursloggedData(
          event.target.id,
          projectID,
          moment(date).format("YYYY-MM-DD")
        )
      );
    }
    setHoursloggedResources(true);
    setId(event.target.id);
    console.log(event.target);
  };
  
  console.log(projectID,'TEST');

  const tableColArray = [
    {
      columnName: "Projects",
      columnKeyValue: "ProjectId",
      keyFunction: ProjectComponentHandler,
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
      columnName: "Biled Hours",
    },
    {
      columnName: "Status",
    },
  ];

  const hoursLoggedModuleData = useSelector(
    (state) => state.hoursLogged.hoursloggedData
  );

  //dispatches API action
  useEffect(() => {
    dispatch(getHoursloggedData(moment(date).format("MM/YYYY")));
  }, []);

  useEffect(() => {
    const filterData = [];
    if (hoursLoggedModuleData !== null) {
      console.log(hoursLoggedModuleData, "first table data");
      console.log(hoursLoggedModuleData.project_id, "first table ID");

      hoursLoggedModuleData.results.forEach((ele) => {
        filterData.push({
          ProjectId: ele.webtracker_project_id,
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

  const backToDashboard = () => {
    history.push("/dashboard");
  };

  console.log(id, projectID);

  return (
    <>
      {hoursloggedResources ? (
        <ProjectComponent
          id={id}
          projectID={projectID}
          projectName={projectName}
          hoursloggedResources={hoursloggedResources}
          onClick={setHoursloggedResources}
        />
      ) : (
        <>
          <div className="timesheet-container">
            <div className="timesheet-back-button">
              <p className="back-to-dashboard" onClick={backToDashboard}>
                {" "}
                <span className="back-arrow">
                  {" "}
                  <BackArrow />{" "}
                </span>{" "}
                Back Dashboard
              </p>
            </div>
            <div className="timesheet-container-heading">
              <div className="timesheet-heading-title">
                <h3> Hours Logged / Project </h3>
              </div>
              <div className="timesheet-heading-date">
                <DatePicker
                  selected={date}
                  onChange={(d) => setDate(d)}
                  dateFormat="MMM yyyy"
                  showMonthYearPicker
                  customInput={<CustomInput />}
                />
              </div>
            </div>
            <TimesheetFilters />
            <div className="table-container">
              {tableData !== null ? (
                <TimesheetTable
                  tableCols={tableColArray}
                  tableData={tableData}
                />
              ) : null}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default timesheetLayoutTemplate(HoursLogged);

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <div className="hoursLogCalender">
      <label onClick={props.onClick} ref={ref}>
        {props.value || props.placeholder}
      </label>
      <div onClick={props.onClick}>
        <RiCalendar2Line className="tableCalender" />
        <BiChevronDown style={{ fontSize: "20px", fontWeight: "bold" }} />
      </div>
    </div>
  );
});
