import React from 'react'
import { useState } from 'react';
import {  Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { setModalInActive } from "../../../redux/actions/modalAction";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ModalTimesheet.css";

const ModalTimesheet = (props) => {

    const show = useSelector((state) => state.modalStates.modalState)
    const dispatch = useDispatch()
    const handleClose = () => { dispatch(setModalInActive())};

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
                <div style={{ height: "72vh", overflow: "auto" }}>


                    <Modal.Header className="heading_container1" closeButton>
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
                                    <div className="body_table_head2"> <span className='table_hours_loged'> Hours </span> </div>
                                    <div className="body_table_head3"> <span className='table_memo' > Task Memo</span></div>


                                </div>
                                <hr className="line_break" />


                                <div className="body_table_detail"   >


                                    <div className="body_table_row">
                                        <div className="body_table_body1"> <span className="table_row1"> <span className='table_date'>2 dec,</span> <span className='table_day'>Thursday </span>  </span></div>
                                        <div className="body_table_body2"><span className="table_row3"> 0:40 </span></div>
                                        <div className="body_table_body3"><span className="table_row4"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                                    </div>
                                    <hr className="line_break" />

                                    <div className="body_table_row">
                                        <div className="body_table_body1"> <span className="table_row1"> <span className='table_date'>2 dec,</span> Thursday </span></div>
                                        <div className="body_table_body2"><span className="table_row3"> 0:40 </span></div>
                                        <div className="body_table_body3"><span className="table_row4"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                                    </div>
                                    <hr className="line_break" />

                                    <div className="body_table_row">
                                        <div className="body_table_body1"> <span className="table_row1"> <span className='table_date'>2 dec,</span> Thursday </span></div>
                                        <div className="body_table_body2"><span className="table_row3"> 0:40 </span></div>
                                        <div className="body_table_body3"><span className="table_row4"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                                    </div>
                                    <hr className="line_break" />

                                    <div className="body_table_row">
                                        <div className="body_table_body1"> <span className="table_row1"> <span className='table_date'>2 dec,</span> Thursday </span></div>
                                        <div className="body_table_body2"><span className="table_row3"> 0:40 </span></div>
                                        <div className="body_table_body3"><span className="table_row4"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                                    </div>
                                    <hr className="line_break" />

                                    <div className="body_table_row">
                                        <div className="body_table_body1"> <span className="table_row1"> <span className='table_date'>2 dec,</span> Thursday </span></div>
                                        <div className="body_table_body2"><span className="table_row3"> 0:40 </span></div>
                                        <div className="body_table_body3"><span className="table_row4"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                                    </div>
                                    <hr className="line_break" />

                                    <div className="body_table_row">
                                        <div className="body_table_body1"> <span className="table_row1"> <span className='table_date'>2 dec,</span> Thursday </span></div>
                                        <div className="body_table_body2"><span className="table_row3"> 0:40 </span></div>
                                        <div className="body_table_body3"><span className="table_row4"> lorem gdfts dus xdcu wffeuiwbf</span></div>

                                    </div>
                                    <hr className="line_break" />

                                    <div className="body_table_row">
                                        <div className="body_table_body1"> <span className="table_row1"> <span className='table_date'>2 dec,</span> Thursday </span></div>
                                        <div className="body_table_body2"><span className="table_row3"> 0:40 </span></div>
                                        <div className="body_table_body3"><span className="table_row4"> lorem gdfts dus xdcu wffeuiwbf lorem gdfts dus xdcu wffeuiwbf</span></div>

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

        </>
    )
}

export default ModalTimesheet