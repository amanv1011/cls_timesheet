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
} from "../../../actions/asyncActions";
import { AiOutlineEdit } from "react-icons/ai";
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
          this.state.startDt.getDate() - this.state.startDt.getDay() + 7
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
    console.log(dates, "DATESSSSSSSSSSSSS");
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
    let dates = {
      strt: this.state.startDt,
      end: this.state.endDt,
    };
    // console.log(e.target.value);
    this.setState({ filter_by: e.target.value });
    getWeeklyStatus(dates, e.target.value, this.state.currentPage);
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
          this.state.startDt.getDate() - this.state.startDt.getDay() + 7
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
          this.state.startDt.getDate() - this.state.startDt.getDay() + 7
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

    if (
      this.state.totalPages !==
      Math.ceil(this.props.week_status.weeklyStatus.paging.total / 20)
    ) {
      this.setState({
        totalPages: Math.ceil(
          this.props.week_status.weeklyStatus.paging.total / 20
        ),
      });
    }

    return (
      <div style={{ position: "relative", top: "70px" }}>
        <div className="upperRow">
          <h3>Weekly Status</h3>
          <div className="filter">
            <div className="dateFilter">
              <p className="status">
                <FaAngleLeft
                  onClick={this.weekback}
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
                {/* Status Logged */}
                {moment(this.state.startDt).format("DD-MMM-YYYY")}
                {"   "}-{"   "}
                {moment(this.state.endDt).format("DD-MMM-YYYY")}
              </p>
              {/* <DateRangePickerComponent
                className="datepicker"
                allowEdit={false}
                format={"dd MMM yy"}
                placeholder="Select Date Range"
                minDays={7}
                maxDays={7}
                startDate={this.state.startDt}
                endDate={this.state.endDt}
                onChange={this.dateHandler}
              /> */}
              <FaAngleRight
                className=""
                onClick={this.weekForword}
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  position: "relative",
                  top: "-10px",
                  right: "-3px",
                  color: "#305d9f",
                }}
              />
            </div>
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
        <table className="weekTable">
          <tr className="headRow">
            <th
              className="thead"
              style={{
                width: "30%",
                display: "inline-block",
                padding: "16px 10px",
                textAlign: "left",
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
              }}
            >
              Project Health
            </th>
          </tr>
          <tbody
            // "406px"
            style={{
              overflowY: "auto",
              display: "block",
              height: `${
                this.props.week_status.weeklyStatus.projects.length < 6
                  ? ""
                  : "406px"
              }`,
            }}
          >
            {this.props.week_status.weeklyStatus.projects.length != 0 ? (
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
                  >
                    <td
                      style={{
                        fontWeight: "500",
                        padding: "13px 10px",
                        width: "30%",
                        textAlign: "left",
                      }}
                      className="thead"
                    >
                      {" "}
                      {ele.project_name}
                    </td>
                    <td
                      className="thead"
                      style={{
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
                      style={{ width: "30% ", padding: "13px 10px" }}
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
                <b> No projects found of selected engagement type</b>
              </center>
            )}
          </tbody>
          <tfoot
            style={{
              backgroundColor: "rgb(243, 243, 243)",
              // borderTop:"20px solid rgb(233, 238, 243)"
            }}
          >
            <Pagination
              page={this.state.currentPage}
              pages={this.state.totalPages}
              changePage={this.onChangePage}
            />
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
