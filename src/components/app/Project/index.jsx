import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardTemplate from '../../layouts/template'
import { withRouter} from 'react-router'

class Dashboard extends React.Component {
  render() {
    // console.log("dashboard", this.props)
    return <div>Project</div>;
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

export default DashboardTemplate(connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard)));
