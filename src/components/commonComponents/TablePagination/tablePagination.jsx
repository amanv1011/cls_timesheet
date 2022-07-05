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
  const pages = Math.round(dataLength / dataLimit)
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
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
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
      <div className="pagination-container">
        <div className="pagination-container-grid">
          <div className="pagination-prev-button">
            <button
              className="navigation-btn"
              onClick={goToPreviousPage}
              disabled={currentPage === 1 ? true : false}
            >
              <LeftArrow
                btnColor={currentPage === 1 ? "gray" : "#003AD2"}
              />
            </button>
          </div>
          <div className="pagination-content">
            
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                style={
                  item > pages
                    ? {
                        border: "2px solid gray",
                        color: "gray",
                        backgroundColor: "white",
                        pointerEvents: "auto",
                        cursor: "not-allowed",
                      }
                    : {}
                }
                className={currentPage === item ? "pagination-btn-active" :"pagination-btn"}
                disabled={item > pages ? true : false}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="pagination-next-button">
            <button
              className="navigation-btn next-btn"
              onClick={goToNextPage}
              disabled={currentPage === pages ? true : false}
            >
              <RightArrow
                btnColor={currentPage === pages|| pages < 1 ? "gray" : "#003AD2"}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePagination;
