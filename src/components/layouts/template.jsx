import { Layout, Menu, Breadcrumb } from "antd";
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
                    Dashboard
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    icon={<HourglassOutlined />}
                    onClick={() => this.props.history.push("/hours-logged")}
                  >
                    Hour Logged
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    icon={<CalendarOutlined />}
                    onClick={() => this.props.history.push("/timesheet")}
                  >
                    Timesheet
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    icon={<TeamOutlined />}
                    onClick={() => this.props.history.push("/resources")}
                  >
                    Resources
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    icon={<UpSquareOutlined />}
                    onClick={() => this.props.history.push("/projects")}
                  >
                    Projects
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    icon={<PieChartOutlined />}
                    onClick={() => this.props.history.push("/reports")}
                  >
                    Reports
                  </Menu.Item>
                  <Menu.Item
                    key="7"
                    icon={<SettingOutlined />}
                    onClick={() => this.props.history.push("/settings")}
                  >
                    Settings
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout style={{  }}>
       
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
