import React from 'react'

function Header() {
    const [start, setStart] = React.useState("")
    const [end, setEnd] = React.useState("")

    const startDateHandle = (e)=> {
        setStart((e.target.value).split('/').reverse().join(""))
    }
    console.log(start)
    const endDateHandle = (e)=> {
        setEnd(e.target.value)
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
