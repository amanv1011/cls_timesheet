import React from "react";
import './timesheetLayoutTemplate.css'
import Navbar from "../../commonComponents/navBar/navbar";
import TimesheetSidebar from "../../commonComponents/sideBar/timesheetSidebar";







const timesheetLayoutTemplate = (WrappedComponent) => {
  return class Template extends React.Component {
    state = {
      collapsible: true,
    };

    toggle = () => {
      this.setState({ collapsible: !this.state.collapsible });
    };

    render() {
      return (
        <>
        <div className="layout-navbar">
        <Navbar/>
        </div>
        <div className="layout-body-container">
          <div  className="layout-sidebar-container">
          <TimesheetSidebar/>
          </div>
          <div className="layout-content-container">
            <WrappedComponent/>
          </div>

        </div>
        </>
      );
    }
  };
};

export default timesheetLayoutTemplate;
