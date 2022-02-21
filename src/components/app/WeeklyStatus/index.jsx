import React from "react";
import { Table, Radio, Input } from "antd";
import { connect } from "react-redux";
import DashboardTemplate from '../../layouts/template'
import { withRouter } from 'react-router'
import { IoIosArrowBack, IoIosSquare } from "react-icons/io";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import "./weeklystatus.css"
import { getWeeklyStatus } from "../../../actions/asyncActions";
import { AiOutlineEdit } from "react-icons/ai"


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
            <Input className="textarea" value={weekly_status_description} suffix={<AiOutlineEdit />} />
        )


    },
    {
        title: 'Project Health',
        dataIndex: 'weekly_project_heatlh',
        render: weekly_project_heatlh => (
            <span>
                <IoIosSquare style={{ color: `${weekly_project_heatlh.toLowerCase() == "poor" ? "red" : weekly_project_heatlh.toLowerCase() == "good" ? "lightGreen" : weekly_project_heatlh.toLowerCase() == "average" ? "yellow" : ""}` }} />
                {weekly_project_heatlh}

            </span>
        )

    },
];
const data = [
    {
        key: '1',
        project_name: 'Studio a+i Digital Marketing',
        engagement_type: "Fixed",
        weekly_status_description: <textarea className="textarea" cols="40" rows="1" placeholder="textarea"></textarea>,
        weekly_project_heatlh: "GOOD"
    },
    {
        key: '2',
        project_name: 'Clock store Marketing',
        engagement_type: "Fixed",
        weekly_status_description: <textarea className="textarea" cols="40" rows="1" placeholder="textarea"></textarea>,
        weekly_project_heatlh: "good"
    },

];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

class WeeklyStatus extends React.Component {
    componentDidMount = () => {
        getWeeklyStatus();
        this.setState({ data_: this.props.week_status.weeklyStatus.projects })
    };
    constructor() {
        super();
        this.state = {
            selectionType: "checkbox",
            data_: data
        }
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
                        <DateRangePickerComponent format={'dd MMM yy'} placeholder="Select Date Range" />
                    </div>
                    <label htmlFor="options" className="optLabel">Filter by: </label>
                    <select className="select" name="options" id="options">
                        <option value="engagement">Engagement Type</option>
                        <option value="health">Health Type</option>
                        <option value="status">Status Type</option>

                    </select>

                </div>
            </div>
            <Table className="weekTable" columns={columns} dataSource={this.state.data_} rowSelection={{
                type: this.state.selectionType,
                ...rowSelection,
            }} />
        </>;
    }
}

// this.props.week_status.weeklyStatus.projects

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

