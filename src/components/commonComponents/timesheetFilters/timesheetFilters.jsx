import React from 'react'
import { useState } from 'react';
import { RiFilterOffFill } from 'react-icons/ri'
import { Button, Tooltip } from 'antd';
import moment from 'moment';
import { setSwitchActive, setSwitchDeactive } from '../../../redux/actions/timesheetFilterSwitch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTimesheetFilterData } from '../../../redux/actions/timesheetFilterAction';
import { getTimesheetData } from '../../../redux/actions/timesheetActions';
import './timesheetFilter.css';


const label = { inputProps: { 'aria-label': 'Switch demo' } };
const TimesheetFilters = (props) => {
    const dispatch = useDispatch();
    const todaysDate = moment().format("MM/YYYY");
    const [checked, setChecked] = useState(false);
    const [filterProjectName, setFilterProjectName] = useState("");
    const [filterProjectOwner, setFilterProjectOwner] = useState("");
    const [filterEngagementType, setFilterEngagementType] = useState("");
    const [filterStatus, setFilterStatus] = useState("");

    const changeProjectName = (event) => {
        event.preventDefault()
        setFilterProjectName(event.target.value);
    }

    const changeProjectOwner = (event) => {
        event.preventDefault()
        setFilterProjectOwner(event.target.value);
    }

    const changeEngagementType = (event) => {
        event.preventDefault()
        setFilterEngagementType(event.target.value);
    }

    const changeStatus = (event) => {
        event.preventDefault()
        setFilterStatus(event.target.value);
    }

    const filterApiCall = () => {
        dispatch(getTimesheetFilterData(filterProjectName, filterProjectOwner, filterEngagementType, filterStatus));
    }

    const clearFilter = () => {
        setFilterProjectName("")
        setFilterProjectOwner("")
        setFilterEngagementType("")
        setFilterStatus("")
        dispatch(getTimesheetData(todaysDate));

    }

    const handleChange = (event) => {
        checked === true ? dispatch(setSwitchActive(event.target.checked)) : dispatch(setSwitchDeactive(event.target.checked))
        setChecked(event.target.checked);
    };

    useEffect(() => {
        checked === true ? dispatch(setSwitchActive(checked)) : dispatch(setSwitchDeactive(checked))
    }, []);

    return (
        <>

            <div className="filterBy">
                <p className='filter-by'>Filter By</p>

            </div>
            <div className='horizontal-slidder'>
                <div style={{ display: "flex", justifyContent: "space-between" }}>

                    <div className="project-name-tab">

                        <input value={filterProjectName} className="project-name" placeholder="Project Name" onChange={changeProjectName} />

                    </div>

                    <div className="project-owner-tab">
                        <input value={filterProjectOwner} className="project-owner" placeholder="Project Owner" onChange={changeProjectOwner} />

                    </div>

                    <div className="project-engagement-tab">
                        <input value={filterEngagementType} className="project-engagement" placeholder="Engagement Type" onChange={changeEngagementType} />

                    </div>

                    <div className="project-status-tab">
                        <input value={filterStatus} className="project-status" placeholder="Status" onChange={changeStatus} />

                    </div>
                    <div className="buttonGo">
                        <button className="button-go" onClick={filterApiCall}> Go</button>

                    </div>
                    <div className="buttonGo">
                        <Tooltip placement="top" title={"Clear Filter"}>
                            <Button className="button-clear" type="primary" onClick={clearFilter} shape="circle"><RiFilterOffFill /></Button>
                        </Tooltip>



                    </div>



                   
                        <button  style={{ float: "right", marginTop: "5px" }} className="export-to-excel"> Export to Excel</button>
                    

                </div>



            </div>

        </>
    )
}
export default TimesheetFilters