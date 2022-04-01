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
  width: 100%;
  height: 100vh;
`;

const withDashboardTemplate = (WrappedComponent) => {
  return class Template extends React.Component {
    state = {
      collapsible: true,
    };

    state = {
      collapsible: false,
    };

    toggle = () => {
      this.setState({ collapsible: !this.state.collapsible });
    };

    render() {
      // console.log(this.props)
      return (
        <Wrapper>
          <Layout>
            <TopHeader toggle={this.toggle} />
            <Layout>
              <Sider
                width={200}
                className="site-layout-background"
                trigger={null}
                collapsible
                collapsed={this.state.collapsible}
              >
                {/* style={{ top: "60px" }} */}
                <Menu
                  mode="inline"
                  // defaultSelectedKeys={['1']}
                  // defaultOpenKeys={['sub1']}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Dashboard">
                                        <Menu.Item key="1">option1</Menu.Item>
                                    </SubMenu> */}
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
              <Layout style={{ padding: "0 24px 24px" }}>
                {/* <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
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

export default withDashboardTemplate;
