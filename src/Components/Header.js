import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Header({ startDate, setStartDate, endDate, setEndDate }) {
   
    /*const startDateHandle = (e)=> {
        setStart(convertDate(e.target.value))
    }
    console.log(start)
    const endDateHandle = (e)=> {
        setEnd(convertDate(e.target.value))
    }
    console.log(end)

    /*date input converted a suitable format
    const format = (v)=> {
        let tmp = v.split('-').reverse()
        //console.log(tmp)
        let tmp2 = ([tmp[0],tmp[1],tmp[2]] = [tmp[1],tmp[0],tmp[2]]).join("/")
        //console.log(tmp2)
        return tmp2
    }*/

    return (
        <>
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
