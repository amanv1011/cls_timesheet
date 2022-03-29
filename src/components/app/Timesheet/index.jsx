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
import { getTimeSheet } from "../../../actions/asyncActions";
import Classes from "./timeSheet.module.css";
const monthFormat = "MMM YYYY";

const columns = [
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
  {
    key: "project_id",
    title: "Id Hours",
    dataIndex: "project_id",
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

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];

let currDate = new Date();
let bool = true;

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
    };
    this.handleOnOff = this.handleOnOff.bind(this);
  }

  componentDidMount = () => {
    console.log("checking response : ", this.props);

    getTimeSheet(this.state.calenderValue);
    // getTimeSheetData(this.state.data);
    console.log("calling API's function :", this.state.calenderValue);

    console.log(
      "getting dattttttttttttttttttaaaaaaaaaaa : ",
      this.state.APIdata
    );
  };

  handleOnOff() {
    console.log(this.state.show);
    this.setState({ show: !this.state.show });
  }

  handleUpdateCalenderValue = (date, dateString) => {
    let d = new Date(date);
    let LD = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); //for lastdate of month
    console.log("last date is : ", LD);
    this.setState({
      calenderValue: moment(date).format("MM-YYYY"), //data for API
      month: moment(date).format("MMM"),
      year: moment(date).format("YYYY"),
      lastDay: LD,
      // calenderValue: date,
    });
    getTimeSheet(this.state.calenderValue);
    console.log("date from calender : ", this.state.calenderValue);
    console.log("curr month value : ", this.state.month);
    console.log("current year value: ", this.state.year);
    console.log("updated lastdate is : ", this.state.lastDay);
  };

  handleModal = (event) => {
    this.setState({
      isModalVisible: true,
      divContent: event.currentTarget.textContent,
    });
  };

  // handleDaysInMonth = (month, year) => {
  //   return new Date(0, month, year).getDate();
  // };

  // handleFirstLastDate = () => {
  //   let date = new Date(this.state.calenderValue);
  //   this.setState({
  //     firstDay: new Date(1, date.getMonth(), date.getFullYear()),
  //     lastDay: new Date(
  //       this.handleDaysInMonth(date.getMonth() + 1, date.getFullYear()),
  //       date.getMonth(),
  //       date.getFullYear()
  //     ),
  //   });
  //   console.log(this.state.firstDay);
  //   console.log(this.state.lastDay);
  // };

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

  expandedRowRender = () => {
    const columns = [
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
              Rahul Mehra
            </div>
            <span style={{ color: "#B9C4D3" }}>Time Log: 20h 15m</span>
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
              Himanshu Jindal
            </div>
            <span style={{ color: "#B9C4D3" }}>Time Log: 30h 00m</span>
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
              Vineet Jain
            </div>
            <span style={{ color: "#B9C4D3" }}>Time Log: 15h 10m</span>
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
              Amit Chaudhary
            </div>
            <span style={{ color: "#B9C4D3" }}>Time Log: 25h 20m</span>
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
              Gagandeep Singh
            </div>
            <span style={{ color: "#B9C4D3" }}>Time Log: 19h 30m</span>
          </>
        ),
      },
    ];

    // for (let i = 0; i < 1; ++i) {
    //   data.push({
    //     key: i,
    //   });
    // }
    // console.log(data);
    return (
      <Table
        columns={columns}
        dataSource={this.state.APIdata}
        pagination={{ pageSize: 1 }}
        // scroll={{ y: 240 }}
      />
    );
  };

  render() {
    if (!this.props.time_sheet.timesheet) {
      return <div></div>;
    }

    if (this.props.time_sheet.timesheet) {
      if (bool) {
        this.setState({ APIdata: this.props.time_sheet.timesheet.projects });
        bool = false;
      }
    }

    console.log("getting api response project data : ", this.state.APIdata);
    // console.log("render api data : ", this.props);

    return (
      <div>
        <div className={Classes.backBtn}>
          <IoIosArrowBack />
          Back Dashboard
        </div>
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
              <Input placeholder="Status" />
              <Button>Go</Button>
            </Form>
            <div className={Classes.styleRes}>
              <span>
                <Switch onChange={this.handleOnOff} />
                Resources
                <Button className={Classes.ExportBtn}>Export to Excel</Button>
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
              expandedRowRender={this.expandedRowRender}
              expandable={{
                rowExpandable: (record) => record.extra !== "Not expandable",
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
              columns={columns}
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
          style={{ width: "70%" }}
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
