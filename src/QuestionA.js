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
                        tempArr.push(arr[j])
                    }
                }else {
                    curStart = j
                    curLength = 1
                }
            }
        }
    bullishTrendCalc(arr)

    //converting upward trend elements in tempArr to string and adding $

    let upwardElementsConvertedToString = tempArr.map(String)
    let bullish = []
    for(let i=0;i<upwardElementsConvertedToString.length;i++){
        bullish.push(upwardElementsConvertedToString[i] = "$"+ upwardElementsConvertedToString[i])
    }



    /*
    let filteredDateRangea = [
        {
              "Date": "01/20/2021",
              "Close/Last": "$132.03",
              "Volume": "104319500",
              "Open": "$128.66",
              "High": "$132.49",
              "Low": "$128.55"
          },
          {
              "Date": "01/19/2021",
              "Close/Last": "$127.83",
              "Volume": "90757330",
              "Open": "$127.78",
              "High": "$128.71",
              "Low": "$126.938"
          },
          {
              "Date": "01/15/2021",
              "Close/Last": "$127.14",
              "Volume": "111598500",
              "Open": "$128.78",
              "High": "$130.2242",
              "Low": "$127"
          },
          {
              "Date": "01/14/2021",
              "Close/Last": "$128.91",
              "Volume": "90221760",
              "Open": "$130.8",
              "High": "$131",
              "Low": "$128.76"
          },
          {
              "Date": "01/13/2021",
              "Close/Last": "$130.89",
              "Volume": "88636830",
              "Open": "$128.76",
              "High": "$131.45",
              "Low": "$128.49"
          },
          {
              "Date": "01/12/2021",
              "Close/Last": "$128.8",
              "Volume": "91951150",
              "Open": "$128.5",
              "High": "$129.69",
              "Low": "$126.86"
          },
          {
              "Date": "01/11/2021",
              "Close/Last": "$128.98",
              "Volume": "100620900",
              "Open": "$129.19",
              "High": "$130.17",
              "Low": "$128.5"
          },
      ];
      let upwardElementsConvertedToStringa = ["$132.03", "$127.83","$127.14"];
      
      let results = [];
      
      
      for(let i=0; i<filteredDateRangea.length; i++) {
        for(let key in filteredDateRangea[i]) {
          if(filteredDateRangea[i][key].indexOf(upwardElementsConvertedToStringa[i])!==-1) {
            results.push(filteredDateRangea[i]);
          }
        }
      }
      console.log(results)

debugger
*/

    //find upward trend values from a given date range and return Date value
    
    let results = [];
    
    for(let i=0; i<filteredDateRange.length; i++) {
        for(let key in filteredDateRange[i]) {
            if(filteredDateRange[i][key].indexOf(bullish[i])!==-1) {
                results.push(filteredDateRange[i]);
            }
        }
    }
    console.log('results', results)
   debugger

   

    return (
        <div>
            <h2>Question A:</h2>
            <p>In Apple stock historical data the Close/Last price increased {bestLength}
             days in a row between {convertedStartDate} and {convertedEndDate}</p>
        </div>
    )
    }

    export default QuestionA
