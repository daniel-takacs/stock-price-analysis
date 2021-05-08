import React, {useState} from 'react'
import { stockData } from './data'

function Stock() {

    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    const dateHandle = (e)=> {
        setStart(e.target.value)
    }
    
    return (
        <div>
            <input type="date" value={data.Date}onChange={dateHandle}/>
    {stockData.map((data, id) => {
        return(
            <>
        <div key={id}>
          <li>{data.Date}</li>
        </div>
      </>
      )
    })}
        </div>
    )
}

export default Stock
