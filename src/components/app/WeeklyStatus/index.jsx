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
// import moment from "moment";
const { TextArea } = Input;

let bool = true;

class WeeklyStatus extends React.Component {
  componentDidMount = () => {
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

    // console.log(this.state.startDt, this.state.endDt, "DATESSSSSSSSSSSSS");
    let dates = {
      strt: new Date(
        this.state.endDt.setDate(
          this.state.endDt.getDate() - this.state.endDt.getDay() + 1
        )
      ),
      end: this.state.startDt,
    };
    // console.log(dates, "DATESSSSSSSSSSSSS");
    // getWeeklyStatus(dates, "");
    getWeeklyStatus(dates, "", this.state.currentPage);
    get_health_status();
    get_engagement_types();
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
    filter_type: "",
    count: 0,
    currentPage: 1,
    totalPages: 1,
    pageNumber: 1,
    engagementVal: null,
    projectName: "",
  };

  onChangePage = (page) => {
    this.setState(
      {
        currentPage: page,
      },
      () => {
        let dates = {
          strt: this.state.startDt,
          end: this.state.endDt,
        };
        getWeeklyStatus(dates, "", this.state.currentPage);
      }
    );
  };

  dateHandler = (e) => {
    let a = e.target.value;
    this.setState({
      startDt: a[0],
      endDt: a[1],
    });
    let dates = {
      strt: this.state.startDt,
      end: this.state.endDt,
    };
    getWeeklyStatus(dates, this.state.filter_type, this.state.currentPage);
    // getWeeklyStatus(this.state.startDt, this.state.endDt);
  };

  update = () => {
    this.setState({ selectorRow: null });

    let data = {
      project_health_status_id: this.state.statusId,
      description: this.state.description,
      project_id: this.state.projectId,
    };

    // console.log(data);
    let date_range = { strt: this.state.startDt, end: this.state.endDt };
    updateWeeklyStatus(data, date_range, this.state.pageNumber);
  };

  updateHealth = (e) => {
    this.setState({
      showHealthOption: null,
      showHealthBox: !this.state.showHealthBox,
      // healthOption: e.target.value,
    });
    let data = {
      project_health_status_id: e.target.value,
      description: this.state.description,
      project_id: this.state.projectId,
    };
    // console.log(data);
    let dates = {
      strt: this.state.startDt,
      end: this.state.endDt,
    };
    if (data.description) {
      console.log(data, dates);
      updateWeeklyStatus(data, dates, this.state.pageNumber);
    } else {
      alert("Please Update the week status first.");
    }
  };

