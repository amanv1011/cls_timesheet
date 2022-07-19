import React from "react";
import "./memberCircles.css"

const MembersCircles = (props) => {
    console.log(props.members)

    return(
        <>
        <div className="member-circles-container">
            <div className="circle circle-one">AB</div> 
            <div className="circle circle-two">CD</div>
            <div className="circle circle-three">EF</div>
            <div className="circle circle-four">GH</div>
            <div className="circle circle-five">IJ</div>
        </div>
        </>
    )
}

export default MembersCircles