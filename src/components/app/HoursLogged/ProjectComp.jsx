import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import {
  getHoursloggedData,
  getResourcesHoursloggedData,
} from "../../../redux/actions/hoursloggedAction";

const monthFormat = "MMM YYYY";
const resTableData = [];

const ProjectComponent = (props) => {
  const [date, setDate] = useState();
  const [show, setShow] = useState();
  const [currDate, setCurrDate] = useState(new Date());
  const [newObj, setObj] = useState({});
  const [rTableData, setRTData] = useState(null);

  const dispatch = useDispatch();

  const hoursLoggedModuleData = useSelector(
    (state) => state.hoursLogged.hoursloggedData
  );

  const resHoursLoggedTableData = useSelector(
    (state) => state.hoursLogged.resHoursLoggedData
  );

  useEffect(() => {
    dispatch(getHoursloggedData(moment(currDate).format("MM/YYYY")));
    // dispatch(getResourcesHoursloggedData(props.id));
    dispatch(getResourcesHoursloggedData("21620"));
  }, []);

  // const dispatchHandler = () => {
  //   console.log("runningggggggg");
  //   dispatch(getResourcesHoursloggedData("21620"));
  // };

  useEffect(() => {
    if (hoursLoggedModuleData !== null) {
      hoursLoggedModuleData.find((obj) => {
        if (obj.webtracker_project_id == props.id) {
          setObj(obj);
        }
      });
    }
  }, [hoursLoggedModuleData]);

  useEffect(() => {
    if (resHoursLoggedTableData !== null) {
      resHoursLoggedTableData.forEach((element) => {
        resTableData.push({
          LoggedHours: element.loggedhour,
          Resources: element.resources,
        });
      });
    }
    setRTData(resTableData);
  }, [resHoursLoggedTableData]);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  console.log(rTableData, "resources table data");

  return (
    <>
      {" "}
      <Modal
        size="sm"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="resModal">
          <div className="resModalHead">
            <h5>Add New Resources</h5>
          </div>
          <div className="resModalBody">
            <h6>New Resources</h6>
            <div>
              <input className="resModalInput" />
              <div className="resModalBtn">
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleClose}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <p className="backBtn">
          <FaAngleLeft /> Back Hour Logged
        </p>
        <h3 className="heading">{newObj.project_name}</h3>
        <div className="headBox" style={{ marginTop: "20px" }}>
          <label>
            Project Owner: <span>{newObj.owner_name}</span>
          </label>
          <label>
            Project Code: <span>{newObj.project_code}</span>
          </label>
          <label>
            Account Code: <span>{newObj.account_code}</span>
          </label>
          <label>
            Engagement Type: <span>{newObj.engagement_type}</span>
          </label>
          <label>
            Hours Logged: <span>{newObj.logged_time}</span>
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
              {resTableData.map((element, index) => {
                return (
                  <tr>
                    <td
                      className="loggedHours_tdata "
                      style={{ fontWeight: "600" }}
                    >
                      <input type="checkbox" name="" id="" />
                      {element.Resources}
                    </td>
                    <td className="loggedHours_tdata">
                      <div className="centerPadding">{element.LoggedHours}</div>
                    </td>
                    <td
                      className="loggedHours_tdata"
                      style={{ width: "397px" }}
                    >
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
                );
              })}
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
