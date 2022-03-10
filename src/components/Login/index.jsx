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
import {LoginStorageUserDetails} from "../../assets/text";
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
  padding: 1em;
  border-radius: 20px;
`;
const MockImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #eee;
`;
const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Login extends Component {

  responseGoogleSuccess = (response) => {
    console.log("response ", response);
    const data = {
      email: response.profileObj.email,
    };

    http
      .post(`/api/auth/checkUser`, data)
      .then((res) => {
        console.log("response from", res);
        const UserDetails = {
          email: response.profileObj.email,
          name: response.profileObj.name,
          image: response.profileObj.imageUrl,
          token: response.tokenObj.id_token,
          id: res.data.id,
        };
        storeUserProfile(LoginStorageUserDetails, JSON.stringify(UserDetails));
        Store.dispatch(syncActions.UserProfile(UserDetails));
        this.props.history.push("/");
      })
      .catch((err) => {});
  };

  responseGoogleFail = (response) => {
    console.log(response);
  };

  componentWillReceiveProps = (props) => {};

  render() {
    console.error("login page");
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
              clientId="838623674904-gj1foj9lmr5g1prd0t1bsphn6aooopl5.apps.googleusercontent.com"
              buttonText="Log In with Google"
              // render={(renderProps) => (
              //   <GoogleButton
              //     onClick={renderProps.onClick}
              //     disabled={renderProps.disabled}
              //   >
              //     Sign in
              //   </GoogleButton>
              // )}
              className="loginBtn loginBtn--google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleFail}
              cookiePolicy={"single_host_origin"}
              scope={"email"}
              getBasicProfile={true}
            />
          </LoginButton>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('store in login', store)
  return {
    ...store.spin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
