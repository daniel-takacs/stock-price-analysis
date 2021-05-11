import React from 'react'

function ListItems( {item} ) {
    return (
        <>
        <li>Date:{item.Date}</li>
        <li>Close/Last:{item['Close/Last']}</li>
        <li>Volume:{item.Volume}</li>
        <li>Open:{item.Open}</li>
        <li>High:{item.High}</li>
        <li>Low:{item.Low}</li>
      </>
    )
}

export default ListItems
