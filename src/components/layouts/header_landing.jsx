import * as Images from "../../assets/images";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  storeUserProfile,
  getUserProfile,
  deleteUserProfile,
} from "../../actions/user";
import { Select } from "antd";
import Store from "../../redux/store";
import { withRouter } from "react-router";

import * as syncActions from "../../actions/syncActions";
import { LoginStorageUserDetails } from "../../assets/text";

const { Option } = Select;

const Wrapper = styled.div`
  background: #fff;
  padding: 1em;
  overflowx: "scroll";
  overflowy: "hidden";
  position: fixed;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Searchbar = styled.div`
  width: 380px;
  border: 1px solid #eee;
  height: 32px;
  border-radius: 10px;
  @media only screen and (max-width: 414px) {
    display: none;
  }
`;
const SearchInput = styled.input`
  border: none;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;
const Profile = styled.div`
  display: flex;
`;
const LeftContainer = styled.div`
  flex: 2;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1.8;
  align-items: center;
`;
const Notification = styled.div`
  margin-right: 2em;
  @media only screen and (max-width: 414px) {
    display: none;
  }
`;
class Header extends React.Component {
  state = {
    optionSelected: this.props.user.userDetails.name,
  };

  changeHandler = (e) => {
    // console.log("logout", e);
    this.props.history.push("/login");
    deleteUserProfile(LoginStorageUserDetails);
  };
  render() {
    const {  image } = this.props.user.userDetails.value;
    const Name= this.props.user.userDetails.value.name;
    console.log(this.props);
    return (
      <Wrapper>
        <Container>
          <LeftContainer>
            {/* <MenuUnfoldOutlined onClick={() => this.props.toggle()} style={{fontSize: '23px', color: '#003AD2'} }/> */}
            <Link to="/">
              <img
                src={Images.logo}
                style={{ width: "100%", maxWidth: "247px", marginLeft: "1em" }}
              />
            </Link>
          </LeftContainer>
          <RightContainer>
            {/* <Searchbar className="searchbar">
                            <SearchInput type="text" placeholder="Search" className="searchInput" />
                            <img src={Images.Search} alt="" className="searchIcon" style={{ width: '100%', maxWidth: '20px',float:'right', marginRight:'10px', alignSelf:'center' , cursor:'pointer'}} />
                        </Searchbar>

                        <Notification className="notification">
                            <img src={Images.Notification} alt="" style={{ width: '100%', maxWidth: '30px' }} />
                        </Notification> */}

            <Profile>
              <img
                src={image}
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "38px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                className="profileImage"
              />
              {/* <div style={{ alignSelf: 'center' }}>{name}</div> */}
              <Select
                value={this.state.optionSelected}
                style={{ width: 120 }}
                bordered={false}
                onChange={(e) => this.changeHandler(e)}
              >
                <Option value={Name}>{Name}</Option>
                <Option value="logout">Log Out</Option>
              </Select>
              {/* <select name="cars">
                            <option value={name}>{name}</option>
                            <option value="logout " onClick ={() =>alert("hello")}>Log Out</option>
                            </select> */}
            </Profile>
          </RightContainer>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (store) => {
  // console.log(store)
  return {
    ...store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
