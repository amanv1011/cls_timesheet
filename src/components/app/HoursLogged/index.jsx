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
  handleOnOff() {
    console.log(this.state.show);
    this.setState({ show: !this.state.show });
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showResources: false,
    };
    this.handleOnOff = this.handleOnOff.bind(this);
  }
  render() {
    // console.log("dashboard", this.props)

    return (
      <div
        style={{
          position: "relative",
          left: "20px",
          width: "75vw",
          top: "10px",
        }}
      >
        {this.state.showResources ? (
          <ProjectComponent />
        ) : (
          <div>
            <div className="header">
              <h3>Hours Logged/Project</h3>
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
                />
              </Space>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <h6 className="filterStyle">Filter by:</h6>
              <div className="filterForm">
                <form className="formStyle">
                  <input placeholder="Project Name" />
                  <input placeholder="Project Owner" />
                  <input placeholder="Engagement Type" />
                  <input placeholder="Status" style={{ width: "130px" }} />
                  <button className="filterFormBtn">Go</button>
                </form>

                <div className="styleRes">
                  <span>
                    <button className="ExportBtn">Export to Excel</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="styleDataTable">
              <Table
                tableCols={tableColArray}
                showResources={this.state.showResources}
              />
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
