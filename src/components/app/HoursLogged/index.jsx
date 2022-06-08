import React, { Component } from "react";
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
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";

let bool = true;
const monthFormat = "MMM YYYY";

const tableColArray = [
  "Projects",
  "ProjectOwner",
  "ProjectCode",
  "AccountCode",
  "EngagementType",
  "HoursLogged",
  "BilledHours",
  "Status",
];

class HoursLogged extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showResources: false,
      data: [""],
      tableCols: [""],
      monthYear: moment(new Date()).format("MM/YYYY"),
    };
    this.handleOnOff = this.handleOnOff.bind(this);
  }

  componentDidMount = async () => {
    await getHoursLogged(this.state.monthYear);
    this.setState({
      data: this.props.hours_logged.hoursLogged,
      tableCols: Object.keys(this.props.hours_logged.hoursLogged[0]),
    });
  };

  //

  handleOnOff() {
    console.log(this.state.show);
    this.setState({ show: !this.state.show });
  }

  resourcesHandler = () => {
    this.setState({
      showResources: !this.state.showResources,
    });
  };

  dateHandler = (date) => {
    console.log(moment(date).format("MM/YYYY"), "eeeeeeeeeeeeee");
    // this.setState({
    //   monthYear: moment(date).format("MM/YYYY"),
    // });
    getHoursLogged(moment(date).format("MM/YYYY"));
  };

  render() {
    console.log(this.state.monthYear, "dateeeeeeeeeeeeeeeee");
    console.log("heyyyyyyyyyyy", this.props);
    if (this.props.hours_logged.hoursLogged && bool) {
      console.log("eehhhhhhhhh");
      bool = false;
      this.setState({
        tableCols: Object.keys(this.props.hours_logged.hoursLogged[0]),
      });
    }

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
        {this.state.showResources ? (
          <ProjectComponent />
        ) : (
          <div>
            <div className="header">
              <h3>Hours Logged/Project</h3>
              <button onClick={this.resourcesHandler}>go to resources</button>
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
                  selected={this.state.monthYear}
                  onChange={this.dateHandler}
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
              <table
                className="table"
                style={{
                  display: "block",
                }}
              >
                <thead className="tableHead">
                  <tr className="">
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
                          <td>{element.project_name}</td>
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
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    ...store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default DashboardTemplate(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(HoursLogged))
);
