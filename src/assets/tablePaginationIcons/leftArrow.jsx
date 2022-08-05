import React from "react";

const LeftArrow = (props) => {
  return (
    <>
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="left-circle"
        width="25px"
        height="25px"
        fill={props.btnColor}
        aria-hidden="true"
      >
        <path d="M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"></path>
        
      </svg>
    </>
  );
};

export default LeftArrow;
