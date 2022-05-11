import "./App.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import React from "react";
import Spinner from "./components/Loader";
import Routes from "./components/Routes/";
import history from "./hoc/history";

function App(state) {
  return (
    <>
      {state.spin.spin && <Spinner />}
      <Routes history={history} />
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
