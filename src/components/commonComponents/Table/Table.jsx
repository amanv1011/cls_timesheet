import React from "react";
import "./table.css";
import ProjectHealth from "./projectHealth";
import MembersCircles from "./membersCircles";
import Status from "./status";
import dummyData from "./dummyData";

const Table = (props) => {
  return (
    <>
      <div>
        <p className="table-header">Active Projects</p>
      </div>
      <div className="table-scroll">
        <table className="table-main">
          <thead className="table-head">
            <tr className="table-header-row">
              {props.tableCols.includes("Projects") ? <th style={{ paddingLeft: "20px" }} className="table-header-row-data">Projects</th> : null}
              {props.tableCols.includes("ProjectOwner") ? <th className="table-header-row-data">Projects Owner</th> : null}
              {props.tableCols.includes("ProjectCode") ? <th className="table-header-row-data">Project Code</th> : null}
             {props.tableCols.includes("AccountCode") ? <th className="table-header-row-data">Account Code</th> : null}
             {props.tableCols.includes("EngagementType") ? <th className="table-header-row-data">Engagement Type</th> : null}
             {props.tableCols.includes("ProjectHealth") ? <th className="table-header-row-data">Project Health</th> : null}
              {props.tableCols.includes("HoursLogged") ? <th className="table-header-row-data">Hours Logged</th> : null}
              {props.tableCols.includes("BilledHours") ? <th className="table-header-row-data">Billed Hours</th> : null}
              {props.tableCols.includes("Status") ? <th className="table-header-row-data">Status </th> : null}
              {props.tableCols.includes("Members") ? <th className="table-header-row-data">Members</th> : null}
            </tr>
          </thead>
          <tbody className="table-body">
            {dummyData.map((ele) => {
              return (
                <>
                  <tr className="table-body-row">
                    {props.tableCols.includes("Projects") ? <td style={{ paddingLeft: "20px" }} className="table-body-row-data table-body-col-first">{ele.Projects}</td> : null}
                    {props.tableCols.includes("ProjectOwner") ? <td className="table-body-row-data">{ele.ProjectOwner}</td> : null}
                    {props.tableCols.includes("ProjectCode") ? <td className="table-body-row-data">{ele.ProjectCode}</td> : null}
                    {props.tableCols.includes("AccountCode") ? <td className="table-body-row-data">{ele.AccountCode}</td> : null}
                    {props.tableCols.includes("EngagementType") ? <td className="table-body-row-data">{" "}{ele.EngagementType}</td> : null}
                    {props.tableCols.includes("ProjectHealth") ? <td className="table-body-row-data"><ProjectHealth status={ele.ProjectHealth} /></td> : null}
                    {props.tableCols.includes("HoursLogged") ? <td className="table-body-row-data"><div className="table-body-row-data-box">{ele.HoursLogged}</div></td> : null}
                    {props.tableCols.includes("BilledHours") ? <td className="table-body-row-data">{ele.BilledHours}</td> : null}
                    {props.tableCols.includes("Status") ? <td className="table-body-row-data"><Status status={ele.Status} /></td> : null}
                    {props.tableCols.includes("Members") ? <td className="table-body-row-data"><MembersCircles /></td> : null}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
