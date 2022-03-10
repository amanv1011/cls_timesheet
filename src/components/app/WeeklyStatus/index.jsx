import React from "react";
import { Tooltip, Input } from "antd";
import { connect } from "react-redux";
import DashboardTemplate from "../../layouts/template";
import { withRouter } from "react-router";
import { IoIosArrowBack, IoIosSquare } from "react-icons/io";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./weeklystatus.css";
import {
  getWeeklyStatus,
  updateWeeklyStatus,
} from "../../../actions/asyncActions";
import { AiOutlineEdit } from "react-icons/ai";
import moment from "moment";
const { TextArea } = Input;

class WeeklyStatus extends React.Component {
  componentDidMount = () => {
    let dates = {
      strt: moment(this.state.startDt).format("YYYY-MM-DD"),
      end: moment(this.state.endDt).format("YYYY-MM-DD"),
    };
    getWeeklyStatus(dates, "");
  };

  state = {
    selectionType: "checkbox",
    startDt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    endDt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    description: "",
    projectId: "",
    statusId: "",
    selectorRow: null,
    showHealthOption: null,
    healthOption: "",
  };

  dateHandler = (e) => {
    let a = e.target.value;
    // console.log(a);
    this.setState({
      startDt: moment(a[0]).format("YYYY-MM-DD"),
      endDt: moment(a[1]).format("YYYY-MM-DD"),
    });
    let dates = {
      strt: moment(this.state.startDt).format("YYYY-MM-DD"),
      end: moment(this.state.endDt).format("YYYY-MM-DD"),
    };
    getWeeklyStatus(dates, "");
    // getWeeklyStatus(this.state.startDt, this.state.endDt);
  };

  update = () => {
    this.setState({ selectorRow: null });

    let data = {
      project_health_status_id: this.state.statusId,
      description: this.state.description,
      project_id: this.state.projectId,
    };
    let date_range = { strt: this.state.startDt, end: this.state.endDt };
    updateWeeklyStatus(data, date_range);
  };

  updateHealth = (e) => {
    let data = {
      project_health_status_id: this.state.healthOption,
      description: this.state.description,
      project_id: this.state.projectId,
    };
    this.setState({
      showHealthOption: null,
      healthOption: e.target.value,
    });
    if (data.description) {
      // console.log(this.state.healthOption, "healthc");
      console.log(data, "HEALTHHH");
      updateWeeklyStatus(data);
    } else {
      alert("Please Update the description firse");
    }
  };

  filter_by = (e) => {
    let dates = {
      strt: moment(this.state.startDt).format("YYYY-MM-DD"),
      end: moment(this.state.endDt).format("YYYY-MM-DD"),
    };
    getWeeklyStatus(dates, e.target.value);
  };
  render() {
    return (
      <>
        <div className="backBtn">
          <IoIosArrowBack />
          Back
        </div>
        <div className="upperRow">
          <h3>Weekly Status</h3>
          <div className="filter">
            <div className="dateFilter">
              <p className="status">Status Logged</p>
              <DateRangePickerComponent
                className="datepicker"
                allowEdit={false}
                format={"dd MMM yy"}
                placeholder="Select Date Range"
                startDate={this.state.startDt}
                endDate={this.state.endDt}
                onChange={this.dateHandler}
              />
            </div>
            <label htmlFor="options" className="optLabel">
              Filter by:{" "}
            </label>
            <select
              placeholder="Apply Filter"
              className="select"
              onClick={this.filter_by}
              name="options"
              id="options"
            >
              <option value=" " disabled selected>
                Apply Filter
              </option>
              <option value="Dedicated">Dedicated</option>
            </select>
          </div>
        </div>
        <table className="weekTable">
          <tbody>
            <tr className="headRow">
              <th className="thead">Project</th>
              <th className="thead">Engagement type</th>
              <th className="thead">Weekly Status</th>
              <th className="thead">Health</th>
            </tr>

            {this.props.week_status.weeklyStatus
              ? this.props.week_status.weeklyStatus.projects.map((ele, i) => {
                  return (
                    <tr key={i} className="">
                      <td style={{ fontWeight: "500" }} className="thead">
                        {" "}
                        {ele.project_name}
                      </td>
                      <td className="thead">{ele.engagement_type}</td>
                      <td className="thead">
                        <>
                          {this.state.selectorRow == i ? (
                            <TextArea
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
                              title={ele.weekly_status_description}
                            >
                              <Input
                                className="textarea"
                                readOnly
                                value={ele.weekly_status_description}
                                suffix={
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
                                      // console.log("Edit called", i);
                                      // console.log(
                                      //     "description update : ",
                                      //     this.state.description,
                                      //     this.state.statusId,
                                      //   this.state.projectId
                                      // );
                                    }}
                                  />
                                }
                              />
                            </Tooltip>
                          )}
                        </>
                      </td>
                      <td className="thead">
                        {this.state.showHealthOption == i ? (
                          <section className="healthSection">
                            <button
                              className="healthbtn"
                              onClick={this.updateHealth}
                              style={{ background: "#c8f3e3" }}
                              value={2}
                            >
                              <IoIosSquare style={{ color: "#09ed09" }} /> Good
                            </button>
                            <button
                              className="healthbtn"
                              onClick={this.updateHealth}
                              style={{ background: "#ffd2d2" }}
                              value={4}
                            >
                              <IoIosSquare style={{ color: "red" }} /> Poor
                            </button>
                            <button
                              className="healthbtn"
                              onClick={this.updateHealth}
                              style={{ background: "#fff7bd" }}
                              value={3}
                            >
                              <IoIosSquare style={{ color: "#ffde00" }} />{" "}
                              Average
                            </button>
                          </section>
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
                            <IoIosSquare
                              style={{
                                color: `${
                                  ele.project_health != null
                                    ? ele.project_health.toLowerCase() == "poor"
                                      ? "red"
                                      : ele.project_health.toLowerCase() ==
                                        "good"
                                      ? "#09ed09"
                                      : ele.project_health.toLowerCase() ==
                                        "average"
                                      ? "yellow"
                                      : ""
                                    : ""
                                }`,
                              }}
                            />
                            {ele.project_health}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              : []}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store, "STORE");
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
