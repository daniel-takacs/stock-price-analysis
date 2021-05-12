import React from 'react'
/*
A) How many days was the longest bullish (upward) trend within a given date range?

Definition of an upward trend shall be: “Closing price of day N is higher than closing price of day N-1”
Read start date and end date of the date range from user input (or pass them as input parameters via the API if your MVP does not have an user interface). 
Both start and end date shall be included to the date range.
Expected output: The max amount of days the stock price was increasing in a row

Example: In Apple stock historical data the Close/Last price increased 3 days in a row between 01/06/2021 and 01/08/2021. 

*/
function QuestionA( {convertedStartDate, convertedEndDate, filteredDateRange} ) {

    const mapped = filteredDateRange.map((res) => {
        return res['Close/Last']
    })

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
    //console.log('array', arr)
  
    let bestStart  = 0;
    let curStart   = 0;
    let bestLength = 1;
    let curLength  = 1;

        function bullishTrendCalc(arr){
            for(let j=0;j<arr.length;j++){
                if(arr[j] > arr[j-1]){
                    curLength++
                    if(curLength > bestLength){
                        bestStart = curStart
                        bestLength = curLength
                    }
                }else {
                    curStart = j
                    curLength = 1
                }
            }
        }
    bullishTrendCalc(arr)
    
    return (
        <div>
            <h2>Question A:</h2>
            <p>In Apple stock historical data the Close/Last price increased {bestLength}
             days in a row between {convertedStartDate} and {convertedEndDate}</p>
        </div>
    )
    }

    export default QuestionA
