import React from "react";
import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./ProjectComponent.css";
import { Modal } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { Input } from "antd";

const monthFormat = "MMM YYYY";
const ProjectComponent = (props) => {
  const [date, setDate] = useState();
  const [show, setShow] = useState();

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {" "}
      <Modal
        dialogClassName="top_modal"
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div>
          <h5>Add New Resources</h5>
          <h6>New Resources</h6>
          <div>
            <input />
            <div>
              <button onClick={handleClose}>cancel</button>
              <button onClick={handleClose}>add</button>
            </div>
          </div>
        </div>
      </Modal>
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
          <table cellSpacing={0} className="loggedHoursResourcesTable">
            {/* <thead> */}
            <tr>
              <th colSpan={4} style={{ textAlign: "center" }}>
                {" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                    alignItems: "center",
                    background: "rgb(250 250 250)",
                    height: "80px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <FaAngleLeft className="captionLeftArrow" />
                    <span>
                      <DatePicker
                        onChange={(d) => {
                          setDate(d);
                        }}
                        customInput={<CustomInput />}
                      />
                    </span>
                    <span className="tableDate">
                      Weekly Hours Logged {moment(date).format("DD MMM YYYY")}
                    </span>
                  </div>
                  <div>
                    <button className="addResourcesBtn" onClick={handleShow}>
                      + Add Resources
                    </button>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th className="loggedHours_tdata">
                {" "}
                <input type="checkbox" name="" id="" /> Resource
              </th>
              <th className="loggedHours_tdata">Hours logged</th>
              <th className="loggedHours_tdata">Build hours</th>
              <th className="loggedHours_tdata" style={{ textAlign: "center" }}>
                Status
              </th>
            </tr>
            {/* </thead> */}
            <tbody style={{ height: "100px", overflowY: "auto" }}>
              <tr>
                <td
                  className="loggedHours_tdata "
                  style={{ fontWeight: "600" }}
                >
                  <input type="checkbox" name="" id="" /> Rahul Mehra
                </td>
                <td className="loggedHours_tdata">
                  <div className="centerPadding">40</div>
                </td>
                <td className="loggedHours_tdata" style={{ width: "397px" }}>
                  <div>
                    <Input
                      className="loggedhourInput"
                      suffix={<AiOutlineEdit />}
                      value={20}
                    />
                  </div>
                </td>
                <td className="loggedHours_tdata loggedStatus">
                  <div
                    style={{
                      padding: "13px 4px",
                      background: "#d4fbd4",
                      color: "green",
                    }}
                    className="centerPadding"
                  >
                    Approved
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  className="loggedHours_tdata "
                  style={{ fontWeight: "600" }}
                >
                  <input type="checkbox" name="" id="" /> Rahul Mehra
                </td>
                <td className="loggedHours_tdata">
                  <div className="centerPadding">40</div>
                </td>
                <td className="loggedHours_tdata" style={{ width: "397px" }}>
                  <div>
                    <Input
                      className="loggedhourInput"
                      suffix={<AiOutlineEdit />}
                      value={20}
                    />
                  </div>
                </td>
                <td className="loggedHours_tdata loggedStatus">
                  <div
                    style={{
                      padding: "13px 4px",
                      background: "#d4fbd4",
                      color: "green",
                    }}
                    className="centerPadding"
                  >
                    Approved
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  className="loggedHours_tdata "
                  style={{ fontWeight: "600" }}
                >
                  <input type="checkbox" name="" id="" /> Rahul Mehra
                </td>
                <td className="loggedHours_tdata">
                  <div className="centerPadding">40</div>
                </td>
                <td className="loggedHours_tdata" style={{ width: "397px" }}>
                  <div>
                    <Input
                      className="loggedhourInput"
                      suffix={<AiOutlineEdit />}
                      value={20}
                    />
                  </div>
                </td>
                <td className="loggedHours_tdata loggedStatus">
                  <div
                    style={{
                      padding: "13px 4px",
                      background: "#d4fbd4",
                      color: "green",
                    }}
                    className="centerPadding"
                  >
                    Approved
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  className="loggedHours_tdata "
                  style={{ fontWeight: "600" }}
                >
                  <input type="checkbox" name="" id="" /> Rahul Mehra
                </td>
                <td className="loggedHours_tdata">
                  <div className="centerPadding">40</div>
                </td>
                <td className="loggedHours_tdata" style={{ width: "397px" }}>
                  <div>
                    <Input
                      className="loggedhourInput"
                      suffix={<AiOutlineEdit />}
                      value={20}
                    />
                  </div>
                </td>
                <td className="loggedHours_tdata loggedStatus">
                  <div
                    style={{
                      padding: "13px 4px",
                      background: "#d4fbd4",
                      color: "green",
                    }}
                    className="centerPadding"
                  >
                    Approved
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr
                style={{
                  background: "#FAFAFA",
                  boxShadow: "inset 0px 1px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: "0px 0px 15px 15px",
                  overflow: "hidden",
                }}
              >
                <td colSpan={4}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "25px",
                    }}
                    className="lastBtn"
                  >
                    <button>Cancel</button>
                    <button>Approve</button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

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
