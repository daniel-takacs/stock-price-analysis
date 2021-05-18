import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Header({ startDate, setStartDate, endDate, setEndDate }) {

    return (
        <>
          <h3>Select a date range</h3>
          <DatePicker
            minDate={new Date("01-21-2020")}
            maxDate={new Date("01-20-2021")}
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            minDate={new Date("01-21-2020")}
            maxDate={new Date("01-20-2021")}
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </>
    )
}

export default Header
