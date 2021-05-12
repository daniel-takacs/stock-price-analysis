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
    let mappedOpen = filteredDateRange.map((res) => {
        return res.Open
    })
    console.log('filtered', filteredDateRange)
    console.log('mappedopen', mappedOpen)
    let arr = []
    function convertingToNumbers(obj) {
        for(let i=0;i<obj.length;i++){
            let temp = mapped[i]
            let conv = temp.split('$').join("")
            let closeLastFloat = parseFloat(conv)  
            arr.push(closeLastFloat)
        }
    }
    convertingToNumbers(mapped)

    let openArr = []

    function convertingToNumbersOpen(obj) {
        for(let i=0;i<obj.length;i++){
            let temp = mappedOpen[i]
            let conv = temp.split('$').join("")
            let openFloat = parseFloat(conv)  
            openArr.push(openFloat)
        }
    }
    convertingToNumbersOpen(mappedOpen)
    console.log('open',openArr)

    let sum = 0
    let avr = 0

    function avrCalc(){
        for(let i=0;i<arr.length;i++){
            sum = sum + arr[i]
        }
    return avr = (sum / arr.length).toFixed(2)
    }
    avrCalc()

    let tempArr = []
    for(let i=0;i<openArr.length; i++){
        if(openArr[i] > avr) {
            tempArr.push(openArr[i])
        }
    }
    //let maxOpen = tempArr
    //let maxOpenToString = maxOpen.toString()
    //console.log('aa',maxOpen)
    //maxOpenToString = "$"+ maxOpenToString
    let bestOpenConvertedToString = tempArr.map(String)

    for(let i=0;i<bestOpenConvertedToString.length;i++){
         bestOpenConvertedToString[i] = "$"+ bestOpenConvertedToString[i]
    }
    console.log('stringge', bestOpenConvertedToString)
    //let obj = filteredDateRange.find(a => a.Open === maxOpenToString);
    //if (obj === undefined || null) return <h2>...Loading</h2>
      //  let theBestOpenDate = Object.values(obj)[0]


    //find best open from tempArr and return Date of object

        return (
            <div>
                <h2>Question C:</h2>
                <p>Average value of closing price between a given date range: ${avr}</p>
                <p>the best openin price was on: </p>
            </div>
        )
    }

    export default QuestionC
