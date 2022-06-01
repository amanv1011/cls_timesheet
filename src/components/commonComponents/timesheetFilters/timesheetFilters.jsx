import React from 'react'
import Switch from '@mui/material/Switch';

import './timesheetFilter.css';


const label = { inputProps: { 'aria-label': 'Switch demo' } };
const TimesheetFilters = () => {

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
                        <button className="button-go"> Go</button>

                    </div>
                    <div className="switch-resource">

                        <Switch {...label} defaultChecked color="warning" /><span className="switch-resources">Resources</span>
                    </div>
                    <div >
                        <button className="export-to-excel"> Export to Excel</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TimesheetFilters