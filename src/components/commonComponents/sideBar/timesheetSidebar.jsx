import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory,  } from "react-router-dom";
import { Link } from "react-router-dom";

import {setSidebarItem} from "../../../redux/actions/sidebarCollapsActions"
import DashboardLogo from "../../../assets/SidebarIcons/DashboardLogo";
import HourLoggedLogo from "../../../assets/SidebarIcons/HourLoggedLogo";
import TimesheetLogo from "../../../assets/SidebarIcons/TimesheetLogo";
import ResourcesLogo from "../../../assets/SidebarIcons/ResourcesLogo";
import ProjectIcon from "../../../assets/SidebarIcons/ProjectIcon";
import ReportsLogo from "../../../assets/SidebarIcons/ReportsLogo";
import SettingLogo from "../../../assets/SidebarIcons/SettingLogo";
import "./timesheetSidebar.css";

const TimesheetSidebar = () => {
    var history = useHistory();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const[sidebarItemActive, setSidebarItemActive] = useState('1');
    
    const sidebarCollaps = useSelector((state) => state.sidebarCollaps.isSidebarCollaps);
    const sidebarActiveItemState = useSelector((state) => state.sidebarCollaps.sidebarActiveItem);
    

    const changeRoute = (sidebarActiveItemState) => {
        
        if(sidebarActiveItemState === '1'){
            history.push("/dashboard")
            
        }
        if(sidebarActiveItemState === '2'){
            history.push('/hours-logged')
            
            
        }
        if(sidebarActiveItemState === '3'){
            history.push('/timesheet')
            
        }
        if(sidebarActiveItemState === '4'){
            history.push("/resources")
            
        }
        if(sidebarActiveItemState === '5'){
            history.push("/projects")
            
        }
        if(sidebarActiveItemState === '6'){
            history.push("/reports")
            
        }
        if(sidebarActiveItemState === '7'){
            history.push("/settings")
            
        }
    }
    

    const activeSidebarItem = (event) => {
        dispatch(setSidebarItem(event.currentTarget.dataset.id ))
        changeRoute(event.currentTarget.dataset.id)
        
        
    }

  return (
    <>
    
      <div className={!sidebarCollaps ? "sidebar-container" : "sidebar-container-collaps"}>
        <ul className="timesheet-sidebar-list">
            
          <li onClick={activeSidebarItem} data-id={1}  className="timesheet-sidebar-item">
            {sidebarActiveItemState === '1' ? <div className="timesheet-sidebar-active-box"></div> : null}
            <div className={sidebarActiveItemState === '1' ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <DashboardLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Dashboard</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={2}  className="timesheet-sidebar-item">
          {sidebarActiveItemState === '2' ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === '2' ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <HourLoggedLogo />
              </span>
              {!sidebarCollaps ? <span style={{marginLeft:'20px'}} className="timesheet-sidebar-item-text">Hours Logged</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={3} className="timesheet-sidebar-item">
          {sidebarActiveItemState === '3' ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === '3' ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <TimesheetLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Timesheet</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={4} className="timesheet-sidebar-item">
          {sidebarActiveItemState === '4' ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === '4' ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <ResourcesLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Resources</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={5} className="timesheet-sidebar-item">
          {sidebarActiveItemState === '5' ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === '5' ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <ProjectIcon />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Projects</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={6} className="timesheet-sidebar-item">
          {sidebarActiveItemState === '6' ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === '6' ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <ReportsLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Reports</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={7} className="timesheet-sidebar-item">
          {sidebarActiveItemState === '7' ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === '7' ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <SettingLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Settings</span> : null}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TimesheetSidebar;
