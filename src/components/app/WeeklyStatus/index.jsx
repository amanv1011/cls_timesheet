import React from "react";
import { Tooltip, Input, Modal } from "antd";
import { connect } from "react-redux";
import DashboardTemplate from "../../layouts/landing_temp";
import { withRouter } from "react-router";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./weeklystatus.css";
import {
  getWeeklyStatus,
  updateWeeklyStatus,
  get_health_status,
  get_engagement_types,
  getWeeklyStatusProjects,
} from "../../../actions/asyncActions";
import { AiOutlineEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import moment from "moment";
import Pagination from "./Pagination";
import { border } from "@mui/system";
import store from "../../../redux/store";
// import moment from "moment";
const { TextArea } = Input;

class WeeklyStatus extends React.Component {
  componentDidMount = async () => {
    this.setState({
      startDt: new Date(
        this.state.startDt.setDate(
          this.state.startDt.getDate() - this.state.startDt.getDay() + 1
        )
      ),
      endDt: new Date(
        this.state.startDt.setDate(
          this.state.startDt.getDate() - this.state.startDt.getDay() + 5
        )
      ),
    });

    let startDate = new Date(
      this.state.endDt.setDate(
        this.state.endDt.getDate() - this.state.endDt.getDay() + 1
      )
    );

    let endDate = this.state.startDt;
    await getWeeklyStatus(
      startDate,
      endDate,
      this.state.engagementType,
      this.state.currentPage
    );
    get_health_status();
    get_engagement_types(this.props.user.userDetails.id);
    this.updatePagination(this.state.currentPage, this.state.engagementType);
  };

  // - 7 * 24 * 60 * 60 * 1000

  state = {
    selectionType: "checkbox",
    startDt: new Date(Date.now()),
    endDt: new Date(Date.now()),
    description: "",
    projectId: "",
    statusId: "",
    selectorRow: null,
    showHealthOption: null,
    showHealthBox: false,
    healthOption: "",
    count: 0,
    currentPage: 1,
    totalPages: 1,
    pageNumber: 1,
    projectName: "",
    showSearchBar: false,
    resData: false,
    engagementType: "",
  };

  onChangePage = async (page) => {
    // if (this.state.projectName && this.state.engagementType) {
    //   await getWeeklyStatusProjects(
    //     this.state.projectName,
    //     this.state.engagementType,
    //     this.props.user.userDetails.id,
    //     page
    //   );
    //   this.updatePagination(page, this.state.engagementType);
    // } else if (this.state.projectName && !this.state.engagementType) {
    //   await getWeeklyStatusProjects(
    //     this.state.projectName,
    //     this.state.engagementType,
    //     this.props.user.userDetails.id,
    //     page
    //   );
    //   this.updatePagination(page, "");
    // }

    // else {
    await getWeeklyStatus(
      this.state.startDt,
      this.state.endDt,
      this.state.engagementType,
      page
    );
    // }
    this.updatePagination(page, this.state.engagementType);
  };

  update = () => {
    this.setState({ selectorRow: null });

    let data = {
      project_health_status_id: this.state.statusId,
      description: this.state.description,
      project_id: this.state.projectId,
    };
    updateWeeklyStatus(
      data,
      this.state.startDt,
      this.state.endDt,
      this.state.pageNumber
    );
  };

  updateHealth = (e) => {
    this.setState({
      showHealthOption: null,
      showHealthBox: !this.state.showHealthBox,
      healthOption: e.target.value,
    });
    let data = {
      project_health_status_id: e.target.value,
      description: this.state.description,
      project_id: this.state.projectId,
    };
    if (data.description) {
      updateWeeklyStatus(
        data,
        this.state.startDt,
        this.state.endDt,
        this.state.pageNumber
      );
    } else {
      alert("Please Update the week status first.");
    }
  };

  filter_by = async (e) => {
    await getWeeklyStatus(
      this.state.startDt,
      this.state.endDt,
      e.target.value,
      1
    );
    this.updatePagination(1, e.target.value);
  };

  weekback = () => {
    this.setState({
      showHealthOption: null,
      startDt: new Date(
        this.state.startDt.setDate(
          this.state.startDt.getDate() - this.state.startDt.getDay() + 1
        ) -
          7 * 24 * 60 * 60 * 1000
      ),
      endDt: new Date(
        this.state.startDt.setDate(
          this.state.startDt.getDate() - this.state.startDt.getDay() + 5
        ) -
          7 * 24 * 60 * 60 * 1000
      ),
      count: this.state.count - 1,
    });

    getWeeklyStatus(
      new Date(this.state.startDt - 11 * 24 * 3600 * 1000),
      new Date(this.state.endDt - 7 * 24 * 3600 * 1000),
      "",
      this.state.currentPage
    );
  };

  weekForword = () => {
    this.setState({
      showHealthOption: null,
      startDt: new Date(
        this.state.startDt.setDate(
          this.state.startDt.getDate() - this.state.startDt.getDay() + 1
        ) +
          7 * 24 * 60 * 60 * 1000
      ),
      endDt: new Date(
        this.state.startDt.setDate(
          this.state.startDt.getDate() - this.state.startDt.getDay() + 5
        ) +
          7 * 24 * 60 * 60 * 1000
      ),
      count: this.state.count + 1,
    });
    // var startz = new Date(this.state.startDt + 3 * 24 * 3600 * 1000);
    // var endz = new Date(this.state.startDt + 7 * 24 * 3600 * 1000);
    // console.log(this.state.startDt, "hhhhhhhhhhhhhh");
    let date = new Date(this.state.startDt);
    getWeeklyStatus(
      new Date(date.setDate(date.getDate() + 3)),
      new Date(date.setDate(date.getDate() + 4)),
      "",
      this.state.currentPage
    );
  };

  handleOk = () => {
    this.setState({
      showHealthBox: false,
      showHealthOption: null,
    });
  };

  handleCancel = () => {
    this.setState({
      showHealthBox: false,
      showHealthOption: null,
    });
  };

  handleUpdateSearchState = (e) => {
    this.setState(
      {
        ...this.state.projectName,
        projectName: e.target.value,
      },
      async () => {
        if ((e.code === "Backspace" || e.target.value === "") && !this.state.engagementType) {
          await getWeeklyStatus(
            this.state.startDt,
            this.state.endDt,
            e.target.value,
            this.state.currentPage
          );
          // this.updatePagination(1, this.state.engagementType);
        }
        if (e.target.value === "" && this.state.engagementType) {
          await getWeeklyStatus(
            this.state.startDt,
            this.state.endDt,
            this.state.engagementType,
            this.state.currentPage
          );
          // this.updatePagination(1, this.state.engagementType);
        }
       
        if (e.target.value.length >=2) {
          await getWeeklyStatusProjects(
            this.state.projectName,
            this.state.engagementType,
            this.props.user.userDetails.id,
            1
          );
        }
        this.updatePagination(1, this.state.engagementType);
      }
    );
  };

  updatePagination = (page, eT) => {
    if (this.props.week_status.weeklyStatus.paging.total) {
      this.setState({
        currentPage: page,
        engagementType: eT,
        totalPages: Math.ceil(
          this.props.week_status.weeklyStatus.paging.total / 10
          ),
        });
        console.log( this.state.engagementType,">>>>>>>>>>>>>");
    }
  };

  render() {
    return (
      <div style={{ paddingTop: "80px" }}>
        <div className="upperRow">
          <h3>Weekly Status</h3>
          <div className="filter">
            {/* <div className="dateFilter"> */}
            <p className="status">
              <FaAngleLeft
                onClick={this.weekback}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  width: "17px",
                  height: "17px",
                }}
              />
              {/* Status Logged */}
              {moment(this.state.startDt).format("DD-MMM")}
              {"   "}-{"   "}
              {moment(this.state.endDt).format("DD-MMM")}
              <FaAngleRight
                className=""
                onClick={this.weekForword}
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  width: "17px",
                  height: "17px",
                }}
              />
            </p>
            {/* </div> */}
            <div>
              <label className="styleSearch">
                <span
                  style={{
                    borderLeft: "2px solid #1f4173",
                    height: "24px",
                    opacity: 0.15,
                    marginRight: "20px",
                  }}
                ></span>
                <span className="searchLabel">Project: </span>
                <Input
                  type="search"
                  className="searchBox"
                  id="search"
                  disabled={
                    // this.props.week_status.weeklyStatus.projects.length
                    //   ? false
                    //   : true
                    this.state.projectName != ""
                      ? false
                      : this.props.week_status.weeklyStatus.projects.length ===
                        0
                      ? true
                      : false
                  }
                  name={this.state.projectName}
                  value={this.state.projectName}
                  onChange={this.handleUpdateSearchState}
                  onKeyDown={(e) => {
                    if (e.code === "Enter") {
                      getWeeklyStatusProjects(
                        this.state.projectName,
                        this.props.user.userDetails.value.id
                      );
                    }
                  }}
                  placeholder="Search"
                  bordered={false}
                  suffix={
                    <BiSearch
                      style={{
                        width: "16.93px",
                        height: "16.93px",
                        color: "#1F4173",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        getWeeklyStatusProjects(
                          this.state.projectName,
                          this.props.user.userDetails.value.id
                        );
                      }}
                    />
                  }
                />
              </label>
            </div>
            <div className="engagement">
              <label htmlFor="options" className="optLabel">
                Filter by:{" "}
              </label>
              <select
                placeholder="Apply Filter"
                className="select"
                style={{
                  cursor: `${
                    this.props.week_status.weeklyStatus.projects.length
                      ? "pointer"
                      : "not-allowed"
                  }`,
                }}
                onChange={this.filter_by}
                name="options"
                id="options"
                disabled={
                  this.props.week_status.weeklyStatus.projects.length
                    ? false
                    : true
                }
                defaultValue=""
              >
                <option value="">Engagement Type</option>

                {this.props.week_status.engagementType
                  ? this.props.week_status.engagementType.engagement_types.map(
                      (ele, i) => {
                        if (ele != null) {
                          return (
                            <option value={ele} key={ele}>
                              {ele}
                            </option>
                          );
                        }
                      }
                    )
                  : []}
                {/* <option value="clear">Clear </option> */}
                {/* <option value="">Clear Filter</option> */}
              </select>
            </div>
          </div>
        </div>
        <table className="weekTable">
          <thead>
            <tr className="headRow">
              <th
                className="thead"
                style={{
                  width: "30%",
                }}
              >
                Project
              </th>
              <th
                className="thead"
                style={{
                  width: "20%",
                }}
              >
                Engagement type
              </th>
              <th
                className="thead"
                style={{
                  width: "30%",
                }}
              >
                Week Status
              </th>
              <th
                className="thead"
                style={{
                  width: "20%",
                }}
              >
                Project Health
              </th>
            </tr>
          </thead>
          <tbody
            // "406px"
            style={{
              height: `${
                this.props.week_status.weeklyStatus.projects.length === 0
                  ? "100px"
                  : this.props.week_status.weeklyStatus.projects.length < 5
                  ? "auto"
                  : "370px"
              }`,
              overflowY: "auto",
              display: `${
                this.props.week_status.weeklyStatus.projects.length === 0
                  ? "contents"
                  : "block"
              }`,
            }}
          >
            {this.props.week_status.weeklyStatus.projects.length ? (
              this.props.week_status.weeklyStatus.projects.map((ele, i) => {
                return (
                  <tr
                    key={i}
                    className="tableRow"
                    style={{
                      textAlign: "center",
                      display: "table",
                      width: "100%",
                    }}
                    id="row"
                  >
                    <td
                      style={{
                        width: "30%",
                      }}
                      className="tbody"
                    >
                      {" "}
                      {ele.project_name}
                    </td>
                    <td
                      className="tbody"
                      style={{
                        width: "20%",
                      }}
                    >
                      {ele.engagement_type}
                    </td>
                    <td
                      className="tbody"
                      style={{
                        width: "30% ",
                      }}
                    >
                      <>
                        {this.state.selectorRow == i ? (
                          <TextArea
                            autoFocus
                            className="textareaEdit"
                            rows={2}
                            value={this.state.description}
                            onChange={(e) => {
                              this.setState({
                                description: e.target.value,
                              });
                              // console.log(this.state.description);
                            }}
                            onBlur={this.update}
                          />
                        ) : (
                          <Tooltip
                            placement="top"
                            overlayStyle={{ whiteSpace: "pre-line" }}
                            title={ele.weekly_status_description}
                          >
                            <Input
                              style={{
                                cursor: `${
                                  this.state.count === 0
                                    ? "pointer"
                                    : "not-allowed"
                                }`,
                              }}
                              className="textarea"
                              readOnly
                              value={ele.weekly_status_description}
                              suffix={
                                this.state.count === 0 ? (
                                  //  &&
                                  // (ele.is_email_sent == false ||
                                  //   ele.is_email_sent == null)
                                  <AiOutlineEdit
                                    style={{ cursor: "pointer" }}
                                    id={ele.project_owner_id}
                                    onClick={() => {
                                      this.setState({
                                        selectorRow: i,
                                        description:
                                          ele.weekly_status_description,
                                        projectId: ele.project_id,
                                        statusId:
                                          ele.weekly_project_health_status_id,
                                      });
                                    }}
                                  />
                                ) : (
                                  ""
                                )
                                // ) :
                                //  this.state.count != 0 &&
                                //   ele.is_email_sent == false &&
                                //   ele.weekly_status_description != null ? (
                                //   <AiOutlineEdit
                                //     style={{ cursor: "pointer" }}
                                //     id={ele.project_owner_id}
                                //     onClick={() => {
                                //       this.setState({
                                //         selectorRow: i,
                                //         description:
                                //           ele.weekly_status_description,
                                //         projectId: ele.project_id,
                                //         statusId:
                                //           ele.weekly_project_health_status_id,
                                //       });
                                //     }}
                                //   />
                                // )
                                //  : (
                                //   ""
                                // )
                              }
                              // suffix={
                              //   ele.is_email_sent === false ? (
                              //     <AiOutlineEdit
                              //       style={{ cursor: "pointer" }}
                              //       id={ele.project_owner_id}
                              //       onClick={() => {
                              //         this.setState({
                              //           selectorRow: i,
                              //           description:
                              //             ele.weekly_status_description,
                              //           projectId: ele.project_id,
                              //           statusId:
                              //             ele.weekly_project_health_status_id,
                              //         });
                              //       }}
                              //     />
                              //   ) : (
                              //     ""
                              //   )
                              // }
                            />
                          </Tooltip>
                        )}
                      </>
                    </td>
                    <td className="tbody" style={{ width: "20%" }}>
                      <div className="dropdown">
                        <div
                          className="dropdown-toggle projectHealthSelect"
                          data-bs-toggle="dropdown"
                          disabled={this.state.count === 0 ? false : true}
                          style={{
                            cursor: `${
                              this.state.count === 0 ? "pointer" : "not-allowed"
                            }`,
                          }}
                          onClick={() => {
                            this.setState({
                              description: ele.weekly_status_description,
                              showHealthOption: i,
                              projectId: ele.project_id,
                            });
                          }}
                        >
                          <div
                            style={{
                              background: `linear-gradient(180deg, ${
                                this.props.week_status.healthStatus.results
                                  .length > 0
                                  ? this.props.week_status.healthStatus.results[
                                      this.props.week_status.healthStatus.results.findIndex(
                                        (x) =>
                                          x.name.toLowerCase() ===
                                          ele.project_health.toLowerCase()
                                      )
                                    ].color_code_1
                                  : null
                              } 10%,
                              ${
                                this.props.week_status.healthStatus.results
                                  .length > 0
                                  ? this.props.week_status.healthStatus.results[
                                      this.props.week_status.healthStatus.results.findIndex(
                                        (x) =>
                                          x.name.toLowerCase() ===
                                          ele.project_health.toLowerCase()
                                      )
                                    ].color_code_2
                                  : null
                              } 90%)`,
                            }}
                            className="square"
                          ></div>
                          {this.props.week_status.healthStatus.results.length >
                          0
                            ? this.props.week_status.healthStatus.results[
                                this.props.week_status.healthStatus.results.findIndex(
                                  (x) =>
                                    x.name.toLowerCase() ===
                                    ele.project_health.toLowerCase()
                                )
                              ].name
                            : null}
                        </div>
                        <ul className="dropdown-menu">
                          {this.props.week_status.healthStatus
                            ? this.props.week_status.healthStatus.results.map(
                                (ele, i) => {
                                  return (
                                    <button
                                      className="healthbtn"
                                      onClick={this.updateHealth}
                                      value={ele.id}
                                      key={i}
                                    >
                                      <div
                                        style={{
                                          background: `linear-gradient(180deg,${ele.color_code_1} 0%, ${ele.color_code_2} 100%)`,
                                        }}
                                        className="square"
                                      ></div>
                                      {ele.name}
                                    </button>
                                  );
                                }
                              )
                            : []}
                        </ul>
                      </div>

                      {/* Required in future */}

                      {/* {(this.state.showHealthOption == i &&
                        this.state.count === 0 &&
                        (ele.is_email_sent == false ||
                          ele.is_email_sent == null)) ||
                      (this.state.showHealthOption == i &&
                        this.state.count != 0 &&
                        ele.is_email_sent == false &&
                        ele.weekly_status_description != null) ? (
                        <Modal
                          style={{
                            position: "absolute",
                            top: "257px",
                            right: "37px",
                          }}
                          // className="healthSection"
                          visible={this.state.showHealthBox}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                        >
                          {this.props.week_status.healthStatus.results.map(
                            (ele, i) => {
                              return (
                                <button
                                  type="button"
                                  className="healthbtn"
                                  onClick={this.updateHealth}
                                  value={ele.id}
                                >
                                  <div
                                    style={{
                                      background: `linear-gradient(180deg,${ele.color_code_1} 0%, ${ele.color_code_2} 100%)`,
                                    }}
                                    className="square"
                                  ></div>
                                  {ele.name}
                                </button>
                              );
                            }
                          )}
                        </Modal>
                      ) : (
                        <span
                          style={{ fontWeight: "400", cursor: "pointer" }}
                          onClick={(e) => {
                            this.setState({
                              description: ele.weekly_status_description,
                              showHealthOption: i,
                              projectId: ele.project_id,
                            });
                          }}
                        >
                          <p
                            onClick={() => {
                              this.setState({
                                showHealthBox: true,
                              });
                            }}
                            style={{margin: '0px'}}
                          >
                            <div
                              style={{
                                background: `${
                                  ele.project_health == "Poor"
                                    ? "linear-gradient(180deg, #FF5B5D 10%, #F2383A 90%)"
                                    : ele.project_health == "Good"
                                    ? "linear-gradient(180deg, #24d6a5 10%, #17c293 90%)"
                                    : ele.project_health == "Average"
                                    ? "linear-gradient(180deg, #FFDA70 10%, #FFBD00 90%)"
                                    : ele.project_health == "Excellent"
                                    ? "linear-gradient(180deg, #edbb99 10%, #e59866 90%)"
                                    : ele.project_health == null
                                    ? "linear-gradient(180deg, #24d6a5 10%, #17c293 90%)"
                                    : ""
                                }`,
                              }}
                              className="square mainSquare"
                            ></div>

                            {ele.project_health == null
                              ? "Good"
                              : ele.project_health}
                          </p>
                        </span>
                      )} */}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={4}
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    fontSize: "14px",
                  }}
                >
                  {this.state.projectName !== ""
                    ? "No record found"
                    : "No projects assigned, please contact your PM"}
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="tfoot">
            <tr>
              <td>
                <Pagination
                  page={this.state.currentPage}
                  pages={this.state.totalPages}
                  changePage={this.onChangePage}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  // console.log(store, "STORE");
  return {
    ...store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default DashboardTemplate(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(WeeklyStatus))
);
