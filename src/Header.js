import React from 'react'

function Header({ start, setStart, end, setEnd }) {
   
    const startDateHandle = (e)=> {
        setStart(format(e.target.value))
    }
    console.log(start)
    const endDateHandle = (e)=> {
        setEnd(format(e.target.value))
    }
    console.log(end)

    //date input converted a suitable format
    const format = (v)=> {
        let tmp = v.split('-').reverse()
        //console.log(tmp)
        let tmp2 = ([tmp[0],tmp[1],tmp[2]] = [tmp[1],tmp[0],tmp[2]]).join("/")
        //console.log(tmp2)
        return tmp2
    }

    return (
        <div>
            <h2>Select date</h2>
            <label>start date:</label>
            <input type="date" 
                   min="2020-01-21"
                   max="2021-01-21"
                   value={start} 
                   onChange={startDateHandle}/>
            <label>end date:</label>
            <input type="date" 
                   min="2020-01-21"
                   max="2021-01-21"
                   value={end} 
                   onChange={endDateHandle}/>
        </div>
    )
}

export default Header
