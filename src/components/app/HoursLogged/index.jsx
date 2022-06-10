import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import DashboardTemplate from "../../layouts/template";
import { withRouter } from "react-router";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { RiCalendar2Line } from "react-icons/ri";
import { DatePicker, Space } from "antd";
import Table from "../../commonComponents/Table/Table";
import "./hoursLogged.css";
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import ProjectComponent from "./ProjectComp";
import { getHoursLogged } from "../../../actions/asyncActions";
import moment from "moment";
import TempTable from "../../commonComponents/TimesheetTable/TimesheetTable";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";

const HoursLogged = () => {
  const tableColArray = [
    "Projects",
    "Project Owner",
    "Project Code",
    "Account Code",
    "Engagement Type",
    "Hours Logged",
    "Billed Hours",
    "Status",
  ];

  let bool = true;
  const monthFormat = "MMM YYYY";
  const filterData = [];
  const hoursLoggedModuleData = useSelector(
    (state) => state.hoursLogged.hoursloggedData
  );

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [data, setData] = useState([""]);
  const [tableCols, setTableCols] = useState([""]);
  const [monthYear, setMonthYear] = useState(
    moment(new Date()).format("MM/YYYY")
  );
  const [tableData, setTableData] = useState(null);

  // useEffect = async () => {
  //   await getHoursLogged(monthYear);
  //   this.setState({
  //     data: this.props.hours_logged.hoursLogged,
  //   });
  // };

  useEffect(() => {
    dispatch(getHoursLogged(monthYear));
  }, []);

  useEffect(() => {
    if (hoursLoggedModuleData !== null) {
      hoursLoggedModuleData.forEach((ele) => {
        filterData.push({
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

  const handleOnOff = () => {
    setShow(!show);
  };

  const resourcesHandler = () => {
    setShowResources(!showResources);
  };

  const dateHandler = (date) => {
    console.log(moment(date).format("MM/YYYY"), "eeeeeeeeeeeeee");
    getHoursLogged(moment(date).format("MM/YYYY"));
  };

  // console.log(this.state.monthYear, "dateeeeeeeeeeeeeeeee");
  // console.log("heyyyyyyyyyyy", this.props);
  // if (this.props.hours_logged.hoursLogged && bool) {
  //   console.log("eehhhhhhhhh");
  //   bool = false;
  //   this.setState({
  //     tableCols: Object.keys(this.props.hours_logged.hoursLogged[0]),
  //   });
  // }

  return (
    <div
      style={{
        position: "relative",
        left: "20px",
        width: "100%",
        height: "100%",
        top: "10px",
      }}
    >
      {showResources ? (
        <ProjectComponent />
      ) : (
        <div>
          <div className="header">
            <h3>Hours Logged/Project</h3>
            <button onClick={resourcesHandler()}>go to resources</button>
            <Space>
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
                  background: "#EAEEF4",
                  border: "none",
                  // opacity: "0.05",
                  fontSize: "14px",
                  color: "#1f4173",
                }}
                format={monthFormat}
                selected={monthYear}
                onChange={dateHandler()}
              />
            </Space>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h6 className="filterStyle">Filter by:</h6>
            <div className="filterForm">
              <div>
                <form className="formStyle">
                  <input placeholder="Project Name" />
                  <input placeholder="Project Owner" />
                  <input placeholder="Engagement Type" />
                  <input placeholder="Status" style={{ width: "130px" }} />
                  <button className="filterFormBtn">Go</button>
                </form>
              </div>
              <div className="styleRes">
                <span>
                  <button className="ExportBtn">Export to Excel</button>
                </span>
              </div>
            </div>
          </div>
          <div className="styleDataTable">
            {/* <table
                className="table"
                style={{
                  display: "block",
                }}
              >
                <thead className="tableHead">
                  <tr
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "5em",
                      padding: "5px 2px",
                    }}
                  >
                    <th>Projects</th>
                    <th>Project Owner</th>
                    <th>Project Code</th>
                    <th>Account Code</th>
                    <th>Engagement Type</th>
                    <th>Hours Logged</th>
                    <th>Blied Hours</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    height: "300px",
                    overflowY: "scroll",
                    display: "block",
                  }}
                >
                  {this.props.hours_logged.hoursLogged?.map(
                    (element, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ width: "50px" }}>
                            {element.project_name}
                          </td>
                          <td>{element.owner_name}</td>
                          <td>{element.project_code}</td>
                          <td>{element.account_code}</td>
                          <td>{element.engagement_type}</td>
                          <td>{element.logged_time}</td>
                          <td>{element.logged_time}</td>
                          <td>{element.health_status_description}</td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table> */}

            {tableData !== null ? (
              <TempTable tableCols={tableColArray} tableData={tableData} />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

// const mapStateToProps = (store) => {
//   return {
//     ...store,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default DashboardTemplate(HoursLogged);
