import React from 'react'
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { setSwitchActive, setSwitchDeactive } from '../../../redux/actions/timesheetFilterSwitch';
import './timesheetFilter.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const TimesheetFilters = (props) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

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


                <div className="timesheet-tabs">
                    <div className="project-name-tab">
                        <input className="project-name" placeholder="Project Name" />

                    </div>

                    <div className="project-owner-tab">
                        <input className="project-owner" placeholder="Project Owner" />

                    </div>

                    <div className="project-engagement-tab">
                        <input className="project-engagement" placeholder="Engagement Type" />

                    </div>

                    <div className="project-status-tab">
                        <input className="project-status" placeholder="Status" />

                    </div>
                    <div className="buttonGo">
                        <button className="button-go" onClick={() => props.showTable()}> Go</button>

                    </div>
                    {/* {
                        window.location.pathname === '/timesheet' ? <>
                            <div className="switch-resource">
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    {...label} defaultChecked color="warning" /><span className="switch-resources">Resources</span>
                            </div>
                        </> : null
                    } */}
                    <div >
                        <button className="export-to-excel"> Export to Excel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TimesheetFilters