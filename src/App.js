import "./App.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import Spinner from "./components/Loader";
import Routes from "./components/Routes/";
import styled from "styled-components";
const Wrapper = styled.div``;
function App(state) {
  return (
    <>
      {state.spin.spin && <Spinner />}
      <Routes />
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    ...store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
