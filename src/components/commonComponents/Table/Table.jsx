import React from "react";
import "./table.css";
import ProjectHealth from "./projectHealth";
import MembersCircles from "./membersCircles";
import Status from "./status";
import dummyData from "./dummyData";

const Table = () => {
  const conditionsColOne =
    window.location.pathname === "/dashboard" ||
    window.location.pathname === "/hours-logged";
  const conditionsColTwo = window.location.pathname === "/dashboard";
  const conditionsColThree = window.location.pathname === "/hours-logged";

  return (
    <>
      <div>
        <p className="table-header">Active Projects</p>
      </div>
      <div className="table-scroll">
        <table className="table-main">
          <thead className="table-head">
            <tr className="table-header-row">
              {conditionsColOne ? (
                <>
                  {" "}
                  <th
                    style={{ paddingLeft: "20px" }}
                    className="table-header-row-data"
                  >
                    Projects
                  </th>
                </>
              ) : null}

              {conditionsColOne ? (
                <>
                  <th className="table-header-row-data">Projects Owner</th>
                </>
              ) : null}

              {conditionsColThree ? (
                <>
                  <th className="table-header-row-data">Project Code</th>
                  <th className="table-header-row-data">Account Code</th>
                </>
              ) : null}

              {conditionsColOne ? (
                <>
                  <th className="table-header-row-data">Engagement Type</th>
                </>
              ) : null}

              {conditionsColTwo ? (
                <>
                  <th className="table-header-row-data">Project Health</th>
                </>
              ) : null}
              {conditionsColOne ? (
                <>
                  <th className="table-header-row-data">Hours Logged</th>
                </>
              ) : null}

              {conditionsColThree ? (
                <>
                  <th className="table-header-row-data">Billed Hours</th>
                  <th className="table-header-row-data">Status </th>
                </>
              ) : null}

              {conditionsColTwo ? (
                <>
                  <th className="table-header-row-data">Members</th>
                </>
              ) : null}
            </tr>
          </thead>
          <tbody className="table-body">
            {dummyData.map((ele) => {
              return (
                <>
                  <tr className="table-body-row">
                    {conditionsColOne ? (
                      <>
                        <td
                          style={{ paddingLeft: "20px" }}
                          className="table-body-row-data table-body-col-first"
                        >
                          {ele.Projects}
                        </td>
                      </>
                    ) : null}
                    {conditionsColOne ? (
                      <>
                        <td className="table-body-row-data">
                          {ele.ProjectOwner}
                        </td>
                      </>
                    ) : null}
                    {conditionsColThree ? (
                      <>
                        <td className="table-body-row-data">
                          {ele.ProjectCode}
                        </td>
                        <td className="table-body-row-data">
                          {ele.AccountCode}
                        </td>
                      </>
                    ) : null}
                    {conditionsColOne ? (
                      <>
                        <td className="table-body-row-data">
                          {ele.EngagementType}
                        </td>
                      </>
                    ) : null}
                    {conditionsColTwo ? (
                      <>
                        <td className="table-body-row-data">
                          <ProjectHealth status={ele.ProjectHealth} />
                        </td>
                      </>
                    ) : null}
                    {conditionsColOne ? (
                      <>
                        <td className="table-body-row-data">
                          <div className="table-body-row-data-box">
                            {ele.HoursLogged}
                          </div>
                        </td>
                      </>
                    ) : null}
                    {conditionsColThree ? (
                      <>
                        <td className="table-body-row-data">
                          {ele.BilledHours}
                        </td>
                        <td className="table-body-row-data">
                          <Status status={ele.Status} />
                        </td>
                      </>
                    ) : null}
                    {conditionsColTwo ? (
                      <>
                        <td className="table-body-row-data">
                          <MembersCircles />
                        </td>
                      </>
                    ) : null}
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