  filter_by = (e) => {
    this.setState({ filter_by: e.target.value, currentPage: 1 }, () => {
      let dates = {
        strt: this.state.startDt,
        end: this.state.endDt,
      };
      getWeeklyStatus(dates, e.target.value, this.state.currentPage);
    });
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
      //new changes
    });

    let dates = {
      strt: new Date(this.state.startDt - 13 * 24 * 3600 * 1000),
      end: new Date(this.state.endDt - 7 * 24 * 3600 * 1000),
    };
    console.log(dates);
    getWeeklyStatus(dates, "", this.state.currentPage);
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
    var startz = new Date().setDate(this.state.startDt.getDate() + 1);
    var endz = new Date().setDate(this.state.endDt.getDate() + 7);
    let dates_ = {
      strt: new Date(startz),
      end: new Date(endz),
    };
    console.log(dates_);
    getWeeklyStatus(dates_, "", this.state.currentPage);
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

  render() {
    console.log(this.props, "opopopopopopopopopop");
    if (!this.props.week_status.weeklyStatus) {
      return <div></div>;
    }

    if (this.props.week_status.weeklyStatus && bool) {
      this.setState({
        totalPages: Math.ceil(
          this.props.week_status.weeklyStatus.paging.total / 20
        ),
      });
      bool = false;
    }

    if (this.props.week_status.weeklyStatus.projects.length) {
      if (
        this.state.engagementVal !=
        this.props.week_status.weeklyStatus.projects[0].engagement_type
      ) {
        this.setState({
          totalPages: Math.ceil(
            this.props.week_status.weeklyStatus.paging.total / 20
          ),
          engagementVal:
            this.props.week_status.weeklyStatus.projects[0].engagement_type,
        });
      }
    }

    // console.log("project name ", this.state.projectName);

    return (
      <div style={{ position: "relative", top: "70px" }}>
        <div className="upperRow">
          <h3>Weekly Status</h3>
          <div className="filter">
            {/* <div className="dateFilter"> */}
            <p className="status">
              <FaAngleLeft
                onClick={this.weekback}
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  width: "15px",
                  height: "10px",
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
                  width: "15px",
                  height: "10px",
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
                <span className="searchLabel">Project</span>
                <Input
                  type="search"
                  className="searchBox"
                  name={this.state.projectName}
                  value={this.state.projectName}
                  onChange={(e) => {
                    this.setState({
                      ...this.state.projectName,
                      projectName: e.target.value,
                    });
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
                        console.log(
                          "searched name ",
                          getWeeklyStatusProjects(this.state.projectName)
                        );
                        // getWeeklyStatusProjects(this.state.projectName)
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
                onChange={this.filter_by}
                name="options"
                id="options"
              >
                <option value="" disabled selected>
                  Engagement Type
                </option>

                {this.props.week_status.engagementType
                  ? this.props.week_status.engagementType.engagement_types.map(
                      (ele, i) => {
                        if (ele != null) {
                          return <option value={ele}>{ele}</option>;
                        }
                      }
                    )
                  : []}
                {/* <option value="clear">Clear </option> */}
                <option value="">Clear Filter</option>
              </select>
            </div>
          </div>
        </div>
        <table className="weekTable">
          <tr className="headRow">
            <th
              className="thead"
              style={{
                width: "30%",
                display: "inline-block",
                padding: "16px 10px",
                textAlign: "left",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Project
            </th>
            <th
              className="thead"
              style={{
                width: "20%",
                display: "inline-block",
                padding: "16px 10px",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Engagement type
            </th>
            <th
              className="thead"
              style={{
                width: "30%",
                display: "inline-block",
                padding: "16px 10px",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Week Status
            </th>
            <th
              className="thead"
              style={{
                width: "20%",
                display: "inline-block",
                padding: "16px 10px",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Project Health
            </th>
          </tr>
          <tbody
            // "406px"
            style={{
              overflowY: "auto",
              // overflowX: "auto",
              display: "block",
              height: `${
                this.props.week_status.weeklyStatus.projects.length < 5
                  ? ""
                  : "365px"
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
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "14px",
                        padding: "13px 10px",
                        width: "30%",
                        textAlign: "left",
                        textTransform: "capitalize",
                      }}
                      className="thead"
                    >
                      {" "}
                      {ele.project_name}
                    </td>
                    <td
                      className="thead"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "13px",
                        color: "grey",
                        width: "20%",
                        padding: "13px 10px",
                        // border: "1px solid green",
                      }}
                    >
                      {ele.engagement_type}
                    </td>
                    <td
                      className="thead"
                      style={{
                        width: "30% ",
                        padding: "13px 10px",
                        background: "#F9FAFD",
                      }}
                    >
                      <>
                        {this.state.selectorRow == i ? (
                          <TextArea
                            autoFocus
                            className="textareaEdit"
                            rows={3}
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
                              className="textarea"
                              readOnly
                              value={ele.weekly_status_description}
                              suffix={
                                this.state.count === 0 &&
                                (ele.is_email_sent == false ||
                                  ele.is_email_sent == null) ? (
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
                                ) : this.state.count != 0 &&
                                  ele.is_email_sent == false &&
                                  ele.weekly_status_description != null ? (
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
                    <td
                      className="thead"
                      style={{
                        width: "20%",
                        padding: "13px 10px",
                        background: "#F9FAFD",
                      }}
                    >
                      {(this.state.showHealthOption == i &&
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
                          style={{ fontWeight: "600", cursor: "pointer" }}
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
                          >
                            <div
                              style={{
                                background: `${
                                  ele.weekly_project_health == "Poor"
                                    ? "linear-gradient(180deg, #FF5B5D 10%, #F2383A 90%)"
                                    : ele.weekly_project_health == "Good"
                                    ? "linear-gradient(180deg, #24d6a5 10%, #17c293 90%)"
                                    : ele.weekly_project_health == "Average"
                                    ? "linear-gradient(180deg, #FFDA70 10%, #FFBD00 90%)"
                                    : ele.weekly_project_health == "Excellent"
                                    ? "linear-gradient(180deg, #edbb99 10%, #e59866 90%)"
                                    : ""
                                }`,
                              }}
                              className="square"
                            ></div>

                            {ele.weekly_project_health == null
                              ? "None"
                              : ele.weekly_project_health}
                          </p>
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <center>
                {" "}
                <p style={{ fontSize: "13px", padding: "15px 0 5px 0" }}>
                  {" "}
                  No data found
                </p>
              </center>
            )}
          </tbody>
          <tfoot
            style={{
              backgroundColor: "rgb(243, 243, 243)",
              // borderTop:"20px solid rgb(233, 238, 243)"
            }}
          >
            {this.props.week_status.weeklyStatus.projects.length > 20 ? (
              <Pagination
                page={this.state.currentPage}
                pages={this.state.totalPages}
                changePage={this.onChangePage}
              />
            ) : (
              ""
            )}
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
