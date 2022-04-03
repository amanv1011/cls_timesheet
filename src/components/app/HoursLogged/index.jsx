import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardTemplate from "../../layouts/template";
import { withRouter } from "react-router";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { RiCalendar2Line } from "react-icons/ri";
import { DatePicker, Space } from "antd";
import { Input } from "antd";
import Form from "antd/lib/form/Form";
import { Button } from "antd";
import { Switch } from "antd";
import { Table } from "antd";
import { Collapse } from "antd";
import { CollapsePanel } from "antd/lib/collapse/CollapsePanel";
import "./hoursLogged.css";

const monthFormat = "MMM YYYY";

const columns = [
  {
    title: "Projects",
    dataIndex: "projects",
    key: "projects",
  },
  {
    title: "Resources",
    dataIndex: "resources",
    key: "resources",
  },
  {
    title: "Project Owner",
    dataIndex: "projectowner",
    key: "projectowner",
  },
  {
    title: "Project Code",
    dataIndex: "projectcode",
    key: "projectcode",
  },
  {
    title: "Account Code",
    dataIndex: "accountcode",
    key: "accountcode",
  },
  {
    title: "Engagement Type",
    dataIndex: "engagementtype",
    key: "engagementtype",
  },
  {
    title: "Hours Logged",
    dataIndex: "hourslogged",
    key: "hourslogged",
  },
  {
    title: "Biled Hours",
    dataIndex: "biledhours",
    key: "biledhours",
  },
];

const columns1 = [
  {
    title: "Projects",
    dataIndex: "projects",
    key: "projects",
  },
  {
    title: "Project Owner",
    dataIndex: "projectowner",
    key: "projectowner",
  },
  {
    title: "Project Code",
    dataIndex: "projectcode",
    key: "projectcode",
  },
  {
    title: "Account Code",
    dataIndex: "accountcode",
    key: "accountcode",
  },
  {
    title: "Engagement Type",
    dataIndex: "engagementtype",
    key: "engagementtype",
  },
  {
    title: "Hours Logged",
    dataIndex: "hourslogged",
    key: "hourslogged",
  },
  {
    title: "Biled Hours",
    dataIndex: "biledhours",
    key: "biledhours",
  },
];

const data = [
  {
    key: "1",
    projects: "Studio a+i Digital Marketing",
    projectowner: "Rajesh Chandra",
    projectcode: "PC101",
    accountcode: "PAC101",
    engagementtype: "Fixed",
    hourslogged: "110h 15m",
    biledhours: "00h",
  },
  {
    key: "2",
    projects: "MDA Development & Marketing",
    projectowner: "Rahul Mehra",
    projectcode: "PC102",
    accountcode: "PAC102",
    engagementtype: "Dedicated",
    hourslogged: "120h 20m",
    biledhours: "160h",
  },
  {
    key: "3",
    projects: "HIRED Development & Marketing",
    projectowner: "Himanshu Jindal",
    projectcode: "PC103",
    accountcode: "PAC103",
    engagementtype: "Fixed",
    hourslogged: "180h 10m",
    biledhours: "00h",
  },
  {
    key: "4",
    projects: "Clock Store Marketing",
    projectowner: "Amit chaudhary",
    projectcode: "PC104",
    accountcode: "PAC104",
    engagementtype: "Fixed",
    hourslogged: "75h 30m",
    biledhours: "190h",
  },
  {
    key: "5",
    projects: "Upright HC - Digital Marketing",
    projectowner: "Gagandeep Singh",
    projectcode: "PC105",
    accountcode: "PAC105",
    engagementtype: "Dedicated",
    hourslogged: "225h 20m",
    biledhours: "00h",
  },
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
    };
    this.handleOnOff = this.handleOnOff.bind(this);
  }
  render() {
    // console.log("dashboard", this.props)

    return (
      <div
        style={{
          position: "relative",
          left: "200px",
          width: "75vw",
          top: "70px",
        }}
      >
        <div className="header">
          <h3>Hours Logged/Project</h3>
          <Space>
            <DatePicker
              picker="month"
              suffixIcon={
                <span className="styleDateIcons">
                  <RiCalendar2Line />
                  <IoIosArrowDown />
                </span>
              }
              style={{
                width: "9rem",
                borderRadius: "5px",
              }}
              format={monthFormat}
            />
          </Space>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <h6>Filter by:</h6>
          <div className="filterForm">
            {/* <Form className="formStyle"> */}
            <Input placeholder="Project Name" />
            <Input placeholder="Project Owner" />
            <Input placeholder="Project Code" />
            <Input placeholder="Account Code" />
            <Input placeholder="Engagement Type" />
            <Input placeholder="Status" />
            <Button>Go</Button>
            {/* </Form> */}
            {/* <div className="styleRes">
              <span>
                <Button className="ExportBtn">Export to Excel</Button>
              </span>
            </div> */}
          </div>
        </div>
        <div className="styleDataTable">
          <Table
            columns={columns1}
            dataSource={data}
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            // pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
        </div>
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
