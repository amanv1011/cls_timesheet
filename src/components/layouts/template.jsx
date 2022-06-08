import { Layout, Menu, Breadcrumb } from "antd";
import DashboardLogo from "../../assets/SidebarIcons/DashboardLogo";
import HourLoggedLogo from "../../assets/SidebarIcons/HourLoggedLogo";
import TimesheetLogo from "../../assets/SidebarIcons/TimesheetLogo";
import ResourcesLogo from "../../assets/SidebarIcons/ResourcesLogo";
import ProjectIcon from "../../assets/SidebarIcons/ProjectIcon";
import ReportsLogo from "../../assets/SidebarIcons/ReportsLogo";
import SettingLogo from "../../assets/SidebarIcons/SettingLogo";
import {
  UserOutlined,
  UpSquareOutlined,
  TeamOutlined,
  SettingOutlined,
  HourglassOutlined,
  CalendarOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import TopHeader from "./header";
import React from "react";
import styled from "styled-components";
import {
  storeUserProfile,
  getUserProfile,
  deleteUserProfile,
} from "../../actions/user";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Wrapper = styled.div`
  height:100%
`;

const withDashboardTemplate = (WrappedComponent) => {
  return class Template extends React.Component {
    state = {
      collapsible: true,
    };


    toggle = () => {
      this.setState({ collapsible: !this.state.collapsible });
    };

    render() {

      return (
        <Wrapper>
            <TopHeader toggle={this.toggle} />
            <Layout>
              <Sider
                width={200}
                className="site-layout-background"
                trigger={null}
                collapsible
                collapsed={this.state.collapsible}
                style={{
                  /* top: "70px", */
                 
                  height: `calc(100vh - 77px)`,
                }}
              >

                <Menu
                  mode="inline"

                  style={{ height: "100%", borderRight: 0 }}
                >

                  <Menu.Item
                    key="1"
                    icon={<UserOutlined />}

                    onClick={() => this.props.history.push("/dashboard")}
                  >
                    {/* <span className="side_logo_sidebar"><DashboardLogo /></span> */}
                    Dashboard
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    icon={<HourglassOutlined />}
                    onClick={() => this.props.history.push("/hours-logged")}
                  >
                    {/* <span className="side_logo_sidebar"><HourLoggedLogo /></span> */}
                    Hour Logged
                  </Menu.Item>
                  <Menu.Item
                  style={{ paddingRight: "20px" }}
                    key="3"
                    icon={<CalendarOutlined />}
                    onClick={() => this.props.history.push("/timesheet")}
                  >
                    {/* <span className="side_logo_sidebar"><TimesheetLogo /></span> */}
                    Timesheet
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    icon={<TeamOutlined />}
                    onClick={() => this.props.history.push("/resources")}
                  >
                    {/* <span className="side_logo_sidebar"><ResourcesLogo /></span> */}
                    Resources
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    icon={<UpSquareOutlined />}
                    onClick={() => this.props.history.push("/projects")}
                  >
                    {/* <span className="side_logo_sidebar"><ProjectIcon /></span> */}
                    Projects
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    icon={<PieChartOutlined />}
                    onClick={() => this.props.history.push("/reports")}
                  >
                    {/* <span className="side_logo_sidebar"><ReportsLogo /></span> */}
                    Reports
                  </Menu.Item>
                  <Menu.Item
                    key="7"
                    icon={<SettingOutlined />}
                    onClick={() => this.props.history.push("/settings")}
                  >
                    {/* <span className="side_logo_sidebar"><SettingLogo /></span> */}
                    Settings
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout style={{}}>

                <Content
                  className="site-layout-background"
                  style={{
                    padding:"2em 2em 0 2em",
                    minHeight: "100vh",
                  }}
                >
                  <WrappedComponent />
                </Content>
              </Layout>
            </Layout>
        </Wrapper>
      );
    }
  };
};

export default withDashboardTemplate;
