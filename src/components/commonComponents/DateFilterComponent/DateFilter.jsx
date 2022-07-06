import React from "react";
import { DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { RiCalendar2Line } from "react-icons/ri";
import { setFilterDate } from "../../../redux/actions/dateFilterActions";
import moment from "moment";
import "./DateFilter.css";
const monthFormat = "MMM YYYY";
const DateFilter = (props) => {
  const dispatch = useDispatch();

  const handleChange = (date, dateString) => {
    var dateDashboard = moment(date);
    var monthDashboard = parseInt(dateDashboard.month());
    var yearDashboard = dateDashboard.year();
    const lastDateMonth = moment(
      new Date(yearDashboard, monthDashboard + 1, 0)
    ).format("DD");
    if (monthDashboard < 10) {
      const startDate = `${yearDashboard}-0${monthDashboard + 1}-01`;
      const endDate = `${yearDashboard}-0${monthDashboard + 1}-${lastDateMonth}`;
      dispatch(setFilterDate(startDate, endDate));
    } else {
      const startDate = `${yearDashboard}-${monthDashboard + 1}-01`;
      const endDate = `${yearDashboard}-${monthDashboard + 1}-${lastDateMonth}`;
      dispatch(setFilterDate(startDate, endDate));
    }
  };
  return (
    <>
      <DatePicker
        className="dashboard-datepicker"
        onChange={handleChange}
        picker="month"
        suffixIcon={
          <span style={{display:"flex"}} className="styleDateIcons">
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
