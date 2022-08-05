import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./tablePagination.css";
import LeftArrow from "../../../assets/tablePaginationIcons/leftArrow";
import RightArrow from "../../../assets/tablePaginationIcons/rightArrow";
import { setDataPerPage } from "../../../redux/actions/paginationActions";
import { setActivePage } from "../../../redux/actions/paginationActions";
import { setTotalCount } from "../../../redux/actions/paginationActions";

const TablePagination = (props) => {
  const dataLength = props.dataLength;
  const dataLimit = props.dataLimit;
  const pageLimit = props.pageLimit;
  

  

  const dispatch = useDispatch();
  const pages = Math.round(dataLength / dataLimit) + 1
  const [currentPage, setCurrentPage] = useState(1);
  const activePage = useSelector((state) => state.paginationStates.activePage);


  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    dispatch(setActivePage(currentPage + 1))
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    dispatch(setActivePage(currentPage - 1))
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    dispatch(setActivePage(pageNumber))
  }

  const getPaginationGroup = () => {
    let superCurrentPage = 0;
    if(props.localCurrentPage !== undefined){
      superCurrentPage = props.localCurrentPage
    } else{superCurrentPage = currentPage} 
    let start = Math.floor((superCurrentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    setCurrentPage(activePage);
  }, [activePage]);
  

  useEffect(() => {
    dispatch(setDataPerPage(dataLimit))
  }, [dataLimit])
  useEffect(() => {
    dispatch(setTotalCount(dataLength))
  },[setTotalCount])

  return (
    <>
    {console.log(props)}
    {console.log(pages)}
    {console.log(dataLength)}
      <div style={props.localPaddingBottom !== undefined ? {paddingBottom: props.localPaddingBottom} : null} className="pagination-container">
        <div className="pagination-container-grid">
          <div className="pagination-prev-button">
            <button
              className="navigation-btn"
              onClick={props.localGoToPrevPage !== undefined ? props.localGoToPrevPage : goToPreviousPage}
              disabled={props.localCurrentPage !== undefined? props.localCurrentPage === 1 ? true : false :currentPage === 1 ? true : false}
            >
              <LeftArrow
                btnColor={props.localCurrentPage !== undefined ? props.localCurrentPage === 1 ? "gray" : "#003AD2":currentPage === 1 ? "gray" : "#003AD2"}
              />
            </button>
          </div>
          <div className="pagination-content">
            
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={props.localChangePage !== undefined ?props.localChangePage:changePage}
                style={
                  item > pages
                    ? {
                        
                        border: 'none',
                        color: "gray",
                        backgroundColor: "white",
                        pointerEvents: "auto",
                        cursor: "not-allowed",
                      }
                    : {}
                }
                className={props.localCurrentPage !==undefined ?props.localCurrentPage === item ? "pagination-btn-active" :"pagination-btn":currentPage === item ? "pagination-btn-active" :"pagination-btn"}
                disabled={item > pages ? true : false}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="pagination-next-button">
            <button
              className="navigation-btn next-btn"
              onClick={props.localGoToNextPage !== undefined ? props.localGoToNextPage : goToNextPage}
              disabled={props.localCurrentPage !== undefined ? props.localCurrentPage  >= pages ? true : false : currentPage === pages ? true : false}
            >
              <RightArrow
                btnColor={props.currentPage !== undefined?props.currentPage === pages|| pages < 1 ? "gray" : "#003AD2":currentPage === pages|| pages < 1 ? "gray" : "#003AD2"}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePagination;
