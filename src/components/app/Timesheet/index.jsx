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
import { Modal } from "antd";
import moment from "moment";
import {
  getTimeSheet,
  getTimesheetResources,
} from "../../../actions/asyncActions";
import Classes from "./timeSheet.module.css";
const monthFormat = "MMM YYYY";

// const data = require("./data").data;

const columns = [
  {
    title: "Projects",
    dataIndex: "project_name",
    key: "project_name",
    // render: () => (
    //   <>
    //     <div onClick={this.updateId}></div>
    //   </>
    // ),
  },
  {
    title: "Resources",
    dataIndex: "resources",
    // key: "resources",
  },
  {
    title: "Project Owner",
    dataIndex: "project_owner",
    // key: "project_owner",
  },
  {
    title: "Project Code",
    dataIndex: "project_code",
    // key: "project_code",
  },
  {
    title: "Account Code",
    dataIndex: "account_code",
    // key: "account_code",
  },
  {
    title: "Engagement Type",
    dataIndex: "engagement_type",
    // key: "engagement_type",
  },
  {
    title: "Hours Logged",
    dataIndex: "hours_logged",
    // key: "hours_logged",
  },
  {
    title: "Biled Hours",
    dataIndex: "billed_hours",
    key: "billed_hours",
  },
];

const columns1 = [
  {
    title: "Projects",
    dataIndex: "project_name",
    key: "project_name",
  },
  {
    title: "Project Owner",
    dataIndex: "project_owner",
    // key: "project_owner",
  },
  {
    title: "Project Code",
    dataIndex: "project_code",
    key: "project_code",
  },
  {
    title: "Account Code",
    dataIndex: "account_code",
    // key: "account_code",
  },
  {
    title: "Engagement Type",
    dataIndex: "engagement_type",
    // key: "engagement_type",
  },
  {
    title: "Hours Logged",
    dataIndex: "hours_logged",
    // key: "hours_logged",
  },
  {
    title: "Biled Hours",
    dataIndex: "billed_hours",
    // key: "billed_hours",
  },
];

let currDate = new Date();
let bool = true;
const IdData = "";

class Timesheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isModalVisible: false,
      divContent: "",
      calenderValue: currDate.getMonth() + 1 + "-" + currDate.getFullYear(),
      month: "",
      year: "",
      firstDay: 1,
      lastDay: "",
      APIdata: [],
      expandedRowKeys: [],
      webTracker_id: "",
    };
    this.handleOnOff = this.handleOnOff.bind(this);
  }

  componentDidMount = () => {
    console.log("checking response : ", this.props);

    getTimeSheet(this.state.calenderValue);
    // getTimeSheetData(this.state.data);

    getTimesheetResources(this.state.calenderValue, this.state.webTracker_id);
  };

  handleOnOff() {
    // console.log(this.state.show);
    this.setState({ show: !this.state.show });
  }

  handleUpdateCalenderValue = (date, dateString) => {
    let d = new Date(date);
    let LD = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); //for lastdate of month
    this.setState({
      calenderValue: moment(date).format("MM-YYYY"), //data for API
      month: moment(date).format("MMM"),
      year: moment(date).format("YYYY"),
      lastDay: LD,
    });
    getTimeSheet(this.state.calenderValue);
  };

  handleModal = (event) => {
    this.setState({
      isModalVisible: true,
      divContent: event.currentTarget.textContent,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  onRowExpand = (expanded, record) => {
    getTimesheetResources(
      this.state.calenderValue,
      record.webtracker_project_id
    );

    console.log(
      "records fetched ",
      this.state.calenderValue,
      record.webtracker_project_id
    );
  };

  expandedRowRender = (rowIndex) => {
    console.log("checking ", rowIndex);
    const columns3 = [
      {
        title: "Resources",
        key: "resources",
        render: () => (
          <>
            <div
              style={{
                color: "#3463DA",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={this.handleModal}
            >
              {rowIndex.project_owner}
            </div>
            <span style={{ color: "#B9C4D3" }}>
              Time Log: {rowIndex.hours_logged}
            </span>
          </>
        ),
      },
      {
        key: "resources",
        render: () => (
          <>
            <div
              style={{
                color: "#3463DA",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={this.handleModal}
            >
              {rowIndex.project_owner}
            </div>
            <span style={{ color: "#B9C4D3" }}>
              Time Log:{rowIndex.hours_logged}
            </span>
          </>
        ),
      },
      {
        key: "resources",
        render: () => (
          <>
            <div
              style={{
                color: "#3463DA",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={this.handleModal}
            >
              {rowIndex.project_owner}
            </div>
            <span style={{ color: "#B9C4D3" }}>
              Time Log: {rowIndex.hours_logged}
            </span>
          </>
        ),
      },
      {
        key: "resources",
        render: () => (
          <>
            <div
              style={{
                color: "#3463DA",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={this.handleModal}
            >
              {rowIndex.project_owner}
            </div>
            <span style={{ color: "#B9C4D3" }}>
              Time Log: {rowIndex.hours_logged}
            </span>
          </>
        ),
      },
      {
        key: "resources",
        render: () => (
          <>
            <div
              style={{
                color: "#3463DA",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={this.handleModal}
            >
              {rowIndex.project_owner}
            </div>
            <span style={{ color: "#B9C4D3" }}>
              Time Log:{rowIndex.hours_logged}
            </span>
          </>
        ),
      },
    ];

    return (
      <Table
        columns={columns3}
        dataSource={this.state.APIdata}
        pagination={{ pageSize: 1 }}
        scroll={{ y: 240 }}
      />
    );
  };

  render() {
    console.log("getting resources  data : ", this.props.time_sheet.resources);
    console.log("show the id : ", this.state.webTracker_id);

    if (!this.props.time_sheet.timesheet) {
      return <div></div>;
    }

    if (this.props.time_sheet.timesheet) {
      if (bool) {
        this.setState({
          APIdata: this.props.time_sheet.timesheet,
        });
        bool = false;
      }
    }
    console.log("getting api response project data : ", this.props);

    console.log("getting api response project data : ", this.state.APIdata);

    return (
      <div
        // style={{
        //   position: "relative",
        //   left: "200px",
        //   width: "75vw",
        //   top: "70px",
        // }}
      >
        {/* <div className={Classes.backBtn}>
          <IoIosArrowBack />
          Back Dashboard
        </div> */}
        <div className={Classes.header}>
          <h3>Timesheet</h3>
          <Space>
            <DatePicker
              picker="month"
              suffixIcon={
                <span className={Classes.styleDateIcons}>
                  <RiCalendar2Line />
                  <IoIosArrowDown />
                </span>
              }
              className={Classes.styleCalender}
              format={monthFormat}
              onChange={this.handleUpdateCalenderValue}
            />
          </Space>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <h6>Filter by:</h6>
          <div className={Classes.filterForm}>
            <Form className={Classes.formStyle}>
              <Input placeholder="Project Name" />
              <Input placeholder="Project Owner" />
              <Input placeholder="Engagement Type" />
              <Input placeholder="Status" style={{ width: "130px" }} />
              <Button>Go</Button>
            </Form>
            <div className={Classes.styleRes}>
              <span>
                <Switch onChange={this.handleOnOff} />
                Resources
                <Button
                  className={Classes.ExportBtn}
                  style={{ color: "#FFFFFF" }}
                >
                  Export to Excel
                </Button>
              </span>
            </div>
          </div>
        </div>
        <div className={Classes.styleDataTable}>
          {this.state.show ? (
            <Table
              columns={columns}
              // dataSource={data}
              dataSource={this.state.APIdata}
              expandable={{
                expandedRowRender: this.expandedRowRender,
                onExpand: (f, s) => {
                  this.onRowExpand(f, s);
                },
              }}
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              pagination={{ pageSize: 20 }}
              scroll={{ y: 240 }}
            />
          ) : (
            <Table
              columns={columns1}
              // dataSource={data}
              dataSource={this.state.APIdata}
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              pagination={{ pageSize: 20 }}
              scroll={{ y: 240 }}
            />
          )}
        </div>

        <Modal
          title={`${this.state.divContent} - Monthly TimeSheet Stats`}
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className={Classes.modalHeading}>
            1 {this.state.month} - {this.state.lastDay} {this.state.month}{" "}
            {this.state.year} Worked Hours
          </div>
          <table className={Classes.StyleModalTable}>
            <tr>
              <th> </th>
              <th>Hours</th>
              <th>Task Memo</th>
            </tr>
            <tr>
              <td>2 Dec, Thursday</td>
              <td>0:50</td>
              <td>lorem ipsum</td>
            </tr>
            <tr>
              <td>10 Dec, Friday</td>
              <td>2:10</td>
              <td>Lorem ipsum dolor.</td>
            </tr>
            <tr>
              <td>21 Dec, Tuesday</td>
              <td>0:40</td>
              <td>Lorem ipsum dolor sit.</td>
            </tr>
            <tr>
              <td>21 Dec, Tuesday</td>
              <td>3:45</td>
              <td>Lorem ipsum dolor sit.</td>
            </tr>
            <tr>
              <td>21 Dec, Tuesday</td>
              <td>3:40</td>
              <td>Lorem ipsum dolor sit.</td>
            </tr>
            <tr>
              <td>21 Dec, Tuesday</td>
              <td>2:40</td>
              <td>Lorem ipsum dolor sit.</td>
            </tr>
            <tr>
              <td>21 Dec, Tuesday</td>
              <td>2:15</td>
              <td>Lorem ipsum dolor sit.</td>
            </tr>
            <tr>
              <td>21 Dec, Tuesday</td>
              <td>4:15</td>
              <td>Lorem ipsum dolor sit.</td>
            </tr>
            <tr>
              <td>Total Hours: </td>
              <td>20:15</td>
              <td> </td>
            </tr>
          </table>
        </Modal>
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
  connect(mapStateToProps, mapDispatchToProps)(withRouter(Timesheet))
);
