import React, { Component } from "react";
import { connect } from "react-redux";
import timesheetLayoutTemplate from "../../layouts/timesheetLayout/timesheetLayoutTemplate";
import { withRouter } from "react-router";
import { Space } from "antd";
import { Input } from "antd";
import Form from "antd/lib/form/Form";
import { Button } from "antd";
import { Switch } from "antd";
import { Table } from "antd";
import { Collapse } from "antd";
import { CollapsePanel } from "antd/lib/collapse/CollapsePanel";
import "./hoursLogged.css";
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import moment from "moment";
import ProjectComponent from "./ProjectComp";
import TimesheetTable from "../../commonComponents/TimesheetTable/TimesheetTable";
import {
  getHoursloggedData,
  getResourcesHoursloggedData,
} from "../../../redux/actions/hoursloggedAction";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";

const HoursLogged = () => {
  const monthFormat = "MMM YYYY";
  const filterData = [];
  const dispatch = useDispatch();

  //to show ProjectComponent
  const [hoursloggedResources, setHoursloggedResources] = useState(false);

  //to show 2nd screen

  const [tableData, setTableData] = useState(null);

  const ProjectComponentHandler = (event) => {
    dispatch(getResourcesHoursloggedData(event.target.id));
    setHoursloggedResources(true);
    console.log("idddddddddd", event.target.id);
  };

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
    dispatch(getHoursloggedData("06/2022"));
  }, []);

  // sets Hours Logged Data
  useEffect(() => {
    if (hoursLoggedModuleData !== null) {
      hoursLoggedModuleData.forEach((ele) => {
        filterData.push({
          ProjectId: ele.webtracker_project_id,
          Projects: ele.project_name,
          ProjectOwner: ele.owner_name,
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

  return (
    <>
      {hoursloggedResources ? (
        <ProjectComponent />
      ) : (
        <>
          <div className="timesheet-container">
            <div className="timesheet-back-button">
              <p className="back-to-dashboard">
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
                <DateFilter />
              </div>
            </div>
            <TimesheetFilters />

            <div className="table-container">
              {hoursLoggedModuleData !== null ? (
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

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default timesheetLayoutTemplate(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(HoursLogged))
);
