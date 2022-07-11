import "./App.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import Spinner from "./components/Loader";
import Routes from "./components/Routes/";
import history from "./hoc/history";
import UAParser from "ua-parser-js";
import jwt_decode from "jwt-decode";
import { LoginStorageUserDetails } from "./assets/text";
import { removeCookie } from "./actions/user";

function App(state) {

  useEffect(() => {
    const parser = new UAParser()
    if (localStorage.getItem(LoginStorageUserDetails)) {
      const decodedToken = jwt_decode(JSON.parse(localStorage.getItem(LoginStorageUserDetails)).token)
      if (decodedToken.navigator !== parser.getBrowser().name) {
        removeCookie("token");
        localStorage.clear();
        window.location.reload(true);
      }
    }
  }, [])

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
