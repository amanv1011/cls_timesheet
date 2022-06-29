import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory,  } from "react-router-dom";
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
    const history = useHistory();
    const dispatch = useDispatch();

    
    const sidebarCollaps = useSelector((state) => state.sidebarCollaps.isSidebarCollaps);
    const sidebarActiveItemState = useSelector((state) => state.sidebarCollaps.sidebarActiveItem);

    const RoutesArray = ["/dashboard", "/hours-logged", "/timesheet", "/resources", "/projects", "./reports", "/settings"]
    

    const changeRoute = (routeNoArgs) => {
      const RouteNo = parseInt(routeNoArgs)
      RoutesArray.map((routeElement, index) => {
        if(RouteNo === index+1){
          dispatch(setSidebarItem(RouteNo))
          history.push(routeElement)
        }
      })        
    }
   

    const activeSidebarItem = (event) => {
      changeRoute(event.currentTarget.dataset.id)
    }

    useEffect(() => {
      RoutesArray.map((routeElement,index) => {
        if(window.location.pathname === routeElement){
          changeRoute(index+1)
        }
      })
    },[])

   

  return (
    <>
    
      <div className={!sidebarCollaps ? "sidebar-container" : "sidebar-container-collaps"}>
        <ul className="timesheet-sidebar-list">
            
          <li onClick={activeSidebarItem} data-id={1}  className="timesheet-sidebar-item">
            {sidebarActiveItemState === 1 ? <div className="timesheet-sidebar-active-box"></div> : null}
            <div className={sidebarActiveItemState === 1 ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <DashboardLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Dashboard</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={2}  className="timesheet-sidebar-item">
          {sidebarActiveItemState === 2 ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === 2 ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <HourLoggedLogo />
              </span>
              {!sidebarCollaps ? <span style={{marginLeft:'20px'}} className="timesheet-sidebar-item-text">Hours Logged</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={3} className="timesheet-sidebar-item">
          {sidebarActiveItemState === 3 ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === 3 ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <TimesheetLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Timesheet</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={4} className="timesheet-sidebar-item">
          {sidebarActiveItemState === 4 ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === 4 ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <ResourcesLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Resources</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={5} className="timesheet-sidebar-item">
          {sidebarActiveItemState === 5 ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === 5 ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <ProjectIcon />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Projects</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={6} className="timesheet-sidebar-item">
          {sidebarActiveItemState === 6 ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === 6 ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
              <span>
                <ReportsLogo />
              </span>
              {!sidebarCollaps ? <span className="timesheet-sidebar-item-text">Reports</span> : null}
            </div>
          </li>
          <li onClick={activeSidebarItem} data-id={7} className="timesheet-sidebar-item">
          {sidebarActiveItemState === 7 ? <div className="timesheet-sidebar-active-box"></div> : null}
          <div className={sidebarActiveItemState === 7 ? "timesheet-sidebar-item-left-box-active" : "timesheet-sidebar-item-left-box"}>
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
