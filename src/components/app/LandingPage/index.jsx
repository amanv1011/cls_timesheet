import React, { Component } from "react";
import LandingTemplate from "../../layouts/landing_temp";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTools } from "../../../actions/asyncActions";
import Tools from "./tools";
import { withRouter } from "react-router";
import "./index.css";
const Wrapper = styled.div`
  margin-top: 70px;
`;

const Header = styled.div`
  padding: 0 0 1em 0;
  color: #1f4173;
  display: flex;
  font-size: 26x;
`;
const Name = styled.div`
  margin-left: 0.5em;
`;
class LandingPage extends Component {
  componentDidMount = () => {
    // console.log("here ", this.props.user.userDetails.id);
    getTools(this.props.user.userDetails.id);
  };

  render() {
    const { name } = this.props.user.userDetails;
    return (
      <Wrapper>
        <Header>
          Welcome,{" "}
          <Name>
            <b>{name}</b>
          </Name>
        </Header>
        <Tools {...this.props.user} {...this.props} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (store) => {
  // console.log("tools store", store);
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
