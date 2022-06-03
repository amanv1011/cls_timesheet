import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./ProjectComponent.css";

const monthFormat = "MMM YYYY";
class ProjectComponent extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <>
        <div>
          <p className="backBtn">
            <FaAngleLeft /> Back Hour Logged
          </p>
          <h3 className="heading">HIRED Schools Web Design & DM</h3>
          <div className="headBox" style={{ marginTop: "20px" }}>
            <label>
              Project Owner: <span>Himanshu Jindal</span>
            </label>
            <label>
              Project Code: <span>PC103</span>
            </label>
            <label>
              Account Code: <span>PAC103</span>
            </label>
            <label>
              Engagement Type: <span>Fixed</span>
            </label>
            <label>
              Hours Logged: <span>125hr 30m</span>
            </label>
          </div>
          <div>
            <table className="resourceTable">
              <thead className="tableCaption">
                <div style={{ display: "flex" }}>
                  <FaAngleLeft className="captionLeftArrow" />
                  <span>
                    <DatePicker
                      onChange={(d) => {
                        this.setState({
                          date: d,
                        });
                      }}
                      customInput={<CustomInput />}
                    />
                  </span>
                  <span className="tableDate">
                    Weekly Hours Logged{" "}
                    {moment(this.state.date).format("DD MMM YYYY")}
                  </span>
                </div>
                <div>
                  <button className="addResourcesBtn">+ Add Resources</button>
                </div>
              </thead>
              <div className="tableHeading">
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Resources</th>
                  <th>Hours Logged</th>
                  <th>Biled Hours</th>
                  <th>Status</th>
                </tr>
              </div>
              <div className="resourcesName">
                <tr>
                  <td style={{ width: "1px" }}>
                    <input type="checkbox" />
                  </td>
                  <td>Rahul Mehra</td>
                  <td>
                    <div className="build">40h</div>
                  </td>
                  <td>20h</td>
                  <td>Approved</td>
                </tr>
                <tr>
                  <td style={{ width: "1px" }}>
                    <input type="checkbox" />
                  </td>
                  <td>Himanshu Jindal</td>
                  <td>40h</td>
                  <td>20h</td>
                  <td>Approved</td>
                </tr>
                <tr>
                  <td style={{ width: "1px" }}>
                    <input type="checkbox" />
                  </td>
                  <td>Vineet Jain</td>
                  <td>40h</td>
                  <td>20h</td>
                  <td>Approved</td>
                </tr>
                <tr>
                  <td style={{ width: "1px" }}>
                    <input type="checkbox" />
                  </td>
                  <td>Amit Chaudhary</td>
                  <td>40h</td>
                  <td>20h</td>
                  <td>Approved</td>
                </tr>
              </div>
              <div className="cancelApproveBtn">
                <button>cancel</button>
                <button>Approve</button>
              </div>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectComponent;

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <label onClick={props.onClick} ref={ref}>
        {props.value || props.placeholder}
      </label>
      <RiCalendar2Line onClick={props.onClick} className="tableCalender" />
    </div>
  );
});
