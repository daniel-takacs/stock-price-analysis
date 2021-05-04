import React from 'react'

function Header({ start, setStart, end, setEnd }) {
   
    const startDateHandle = (e)=> {
        setStart((e.target.value).split('-').reverse().join("/"))
    }
    console.log(start)
    const endDateHandle = (e)=> {
        setEnd((e.target.value).split('-').reverse().join("/"))
    }
    console.log(end)

    return (
        <div>
            <input type="date" value={start} onChange={startDateHandle}/>
            <input type="date" value={end} onChange={endDateHandle}/>
        </div>
    )
}

export default Header
