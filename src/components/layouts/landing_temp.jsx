import { Layout } from "antd";
import TopHeader from "./header_landing";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import Navbar from "../commonComponents/navBar/navbar";
import {
  storeUserProfile,
  getUserProfile,
  deleteUserProfile,
} from "../../actions/user";

const { Content } = Layout;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const withHeader = (WrappedComponent) => {
  return class Template extends React.Component {
    state = {
      collapsible: true,
      // user : getUserProfile("user")
    };

    toggle = () => {
      this.setState({ collapsible: !this.state.collapsible });
    };

    render() {
      // console.log("props in landing page ",this.props)
      return (
        <Wrapper>
          <Layout>
            <div style={{ height: "60px", width: "100%" }}>
              <Navbar  />
            </div>
            <Layout>
              <Layout>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: "100vh",
                  }}
                >
                  <WrappedComponent {...JSON.parse(getUserProfile("user"))} />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Wrapper>
      );
    }
  };
};

const mapStateToProps = (store) => {
  // console.log(store)
  return {
    ...store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const composedAuthHOC = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHeader
);
export default composedAuthHOC;
