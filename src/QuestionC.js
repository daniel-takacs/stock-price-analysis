import React from 'react'
/*
C) Within a given date range, which dates had the best opening price compared to 5 days 
simple moving average (SMA 5)?

Calculate simple moving average for day N using the average value of closing prices between 
days N-1 to N-5.
Calculate how many percentages (%) is the difference between the opening price of the day 
and the calculated SMA 5 price of the day.
Expected output: List of dates and price change percentages. The list is ordered by price 
change percentages.

*/
function QuestionC( {filteredDateRange} ) {

      //map to filtered data and return close/last value as a string 
const mapped = filteredDateRange.map((res) => {
    return res['Close/Last']
  })

  //console.log('filter', filtered)
  console.log('map', mapped)

let arr = []
//console.log('new arr', arr)
//
function convertingToNumbers(obj) {
    for(let i=0;i<obj.length;i++){
        let temp = mapped[i]
        let conv = temp.split('$').join("")
        let closeLastFloat = parseFloat(conv)  
        //console.log('closeLastFloat', closeLastFloat)
        arr.push(closeLastFloat)
    }
}
convertingToNumbers(mapped)
let sum = 0
function avrCalc(){
   for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
       //console.log('sum',sum)
    }
    let avr = sum / arr.length
    console.log('avr',avr)
}
avrCalc()

    return (
        <div>
            <h2>Question C:</h2>
        </div>
    )
}

export default QuestionC
