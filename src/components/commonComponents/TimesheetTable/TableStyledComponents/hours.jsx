import React from "react";
import "./memberCircles.css";

const Hours = (props) => {
  return (
    <>
      <div className="table-body-row-data-box">{props.hours === null ? 0 : props.hours}</div>
    </>
  );
};

export default Hours;
