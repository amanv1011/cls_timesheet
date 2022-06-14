import React from "react";
import gridColumns from "./gridColumns";
import { useSelector } from "react-redux";
import TableHorizontalLine from "./tableHorizontalLine";
import TableStyledDataComponents from "./TableStyledDataComponents";
import TablePagination from "../../commonComponents/TablePagination/tablePagination";
import "./timesheetTable.css";

const TempTable = (props) => {
  const girdColumnsSize = gridColumns(props.tableCols.length);
  const tableColumns = props.tableCols;
  const columnStyleHead = {
    display: "grid",
    gridTemplateColumns: girdColumnsSize,
    borderRadius: "15px",
  };
  const columnStyleBody = {
    display: "grid",
    gridTemplateColumns: girdColumnsSize,
  };
  const tableDataComponents = [
    "ProjectHealth",
    "HoursLogged",
    "Members",
    "BilledHours",
    "Status",
  ];

  const currentPage = useSelector((state) => state.paginationStates.activePage);
  const dataPerPage = useSelector(
    (state) => state.paginationStates.dataPerPage
  );

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = props.tableData.slice(indexOfFirstData, indexOfLastData);

  return (
    <>
      <div className="timesheet-table-container">
        <div style={columnStyleHead} className="timesheet-table-head">
          {tableColumns.map((element, index) => {
            return (
              <>
                <div
                  style={index === 0 ? { paddingLeft: "20px" } : null}
                  className="table-head-data"
                >
                  {element.columnName}
                </div>
              </>
            );
          })}
        </div>
        <TableHorizontalLine />

        <div className="timesheet-table-body">
          {currentData.map((element) => {
            return (
              <>
                <div
                  style={columnStyleBody}
                  className="timesheet-table-body-row"
                >
                  {Object.entries(element).map((ele, index) => {
                    if(index > 0) {
                      
                      return (
                        <>
                          {tableDataComponents.includes(ele[0]) ? (
                            <div
                              id={element[tableColumns[index - 1].columnKeyValue]}
                              onClick={tableColumns[index - 1].keyFunction}
                              style={index === 1 ? { paddingLeft: "20px" } : null}
                              className="table-body-data"
                            >
                              <TableStyledDataComponents
                                styledComponent={ele[0]}
                                styledComponentData={ele[1]}
                              />
                            </div>
                          ) : (
                            <div
                              id={element[tableColumns[index -1 ].columnKeyValue]}
                              onClick={tableColumns[index - 1].keyFunction}
                              style={index === 1 ? { paddingLeft: "20px" } : null}
                              className={tableColumns[index - 1].keyFunction === undefined ? "table-body-data" : "table-body-data-clickable"}
                            >
                              {ele[1]}
                            </div>
                          )}
                        </>
                      );

                    }

                  })}
                </div>
                <TableHorizontalLine />
              </>
            );
          })}
        </div>
      </div>

      <TablePagination
        dataLength={props.tableData.length}
        dataLimit={10}
        pageLimit={3}
      />
    </>
  );
};

export default TempTable;
