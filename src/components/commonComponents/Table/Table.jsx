import React from "react";
import "./table.css";
import TableStyledDataComponents from "./TableStyledDataComponents";
import { useSelector } from "react-redux";

const Table = (props) => {
  const showResourcesHandler = (props) => {
    console.log(props.showResources);
    props.showResources = true;
    console.log(props.showResources);
  };
  const currentPage = useSelector((state) => state.paginationStates.activePage);
  const dataPerPage = useSelector(
    (state) => state.paginationStates.dataPerPage
  );

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = props.tableData.slice(indexOfFirstData, indexOfLastData);

  const tableDataComponents = [
    "ProjectHealth",
    "HoursLogged",
    "Members",
    "BilledHours",
    "Status",
  ];

  return (
    <>
      <div
        className={
          props.tableHeading === ""
            ? "table-heading-box-another-page"
            : "table-heading-box"
        }
      >
        <p
          className={
            props.tableHeading === ""
              ? "table-heading-another-page"
              : "table-heading"
          }
        >
          {props.tableHeading === "" ? null : props.tableHeading}
        </p>
      </div>
      <div className="table-scroll">
        <table className="table-main">
          <thead className="table-head">
            <tr className="table-header-row">
              {props.tableCols.map((ele, index) => {
                return (
                  <>
                    <th
                      style={index === 0 ? { paddingLeft: "20px" } : null}
                      className="table-header-row-data"
                    >
                      {ele}
                    </th>
                  </>
                );
              })}
            </tr>
          </thead>

          <tbody className="table-body">
            {currentData.map((elements) => {
              return (
                <>
                  <tr className="table-body-row">
                    {Object.entries(elements).map((ele, index) => {
                      // console.log(index);
                      return (
                        <>
                          {tableDataComponents.includes(ele[0]) ? (
                            <td
                              className={
                                index === 0
                                  ? "table-body-row-data table-body-col-first"
                                  : "table-body-row-data"
                              }
                            >
                              <TableStyledDataComponents
                                styledComponent={ele[0]}
                                styledComponentData={ele[1]}
                              />
                            </td>
                          ) : (
                            <td
                              style={
                                index === 0 ? { paddingLeft: "20px" } : null
                              }
                              className={
                                index === 0
                                  ? "table-body-row-data table-body-col-first"
                                  : "table-body-row-data"
                              }
                            >
                              {ele[1]}
                            </td>
                          )}
                        </>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div></div>
    </>
  );
};

export default Table;
