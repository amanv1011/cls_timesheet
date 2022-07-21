import React from "react";

const RightArrow = (props) => {
  return (
    <>
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="right-circle"
        width="25px"
        height="25px"
        fill={props.btnColor}
        aria-hidden="true"
      >
        <path d="M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"></path>
        
      </svg>
    </>
  );
};

export default RightArrow;
