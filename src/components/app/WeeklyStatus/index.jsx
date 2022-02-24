import React, { useState } from "react";
import { Table, Radio } from "antd";
import { connect } from "react-redux";
import DashboardTemplate from '../../layouts/template'
import { withRouter } from 'react-router'
import { IoIosArrowBack, IoIosSquare } from "react-icons/io";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import { DatePicker, Space } from "antd";
import { RangePickerProps } from "antd/lib/date-picker";

import "./weeklystatus.css"

const columns = [
    {
        title: 'Project',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Engagement Type',
        dataIndex: 'type',
    },
    {
        title: 'Week Status',
        dataIndex: 'status',
    },
    {
        title: 'Project Health',
        dataIndex: 'health',

    },
];
const data = [
    {
        key: '1',
        name: 'Studio a+i Digital Marketing',
        type: "Fixed",
        status: <textarea className="textarea" cols="40" rows="1" placeholder="textarea"></textarea>,
        // status: 'But i Must explain you how all this things works',
        health: <div>< IoIosSquare style={{ color: "#09db09", fontSize: "20px" }} /> GOOD</div>
    },
    {
        key: '2',
        name: 'Clock store Marketing',
        type: "Fixed",
        status: <textarea className="textarea" cols="40" rows="1" placeholder="textarea"></textarea>,
        health: <div>< IoIosSquare style={{ color: "#09db09", fontSize: "20px" }} /> GOOD</div>
    },
    {
        key: '3',
        name: 'Allied Global Marketing',
        type: "Fixed",
        status: <textarea className="textarea" cols="40" rows="1" placeholder="textarea"></textarea>,
        health: <div>< IoIosSquare style={{ color: "red", fontSize: "20px" }} /> Poor</div>
    },
    {
        key: '4',
        name: 'Timesheet',
        type: "Dedicated",
        status: <textarea className="textarea" cols="40" rows="1" placeholder="textarea"></textarea>,
        health: <div>< IoIosSquare style={{ color: "#09db09", fontSize: "20px" }} /> GOOD</div>
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
    constructor() {
        super();
        this.state = {
            selectionType: "checkbox"
        }
    }
    render() {
        console.log("dashboard", this.props)
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
            <Table className="weekTable" columns={columns} dataSource={data} rowSelection={{
                type: this.state.selectionType,
                ...rowSelection,
            }} />
        </>;
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

export default DashboardTemplate(connect(mapStateToProps, mapDispatchToProps)(withRouter(WeeklyStatus)));
