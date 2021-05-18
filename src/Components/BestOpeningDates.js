import React from 'react'

function BestOpeningDates({ newObj }) {

    console.log('the best', newObj)
    return (
        <div>
            <ul>
                {Object.keys(newObj).map((date, value)=> 
                <li key={value}>{date}: {newObj[date]}</li>)}
            </ul>
        </div>
    )
}

export default BestOpeningDates
