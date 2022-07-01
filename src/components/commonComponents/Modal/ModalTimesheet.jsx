import React from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { setModalInActive } from "../../../redux/actions/modalAction";
import DummyDataTimesheetModal from './DummyDataModal';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalTimesheet.css";
import { getTimesheetResourceData } from '../../../redux/actions/timesheetResourceAction';

const ModalTimesheet = (props) => {
    const show = useSelector((state) => state.modalStates.modalState)
    const resourceData = useSelector((state) => state.detailedResource.TimesheetDetailedResourceData)
    const resourceName = useSelector((state) => state.detailedResource.resourceNameTimeLogged)
    const dispatch = useDispatch()
    const handleClose = () => { dispatch(setModalInActive()) };
    return (
        <>
            <Modal  {...props}
                className="top_modal "
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <div >
                    <Modal.Header className="heading_container1" closeButton>
                        <Modal.Title ><span className="title_name">Rahul Mehra {"- "}</span>  <span className="small_title"> Monthly Timesheet Stats</span> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body  >
                        <div className="modal_body_container" style={{ overflow:"auto"}}>
                            <div className="modal_body_time">
                                <span className="body_hour"> 1 Dec {" - "} 31 Dec 2021 {" - "} Worked Hours </span>
                            </div>
                            <div className="modal_body_table" style={{  }} >
                                <div className="body_table_col1">
                                    <div className="body_table_head1" ><span> {" "} </span></div>
                                    <div style={{ display: "flex", width: " 75%", justifyContent: 'space-around', marginLeft: "16px" }}>

                                        <div className="body_table_head2"> <span className='table_hours_loged'> Hours </span> </div>
                                        <div className="body_table_head3"> <span className='table_memo' > Task Memo</span></div>

                                    </div>
                                </div>

                                <div className="body_table_detail"   >
                                    {DummyDataTimesheetModal.map((ele, index) => {
                                        

                                        return (
                                            
                                            <>
                                                <div className="body_table_row_">
                                                    <div className="body_table_body1"> <span className="table_row1"> <span className='table_date'>{ele.date}</span> <span className='table_day'>{ele.day} </span>  </span></div>
                                                    <div className={index % 2 === 0 ? 'body2_table_odd' : 'body2_table_even'} >

                                                       
                                                        <div className="body_table_body2"><span className="table_row3"> {ele} </span></div>
                                                        <div className="body_table_body3"><span className="table_row4"> {ele}</span></div>

                                                    </div>
                                                </div>

                                            </>
                                        )
                                    })}
                                </div>
                                    <div className="footer_table_foot">
                                        <div className="body_table_body1"> <span className="table_row1"> Total hours </span></div>
                                        <div className="footer_table_table2"><span className="table_row1"> 40:32 </span></div>
                                        <div className="body_table_body3"><span className="table_row1"> {""}</span></div>
                                    </div>


                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}
export default ModalTimesheet