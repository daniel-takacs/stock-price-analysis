import React from 'react'

function BestOpeningDates({ sorted }) {

    return (
        <div>
            <ul>
                {Object.keys(sorted).map((date, value)=> 
                <li key={value}>{date}: <b>{sorted[date]}%</b></li>)}
            </ul>
        </div>
    )
}

export default BestOpeningDates
