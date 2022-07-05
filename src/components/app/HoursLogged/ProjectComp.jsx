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
import { RiDeleteBinLine } from "react-icons/ri";
import { Input } from "antd";
import { useRef } from "react";
import {
  getHoursloggedData,
  getResourcesHoursloggedData,
  getModalResourcesData,
  updateResourceName,
  updateBilledHour,
} from "../../../redux/actions/hoursloggedAction";

const monthFormat = "MMM YYYY";
// const resTableData = [];

const ProjectComponent = (props) => {
  const [date, setDate] = useState();
  const [show, setShow] = useState();
  const [currDate, setCurrDate] = useState(new Date());
  const [newObj, setObj] = useState({});
  const [rTableData, setRTData] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [newResId, setID] = useState();
  const [hovwr, setHovwr] = useState(null);
  const [selectRow, setSelectRow] = useState(null);
  const [billedHour, setBilledHour] = useState();
  const [objBilledHour, setObjBL] = useState({
    project_id: "",
    // start_date: "",
    projectName: "",
    userId: "",
    logged_time: "",
    billed_hour: "",
  });

  const [reload, setReload] = useState(false);

  const project_id = props.id;

  const dispatch = useDispatch();

  const hoursLoggedModuleData = useSelector(
    (state) => state.hoursLogged.hoursloggedData
  );

  const resHoursLoggedTableData = useSelector(
    (state) => state.hoursLogged.resHoursLoggedData
  );

  const modalResourcesData = useSelector(
    (state) => state.hoursLogged.modalResData
  );

  useEffect(() => {
    dispatch(getHoursloggedData(moment(currDate).format("MM/YYYY")));
    dispatch(getResourcesHoursloggedData(props.id));
    // dispatch(getResourcesHoursloggedData("21620"));
  }, []);

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
      setRTData(resHoursLoggedTableData);
    }
    // console.log(resHoursLoggedTableData, "hiiiiiii");
  }, [resHoursLoggedTableData]);

  useEffect(() => {
    if (modalResourcesData !== null) {
      setModalData(modalResourcesData);
    }
  }, [modalResourcesData]);

  const handleShow = () => {
    setShow(true);
    dispatch(getModalResourcesData());
    // console.log(modalResourcesData, "wwwwwwwwwwwwwww");
  };

  //to close

  const handleClose = () => {
    setShow(false);
  };

  const backToHoursLogged = () => {
    props.onClick(false);
  };

  // console.log(rTableData, "resources table data");
  // console.log(props.id, "getttttttttttttttttt");
  // console.log(modalData.result, "mmmmmmmmmmmmmmmm");

  const addResourcesHandler = (e) => {
    setID(e.target.value);
  };

  const updateResourcesHandler = () => {
    dispatch(
      updateResourceName(newResId, project_id)
      // getResourcesHoursloggedData("18")
    );
    setShow(false);
    // getResourcesHoursloggedData(18);
    //to reload the component
    // window.location.reload(false);
    // setReload(true);
  };

  // function console0() {
  //   setHovwr(true);
  // }
  // function console1() {
  //   setHovwr(false);
  // }

  // const editHandler = () => {
  //   setDisable(false);
  // };

  // const billedHourHandler = (e) => {
  //   setBilledHour(e.target.value);
  //   setObjBL({
  //     ...objBilledHour,
  //     billed_hour: billedHour,
  //   });
  // };

  const handleBlur = (event) => {
    dispatch(updateBilledHour(objBilledHour));
    console.log(objBilledHour, "object completed");
  };

  console.log(billedHour, "getting billedhour");
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
              {/* <input className="resModalInput" /> */}
              <select id="" className="" onChange={addResourcesHandler}>
                <option selected>Resources</option>
                {modalData.result
                  ? modalData.result.map((element, index) => {
                      return <option value={element.id}>{element.name}</option>;
                    })
                  : ""}
              </select>
              <div className="resModalBtn">
                <button onClick={handleClose}>Cancel</button>
                <button onClick={updateResourcesHandler}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <p className="backBtn" onClick={backToHoursLogged}>
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
                <input
                  type="checkbox"
                  name=""
                  id=""
                  style={{ margin: "0px 15px" }}
                />{" "}
                Resource
              </th>
              <th className="loggedHours_tdata">Hours logged</th>
              <th className="loggedHours_tdata">Build hours</th>
              <th className="loggedHours_tdata" style={{ textAlign: "center" }}>
                Status
              </th>
            </tr>
            {/* </thead> */}
            <tbody style={{ height: "100px", overflowY: "auto" }}>
              {rTableData.map((element, i) => {
                return (
                  <tr className="projectCompTr">
                    <td
                      className="loggedHours_tdata "
                      style={{ fontWeight: "600" }}
                    >
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        style={{ margin: "0px 15px" }}
                      />
                      {element.resources}{" "}
                      {element.status == 0 ? (
                        <span className="resourceSpan">NEW</span>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="loggedHours_tdata">
                      <div className="centerPadding">
                        {element.loggedhour ? element.loggedhour : "NA"}
                      </div>
                    </td>
                    <td
                      className="loggedHours_tdata"
                      style={{ width: "397px" }}
                    >
                      <div>
                        {selectRow == i ? (
                          //******************Edit true******************

                          <Input
                            // disabled={selectRow == i ? false : true}
                            className="loggedhourInput"
                            suffix={
                              <AiOutlineEdit
                                onClick={() => {
                                  // setDisable(false);
                                  setSelectRow(i);
                                  setObjBL({
                                    ...objBilledHour,
                                    project_id: element.projectid,
                                    // start_date: "2022-06-13",
                                    projectName: element.project_name,
                                    userId: element.userid,
                                    logged_time: element.loggedhour,
                                  });
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            }
                            value={billedHour}
                            onChange={(e) => {
                              // setObjBL({
                              //   ...objBilledHour,
                              //   billed_hour: e.target.value,
                              // });
                              setBilledHour(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                        ) : (
                          // **************** Edit False ********************
                          <Input
                            readOnly
                            // disabled={selectRow == i ? false : true}
                            className="loggedhourInput"
                            suffix={
                              <AiOutlineEdit
                                onClick={() => {
                                  // setDisable(false);
                                  setSelectRow(i);
                                  setObjBL({
                                    ...objBilledHour,
                                    project_id: element.projectid,
                                    // start_date: "2022-06-13",
                                    projectName: element.project_name,
                                    userId: element.userid,
                                    logged_time: element.loggedhour,
                                  });
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            }
                            value="hekko"
                            onChange={(e) => {
                              setObjBL({
                                ...objBilledHour,
                                billed_hour: e.target.value,
                              });
                              setBilledHour(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                        )}
                      </div>
                    </td>
                    <td
                      className="loggedHours_tdata loggedStatus"
                      onMouseEnter={() => {
                        setHovwr(i);
                      }}
                      onMouseLeave={() => {
                        setHovwr(null);
                      }}
                    >
                      {hovwr == i ? (
                        <RiDeleteBinLine className="deleteBtn" />
                      ) : (
                        <div
                          style={{
                            padding: "13px 4px",
                            background: "#d4fbd4",
                            color: "green",
                          }}
                          className="centerPadding"
                        >
                          {/* <span
                          className={`approved ${
                            newObj.status !== 1 ? "pending" : ""
                          }`}
                        ></span> */}
                          {/* {newObj.status == 1 ? "Approved" : "Pending"} */}
                          {element.status == 1 ? "Approved" : "Pending"}
                        </div>
                      )}
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
