import React, { Component } from "react";
import LandingTemplate from "../../layouts/landing_temp";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTools } from "../../../actions/asyncActions";
import Tools from "./tools";
import { withRouter } from "react-router";

const Wrapper = styled.div``;

const Header = styled.h5`
  padding: 0 0 1em 0;
  color: #1f4173;
`;
class LandingPage extends Component {
  componentDidMount = () => {
    getTools(this.props.user.userDetails.id);
  };

  render() {
    const { name } = this.props.user.userDetails;
    return (
      <Wrapper>
        <Header className="header">
          Welcome, <b>{name}</b>
        </Header>
        <Tools {...this.props.user} {...this.props} />
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

export default LandingTemplate(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(LandingPage))
);
