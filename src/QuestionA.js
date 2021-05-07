import React from 'react'

function QuestionA( {items, start, end, filteredDateRange} ) {

  //map to filtered data and return close/last value as a string 
const mapped = filteredDateRange.map((res) => {
    return res['Close/Last']
  })

  //console.log('filter', filtered)
  //console.log('map', mapped)

let arr = []
//console.log('new arr', arr)
//
function convertingToNumbers(obj) {
    for(let i=0;i<obj.length;i++){
        let temp = mapped[i]
        let conv = temp.split('$').join("")
        let closeLastFloat = parseFloat(conv)  
        console.log('closeLastFloat', closeLastFloat)
        arr.push(closeLastFloat)
    }
}
convertingToNumbers(mapped)

//function that take each element of array(close/last) 
//and check how many days was the increasing trend
let k=0
function increaseCalc(){
   for(let j=0;j<arr.length;j++){
       //console.log('element',arr[j])
       if(arr[j] > arr[j-1]){
       k++
       }
    }
    console.log('total', k)
}
increaseCalc()

return (
    <div>
        <h2>Question A:</h2>
        <p>In Apple stock historical data the Close/Last price increased {k} days in a row between {start} and {end}</p>
    </div>
)
}

export default QuestionA
