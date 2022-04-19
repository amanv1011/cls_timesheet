import { GoogleLogin } from "react-google-login";
import { storeUserProfile } from "../../actions/user";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import * as syncActions from "../../actions/syncActions";
import Store from "../../redux/store";
import http from "../../hoc/axiosClient";
import React, { Component } from "react";
import { connect } from "react-redux";
import { logo, mockImage } from "../../assets/images";
import "./login.css";
import { LoginStorageUserDetails } from "../../assets/text";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  border-radius: 20px;
  padding: 2em 4em 2em 4em;
`;
const MockImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
  border-bottom: 1px solid #eee;
`;
const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
`;
const Error = styled.div`
  color: tomato;
  font-size: 14px;
  margin-top: 10px;
`;
class Login extends Component {
  componentDidMount() {
    const imagesToBePreloaded = [logo, mockImage];
    imagesToBePreloaded.forEach((image) => {
      new Image().src = image;
    });
  }

  responseGoogleSuccess = (response) => {
    console.log("1response", response);
    const data = {
      email: response.profileObj.email,
      idToken: response.tokenObj.id_token,
    };

    console.log(data, "lllllllllllllllllllls");
    http
      .post(`/api/auth/google`, data)
      .then((res) => {
        console.log("2response from", res.data);
        const UserDetails = {
          email: res.data.email,
          name: res.data.name,
          image: res.data.picture,
          token: res.data.token,
          id: res.data.id,
        };
        storeUserProfile(LoginStorageUserDetails, JSON.stringify(UserDetails));
        sessionStorage.setItem("token", UserDetails.token);
        Store.dispatch(syncActions.UserProfile(UserDetails));
        Store.dispatch(syncActions.clearError());
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("error", err);
        Store.dispatch(syncActions.Error(err.response.data));
      });
  };

  responseGoogleFail = (response) => {
    console.log(response);
  };

  componentWillReceiveProps = (props) => {};

  render() {
    console.error("process.env", process.env);
    console.error("this.props.err.error", this.props);
    console.log("Strore state", Store.getState());

    return (
      <Wrapper>
        <Container>
          <MockImageContainer>
            <img src={mockImage} style={{ marginBottom: "0.5em" }} />
            <img src={logo} style={{ width: "100%", maxWidth: "300px" }} />
          </MockImageContainer>
          <LoginButton>
            <div className="title">Login into your Account</div>
            <GoogleLogin
              clientId="547036388960-1kdtvd93grr1lf1c58hrlsqbv1d44gri.apps.googleusercontent.com"
              buttonText="Log In with Google"
              render={(renderProps) => (
                <div
                  className="google-btn"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p className="btn-text">
                    <b>Log in with Google.</b>
                  </p>
                </div>
              )}
              className="loginBtn loginBtn--google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleFail}
              cookiePolicy={"single_host_origin"}
              scope={"email"}
              getBasicProfile={true}
            />

            {this.props.err.error ? <Error>Unauthourised User</Error> : <div />}
            {/* <div></div> */}
          </LoginButton>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (store) => {
  console.log("in login store", store);
  return {
    ...store.spin,
    err: store.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
