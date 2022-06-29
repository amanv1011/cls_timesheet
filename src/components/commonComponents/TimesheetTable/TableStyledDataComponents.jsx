import React from 'react';
import MembersCircles from "./TableStyledComponents/membersCircles"
import ProjectHealth from "./TableStyledComponents/projectHealth"
import Status from "./TableStyledComponents/status"
import Hours from "./TableStyledComponents/hours"

const TableStyledDataComponents = (props) => {
    return(
        <>
        {props.styledComponent === "Status" ? <Status status={props.styledComponentData}/> : null}
        {props.styledComponent === "ProjectHealth" ? <ProjectHealth status={props.styledComponentData}/> : null}
        {props.styledComponent === "Members"? <MembersCircles/> : null}
        {props.styledComponent === "HoursLogged" || props.styledComponent === "BilledHours" ? <Hours hours={props.styledComponentData}/> : null}
        </>
    )
}

export default TableStyledDataComponents