import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardTemplate from "../../layouts/template";
import { withRouter } from "react-router";
import styled from "styled-components";
import { Table, Tag, Space } from "antd";
import { time, calender, group, bag, arrow } from "../../../assets/images";

const Wrapper = styled.div`
  position: relative;
  left: 200px;
  width: 75vw;
  height: 80vh;
  top: 70px;
  @media (max-width: 1200px) {
    top: 60px;
  }
`;


class Dashboard extends React.Component {
  render() {
 

    return (
      <Wrapper>
        Settings
      </Wrapper>
    );
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

export default DashboardTemplate(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))
);
