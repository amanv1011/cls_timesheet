import React from "react";
const ProjectHealth = (props) => {
  return (
    <>
      {props.status === 1 ? (
        <>
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "3px",
              background: "linear-gradient(180deg, #24D6A5 0%, #17C293 100%)",
              display: "inline-flex",
              marginRight: "10px",
            }}
          ></span>
          <span style={{fontSize: "14px"}}>Good</span>
        </>
      ) : props.status === 2 ? (
        <>
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "3px",
              background: "linear-gradient(180deg, #FFDA70 0%, #FFBD00 100%)",
              display: "inline-flex",
              marginRight: "10px",
            }}
          ></span>
          <span style={{fontSize: "14px"}}>Average</span>
        </>
      ) : (
        <>
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "3px",
              background: "linear-gradient(180deg, #FF5B5D 0%, #F2383A 100%)",
              display: "inline-flex",
              marginRight: "10px",
            }}
          ></span>
          <span style={{fontSize: "14px"}}>Bad</span>
        </>
      )}
    </>
  );
};

export default ProjectHealth;
