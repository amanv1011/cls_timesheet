import React from "react";
import { Table, Button, Input } from "antd";
import { connect } from "react-redux";
import DashboardTemplate from "../../layouts/template";
import { withRouter } from "react-router";
import { IoIosArrowBack, IoIosSquare } from "react-icons/io";
// import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./weeklystatus.css";
import { getWeeklyStatus } from "../../../actions/asyncActions";
<<<<<<< HEAD
import { AiOutlineEdit } from "react-icons/ai"
import moment from 'moment';

=======
import { AiOutlineEdit } from "react-icons/ai";
>>>>>>> 6cc6e58c4f629c158e0232db3cd6f3670b279dba

const columns = [
  {
    title: "Project",
    dataIndex: "project_name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Engagement Type",
    dataIndex: "engagement_type",
  },
  {
    title: "Week Status",
    dataIndex: "weekly_status_description",
    render: (weekly_status_description) => (
      <Input
        className="textarea"
        value={weekly_status_description}
        suffix={<AiOutlineEdit />}
      />
    ),
  },
  {
    title: "Project Health",
    dataIndex: "weekly_project_heatlh",
    render: (weekly_project_heatlh) => (
      <span>
        <IoIosSquare
          style={{
            color: `${
              weekly_project_heatlh.toLowerCase() == "poor"
                ? "red"
                : weekly_project_heatlh.toLowerCase() == "good"
                ? "lightGreen"
                : weekly_project_heatlh.toLowerCase() == "average"
                ? "yellow"
                : ""
            }`,
          }}
        />
        {weekly_project_heatlh}
      </span>
    ),
  },
];
<<<<<<< HEAD

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
=======
const data = [
  {
    key: "1",
    project_name: "Studio a+i Digital Marketing",
    engagement_type: "Fixed",
    weekly_status_description: (
      <textarea
        className="textarea"
        cols="40"
        rows="1"
        placeholder="textarea"
      ></textarea>
    ),
    weekly_project_heatlh: "GOOD",
  },
  {
    key: "2",
    project_name: "Clock store Marketing",
    engagement_type: "Fixed",
    weekly_status_description: (
      <textarea
        className="textarea"
        cols="40"
        rows="1"
        placeholder="textarea"
      ></textarea>
    ),
    weekly_project_heatlh: "good",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
>>>>>>> 6cc6e58c4f629c158e0232db3cd6f3670b279dba
};


class WeeklyStatus extends React.Component {
<<<<<<< HEAD
    componentDidMount = () => {
        getWeeklyStatus();
        // 
    };

    constructor() {
        super();
        this.state = {
            selectionType: "checkbox",
            startDt: null,
            endDt: null,
        }
    }
    dateHandler = (e) => {
        let a = e.target.value
        // console.log(a);
        this.setState({ startDt: moment(a[0]).format("YYYY-MM-DD"), endDt: moment(a[1]).format("YYYY-MM-DD") })
        console.log(this.state.startDt);
        getWeeklyStatus(this.state.startDt, this.state.endDt);
    }
    render() {
        return <>

            <div className="backBtn">
                <IoIosArrowBack />
                Back
            </div>
            <div className="upperRow">
                <h3>Weekly Stauts</h3>
                <div className="filter">
                    <div >
                        <p style={{ display: "contents" }}>Stauts Logged</p>
                        <DateRangePickerComponent
                            format={'dd MMM yy'}
                            placeholder="Select Date Range"
                            startDate={this.state.startDt}
                            endDate={this.state.endDt}
                            onChange={this.dateHandler}
                        />
                    </div>
                    <label htmlFor="options" className="optLabel">Filter by: </label>
                    <select className="select" name="options" id="options">
                        <option value="engagement">Engagement Type</option>
                        <option value="health">Health Type</option>
                        <option value="status">Status Type</option>

                    </select>

                </div>
            </div>
            <div className="weekTable">
                <Table
                    pagination={false}
                    // footer={()=>{<p>This is Footer</p>}}
                    columns={columns} dataSource={this.props.week_status.weeklyStatus ? this.props.week_status.weeklyStatus.projects : []}
                    rowSelection={{
                        type: this.state.selectionType,
                        ...rowSelection,


                    }} />
                <div className="button_wrap" style={{ float: "right", margin: "20px" }}>
                    <Button className="weekBtn" style={{ background: "#8D9DB7" }} ghost>Cancel</Button>
                    <Button className="weekBtn" type="primary">Save</Button>
                </div>
            </div>
        </>;
    }
=======
  componentDidMount = () => {
    getWeeklyStatus();
    this.setState({ data_: this.props.week_status.weeklyStatus.projects });
  };
  constructor() {
    super();
    this.state = {
      selectionType: "checkbox",
      data_: data,
    };
  }
  render() {
    return (
      <>
        <div className="backBtn">
          <IoIosArrowBack />
          Back
        </div>
        <div className="upperRow">
          <h3>Weekly Stauts</h3>
          <div className="filter">
            <div>
              <p style={{ display: "contents" }}>Stauts Logged</p>
              {/* <DateRangePickerComponent
                format={"dd MMM yy"}
                placeholder="Select Date Range"
              /> */}
            </div>
            <label htmlFor="options" className="optLabel">
              Filter by:{" "}
            </label>
            <select className="select" name="options" id="options">
              <option value="engagement">Engagement Type</option>
              <option value="health">Health Type</option>
              <option value="status">Status Type</option>
            </select>
          </div>
        </div>
        <Table
          className="weekTable"
          columns={columns}
          dataSource={this.state.data_}
          rowSelection={{
            type: this.state.selectionType,
            ...rowSelection,
          }}
        />
      </>
    );
  }
>>>>>>> 6cc6e58c4f629c158e0232db3cd6f3670b279dba
}


const mapStateToProps = (store) => {
  console.log(store, "STORE");
  return {
    ...store,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {};
};

export default DashboardTemplate(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(WeeklyStatus))
);
