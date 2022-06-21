import React from "react";
import { DatePicker } from "antd";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiCalendar2Line } from "react-icons/ri";
import { useRef } from "react";
import moment from "moment";
import "./DateFilter.css";
const monthFormat = "MMM YYYY";
const DateFilter = (props) => {
  return (
    <>
      <DatePicker
        className="dashboard-datepicker"
        picker="month"
        suffixIcon={
          <span className="styleDateIcons">
            <RiCalendar2Line
              style={{
                right: "8.33%",
                top: "4.17%",
                bottom: "12.5%",
              }}
            />
            <IoIosArrowDown />
          </span>
        }
        format={monthFormat}
      />
    </>
  );
};

export default DateFilter;
