import React from 'react'
import ListItems from './ListItems'

function List( {filteredDateRange} ) {
    return (
        filteredDateRange.map((item, id)=> (
            <ul key={id}> 
                <ListItems item={item}/>
            </ul>
            ))
    )
}

export default List
