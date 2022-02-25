import React from "react";
import { Table, Button, Input } from "antd";
import { connect } from "react-redux";
import DashboardTemplate from '../../layouts/template'
import { withRouter } from 'react-router'
import { IoIosArrowBack, IoIosSquare } from "react-icons/io";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import "./weeklystatus.css"
import { getWeeklyStatus } from "../../../actions/asyncActions";
import { AiOutlineEdit } from "react-icons/ai"
import moment from 'moment';


const columns = [
    {
        title: 'Project',
        dataIndex: 'project_name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Engagement Type',
        dataIndex: 'engagement_type',
    },
    {
        title: 'Week Status',
        dataIndex: 'weekly_status_description',
        render: weekly_status_description => (
            <Input className="textarea" title={weekly_status_description} value={weekly_status_description} suffix={<AiOutlineEdit />} />
        )
    },
    {
        title: 'Project Health',
        dataIndex: 'weekly_project_health',
        render: weekly_project_health => (
            <span>
                <IoIosSquare style={{ color: `${weekly_project_health.toLowerCase() == "poor" ? "red" : weekly_project_health.toLowerCase() == "good" ? "lightGreen" : weekly_project_health.toLowerCase() == "average" ? "yellow" : ""}` }} />
                {weekly_project_health}

            </span>
        )

    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};


class WeeklyStatus extends React.Component {
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
                    <div className="dateFilter">
                        <p style={{ color: "#305d9f", fontWeight: "600", width: "-webkit-fill-available", margin: '0 5px 9px 0', textAlign: "end" }}>Stauts Logged</p>
                        <DateRangePickerComponent
                            className="datepicker"
                            allowEdit={false}
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

            <Table className="weekTable"
                pagination={false}
                // footer={()=>{<p>This is Footer</p>}}
                columns={columns} dataSource={this.props.week_status.weeklyStatus ? this.props.week_status.weeklyStatus.projects : []}
                rowSelection={{
                    type: this.state.selectionType,
                    ...rowSelection,


                }} />

        </>;
    }
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

export default DashboardTemplate(connect(mapStateToProps, mapDispatchToProps)(withRouter(WeeklyStatus)));

