/*
A) How many days was the longest bullish (upward) trend within a given date range?
Definition of an upward trend shall be: “Closing price of day N is higher than closing price of day N-1”
Read start date and end date of the date range from user input (or pass them as input parameters via the API
    if your MVP does not have an user interface). 
    Both start and end date shall be included to the date range.
    Expected output: The max amount of days the stock price was increasing in a row
    Example: In Apple stock historical data the Close/Last price increased 3 days in a row between 01/06/2021 and 01/08/2021. 
*/

import React from 'react'

function QuestionA({ filteredDateRange }) {

    //map each close/last values from a given date range
    const mapped = filteredDateRange.map((res) => {
        return res['Close/Last']
    })

    let arr = []
    //close/last values converting to float numbers
    function convertingToNumbers(obj) {
        for(let i=0;i<obj.length;i++){
            let temp = mapped[i]
            let conv = temp.split('$').join("")
            let closeLastFloat = parseFloat(conv)  
            arr.push(closeLastFloat)
        }
    }
    convertingToNumbers(mapped)

    let bestStart  = 0;
    let curStart   = 0;
    let bestLength = 1;
    let curLength  = 1;

    //check upward trend and push element to tempArr array
    let tempArr = []
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

    for(let i=bestStart; i<bestStart+bestLength;i++){
        tempArr.push(arr[i])
      }

    //converting upward trend elements in tempArr to string and adding $

    let upwardElementsConvertedToString = tempArr.map(String)
    let bullish = []

    for(let i=0;i<upwardElementsConvertedToString.length;i++){
        bullish.push(upwardElementsConvertedToString[i] = "$"+ upwardElementsConvertedToString[i])
    }

    //find upward trend values from a given date range and return Date value
    let results = [];
    
    for(let i=0; i<filteredDateRange.length; i++) {
        for(let key in filteredDateRange[i]) {
            for(let k=0;k<bullish.length;k++){
                if(filteredDateRange[i][key].indexOf(bullish[k])!==-1) {
                    results.push(filteredDateRange[i]);
                }
            }
        }
    }
    let dates = []

    for (let values in results){
        dates.push(results[values].Date)
    }

    let bullishStart = dates[0]
    let bullishEnd = dates[dates.length-1]
  
    return (
        <div>
            <h2>Question A:</h2>
            <p>In Apple stock historical data the Close/Last price increased <b>{bestLength}days</b> in a row 
                between <b>{bullishStart} and {bullishEnd}</b></p>
        </div>
    )
}
    
    export default QuestionA