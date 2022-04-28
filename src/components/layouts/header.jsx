import * as Images from "../../assets/images";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Select } from "antd";
import { Link } from "react-router-dom";
import {
  storeUserProfile,
  getUserProfile,
  deleteUserProfile,
} from "../../actions/user";
import { LoginStorageUserDetails } from "../../assets/text";
import { withRouter } from "react-router";
import {removeCookie} from "../../actions/user"

const { Option } = Select;
const Wrapper = styled.div`
  background: #fff;
  padding: 1em;
  @media only screen and (max-width: 414px) {
    padding: unset;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Searchbar = styled.div`
  width: 380px;
  border: 1px solid #eee;
  height: 30px;
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
const Profile = styled.div``;
const LeftContainer = styled.div`
  flex: 2;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: end;
  flex: 2;
`;
const Notification = styled.div`
  @media only screen and (max-width: 414px) {
    display: none;
  }
`;
class Header extends React.Component {
  state = {
    optionSelected: this.props.user.userDetails.name,
  };
  changeHandler = (e) => {
    removeCookie("token")
    deleteUserProfile(LoginStorageUserDetails);
    this.props.history.push("/login");
  };
  render() {
    const { name, image } = this.props.user.userDetails;
    return (
      <Wrapper style={{ position: "fixed", width: "100%", zIndex: "1" }}>
        <Container>
          <LeftContainer>
            <MenuUnfoldOutlined
              onClick={() => this.props.toggle()}
              style={{ fontSize: "23px", color: "#003AD2" }}
            />
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
              <Select
                value={this.state.optionSelected}
                style={{ width: 120 }}
                bordered={false}
                onChange={(e) => this.changeHandler(e)}
              >
                <Option value={name}>{name}</Option>
                <Option value="logout">Log Out</Option>
              </Select>
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
