import React from "react";
import DashboardTemplate from "../../layouts/template";
import TimesheetFilters from "../../commonComponents/timesheetFilters/timesheetFilters";
import Table from "../../commonComponents/Table/Table";
import BackArrow from "../../../assets/images/icons/BackArrow";
import './TimesheetModule.css';
import DateFilter from "../../commonComponents/DateFilterComponent/DateFilter";
import { Button, Modal } from 'react-bootstrap'
import { useState } from "react";




const Timesheet = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const TimesheetTable = ['Projects', 'ProjectOwner', 'ProjectCode', 'AccountCode', 'EngagementType', 'HoursLogged', 'BilledHours']

  return (
    <>



      <Modal  {...props}
        dialogClassName="top_modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <div style={{ height: "72vh", overflow:"auto"}}>


          <Modal.Header className="heading_container" closeButton>
            <Modal.Title ><span className="title_name">Rahul Mehra {"- "}</span>  <span className="small_title"> Monthly Timesheet Stats</span> </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <div className="modal_body_container">
              <div className="modal_body_time">
                <span className="body_hour"> 1 Dec {" - "} 31 Dec 2021 {" - "} Worked Hours </span>

              </div>

              <div className="modal_body_table">
                <div className="body_table_col1">
                  <div className="body_table_head1" ><span> {" "} </span></div>
                  <div className="body_table_head2"> <span > Hours </span> </div>
                  <div className="body_table_head3"> <span > Task Memo</span></div>


                </div>
                <hr className="line_break" />
                
                
                <div className="body_table_detail"   >


                  <div className="body_table_row">
                    <div className="body_table_body1"> <span className="table_row1"> 2 dec, Thursday </span></div>
                    <div className="body_table_body2"><span className="table_row1"> 0:40 </span></div>
                    <div className="body_table_body3"><span className="table_row1"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                  </div>
                  <hr className="line_break" />

                  <div className="body_table_row">
                    <div className="body_table_body1"> <span className="table_row1"> 2 dec, Thursday </span></div>
                    <div className="body_table_body2"><span className="table_row1"> 0:40 </span></div>
                    <div className="body_table_body3"><span className="table_row1"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                  </div>
                  <hr className="line_break" />

                  <div className="body_table_row">
                    <div className="body_table_body1"> <span className="table_row1"> 2 dec, Thursday </span></div>
                    <div className="body_table_body2"><span className="table_row1"> 0:40 </span></div>
                    <div className="body_table_body3"><span className="table_row1"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                  </div>
                  <hr className="line_break" />

                  <div className="body_table_row">
                    <div className="body_table_body1"> <span className="table_row1"> 2 dec, Thursday </span></div>
                    <div className="body_table_body2"><span className="table_row1"> 0:40 </span></div>
                    <div className="body_table_body3"><span className="table_row1"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                  </div>
                  <hr className="line_break" />

                  <div className="body_table_row">
                    <div className="body_table_body1"> <span className="table_row1"> 2 dec, Thursday </span></div>
                    <div className="body_table_body2"><span className="table_row1"> 0:40 </span></div>
                    <div className="body_table_body3"><span className="table_row1"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                  </div>
                  <hr className="line_break" />

                  <div className="body_table_row">
                    <div className="body_table_body1"> <span className="table_row1"> 2 dec, Thursday </span></div>
                    <div className="body_table_body2"><span className="table_row1"> 0:40 </span></div>
                    <div className="body_table_body3"><span className="table_row1"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                  </div>
                  <hr className="line_break" />

                  <div className="body_table_row">
                    <div className="body_table_body1"> <span className="table_row1"> 2 dec, Thursday </span></div>
                    <div className="body_table_body2"><span className="table_row1"> 0:40 </span></div>
                    <div className="body_table_body3"><span className="table_row1"> lorem gdfts dus xdcu wffeuiwbf lorem gdfts dus xdcu wffeuiwbf</span></div>

                  </div>

                </div>

              </div>

            </div>


            <hr className="line_break" />

            <div className="footer_table">
              <div className="body_table_body1"> <span className="table_row1"> Total hours </span></div>
              <div className="body_table_body2"><span className="table_row1"> 40:32 </span></div>
              <div className="body_table_body3"><span className="table_row1"> {""}</span></div>

            </div>
          </Modal.Body>

        </div>
      </Modal>




      <div className="timesheet-container">
        <div className="timesheet-back-button">
          <p className="back-to-dashboard"> <span className="back-arrow"> <BackArrow /> </span> Back Dashboard</p>

        </div>
        <div className="timesheet-container-heading">
          <div className="timesheet-heading-title">
            <h3 > Timesheet </h3>

          </div>
          <div className="timesheet-heading-date">
            <DateFilter />

          </div>

        </div>
        <TimesheetFilters />
        <div>
          
          <button onClick={handleShow}> modal </button>

        </div>

        <div className="table-container">

          <Table tableCols={TimesheetTable} />

        </div>

      </div>
    </>
  )
}



export default DashboardTemplate(
  Timesheet
);
