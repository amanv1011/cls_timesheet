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
import Input from "antd/lib/input";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  getResourcesHoursloggedData,
  getModalResourcesData,
  updateResourceName,
  updateBilledHour,
  deleteResource,
} from "../../../redux/actions/hoursloggedAction";

const monthFormat = "MMM YYYY";

const ProjectComponent = (props) => {
  const [show, setShow] = useState();
  const [currDate, setCurrDate] = useState(new Date());
  const [newObj, setObj] = useState({});
  const [rTableData, setRTData] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [newResId, setID] = useState();
  const [hovwr, setHovwr] = useState(null);
  const [selectRow, setSelectRow] = useState(null);
  const [billedHour, setBilledHour] = useState(0);
  const [objBilledHour, setObjBL] = useState({
    project_id: "",
    start_date: "",
    projectName: "",
    user_id: "",
    logged_time: "",
    billed_hours: "",
  });

  const WeeklyHoursLogged = "";

  const [checkBox, setCheckBox] = useState(false);
  const [selectedArray, setselectedArray] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const project_id = props.id;

  const dispatch = useDispatch();

  const hoursLoggedModuleData = useSelector(
    (state) => state.hoursLogged.hoursloggedData
  );

  const modalResourcesData = useSelector(
    (state) => state.hoursLogged.modalResData
  );

  const resHoursLoggedTableData = useSelector((state) => {
    return state.hoursLogged.resHoursLoggedData;
  });

  //runs first and to get existed data
  useEffect(() => {
    dispatch(
      getResourcesHoursloggedData(
        props.id,
        props.projectID,
        moment(currDate).format("YYYY-MM-DD")
      )
    );
  }, [currDate]);

  // for table data and runs after update
  useEffect(() => {
    if (resHoursLoggedTableData !== null) {
      setRTData(resHoursLoggedTableData);
      console.log("updating");
    }
    console.log(resHoursLoggedTableData, "111111111111");
  }, [resHoursLoggedTableData]);

  //this is for head data
  useEffect(() => {
    if (hoursLoggedModuleData !== null) {
      hoursLoggedModuleData.results.find((obj) => {
        if (obj.webtracker_project_id == props.id) {
          setObj(obj);
        }
      });
    }
  }, [hoursLoggedModuleData]);

  //for modal
  useEffect(() => {
    if (modalResourcesData !== null) {
      setModalData(modalResourcesData);
    }
  }, [modalResourcesData]);

  const handleShow = () => {
    setShow(true);
    dispatch(getModalResourcesData());
  };

  //to close
  const handleClose = () => {
    setShow(false);
  };

  const backToHoursLogged = () => {
    props.onClick(false);
  };

  const ResourcesHandler = (e) => {
    setID(e.target.value);
  };

  const updateResourcesHandler = async () => {
    const obj = {
      webID: props.id,
      proID: props.projectID,
      date: moment(currDate).format("YYYY-MM-DD"),
    };

    await dispatch(updateResourceName(newResId, project_id, obj)); //calling PUT method to update from Modal
    dispatch(
      getResourcesHoursloggedData(
        props.id,
        props.projectID,
        moment(currDate).format("YYYY-MM-DD")
      )
    );
    setShow(false);
    console.log(rTableData.result);
    console.log(props);
  };

  const handleBlur = (event) => {
    dispatch(updateBilledHour(objBilledHour)); //calling PUT method to update billed hour
  };

  const deleteHandler = async (element) => {
    await dispatch(deleteResource(element.user_id, project_id));
    dispatch(
      getResourcesHoursloggedData(
        props.id,
        props.projectID,
        moment(currDate).format("YYYY-MM-DD")
      )
    );
    props.onClick(true);
  };

  //for checkbox

  const handleAllCheck = (e) => {
    setIsChecked(!isChecked);
    if (e.target.checked) {
      let arr = [];
      rTableData.result.forEach((element) => {
        arr.push(element.user_id);
      });
      setselectedArray(arr);
    } else {
      setselectedArray([]);
    }
  };

  const handleOnCheckboxChange = (event) => {
    if (event.target.checked) {
      setselectedArray([...selectedArray, event.target.value]);
    } else {
      const filtered = selectedArray.filter(
        (item) => item !== event.target.value
      );
      setselectedArray(filtered);
    }
  };

  console.log(moment(currDate).format("YYYY-MM-DD"));

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
              <select id="" className="modalSelect" onChange={ResourcesHandler}>
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
            Project Owner: <span>{newObj.project_owner}</span>
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
            Hours Logged: <span>{newObj.hours_logged}</span>
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
                          setCurrDate(d);
                        }}
                        customInput={<CustomInput />}
                      />
                    </span>
                    <span className="tableDate">
                      Weekly Hours Logged{" "}
                      {moment(currDate).format("DD MMM YYYY")}
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
                  name="allCheck"
                  style={{ margin: "0px 15px" }}
                  checked={
                    rTableData.result &&
                    selectedArray.length !== rTableData.result.length
                      ? false
                      : true
                  }
                  onChange={handleAllCheck}
                  className="campaign-checkbox"
                />
                Resource
              </th>
              <th className="loggedHours_tdata">Hours logged</th>
              <th className="loggedHours_tdata">Biled hours</th>
              <th className="loggedHours_tdata" style={{ textAlign: "center" }}>
                Status
              </th>
            </tr>
            {/* </thead> */}
            <tbody style={{ height: "100px", overflowY: "auto" }}>
              {rTableData.result
                ? rTableData.result.map((element, i) => {
                    return (
                      <tr className="projectCompTr" key={i}>
                        <td
                          className="loggedHours_tdata "
                          style={{ fontWeight: "600" }}
                        >
                          <input
                            type="checkbox"
                            name={element.member_name}
                            value={element.user_id}
                            checked={
                              selectedArray &&
                              selectedArray.filter(
                                (it) => it === element.user_id
                              ).length > 0
                                ? true
                                : false
                            }
                            onChange={handleOnCheckboxChange}
                            style={{ margin: "0px 15px" }}
                          />
                          {element.member_name}{" "}
                          {element.status == 0 ? (
                            <span className="resourceSpan">NEW</span>
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="loggedHours_tdata">
                          <div className="centerPadding">
                            {element.logged_time
                              ? `${Math.floor(element.logged_time / 60)}h`
                              : "0h"}
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
                                    }}
                                    style={{ cursor: "pointer" }}
                                  />
                                }
                                value={billedHour}
                                // value={billedHour !== 0 ? `${billedHour}hr` : 0}
                                onChange={(e) => {
                                  setObjBL({
                                    ...objBilledHour,
                                    project_id: props.projectID,
                                    start_date:
                                      moment(currDate).format("YYYY-MM-DD"),
                                    projectName: props.projectName,
                                    user_id: element.user_id,
                                    logged_time: element.logged_time,
                                    billed_hours: e.target.value,
                                  });
                                  setBilledHour(e.target.value);
                                }}
                                onBlur={handleBlur}
                              />
                            ) : (
                              // **************** Edit False ********************
                              <Input
                                readOnly
                                // disabled={true}
                                className="loggedhourInput"
                                suffix={
                                  <AiOutlineEdit
                                    onClick={() => {
                                      // setDisable(false);
                                      setSelectRow(i);
                                    }}
                                    style={{ cursor: "pointer" }}
                                  />
                                }
                                // value={element.billed_hours}
                                value={
                                  element.billed_hours !== null
                                    ? `${element.billed_hours}hr`
                                    : 0
                                }
                                onChange={(e) => {
                                  setObjBL({
                                    ...objBilledHour,
                                    project_id: props.projectID,
                                    start_date:
                                      moment(currDate).format("YYYY-MM-DD"),
                                    projectName: props.projectName,
                                    user_id: element.user_id,
                                    logged_time: element.logged_time,
                                    billed_hours: e.target.value,
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
                          onClick={() => deleteHandler(element)}
                        >
                          {hovwr == i ? (
                            <RiDeleteBinLine className="deleteBtn" />
                          ) : (
                            <div
                              // style={{
                              //   padding: "13px 4px",
                              //   background: "#d4fbd4",
                              //   color: "green",
                              // }}
                              // className="centerPadding"
                              className={`centerPadding  ${
                                element.status == 1 ? "green" : "orange"
                              }`}
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
                  })
                : ""}
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
                  {selectedArray.length > 0 ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        padding: "25px",
                      }}
                      className="lastBtn"
                    >
                      <button
                        onClick={() => {
                          setselectedArray([]);
                        }}
                      >
                        Cancel
                      </button>
                      <button>Approve</button>
                    </div>
                  ) : null}
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
