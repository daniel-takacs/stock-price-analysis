import React from 'react'
/*
B) Which dates within a given date range had 

a) the highest trading volume and 

b) the most significant stock price change within a day?

Use High and Low prices to calculate the stock price change within a day. 
(Stock price change from 2$ to 1$ is equally significant as change from 1$ to 2$.)
Expected output: List of dates, volumes and price changes. 
The list is ordered by volume and price change. 
So if two dates have the same volume, the one with the more significant price 
change should come first.

*/
function QuestionB_b( {filteredDateRange} ) {

    const mappedMostSignificantHigh = filteredDateRange.map((res)=> {
        return res.High;
    })

    const mappedMostSignificantLow = filteredDateRange.map((res)=> {
        return res.Low;
    })
   
    //converting string to float number
    let highArr = []
    for (let i=0;i<mappedMostSignificantHigh.length;i++) {
        let temp = mappedMostSignificantHigh[i]
        let convert = temp.split('$').join("")
        let parse = parseFloat(convert)
        highArr.push(parse)
    }

    let lowArr = []
    for (let i=0;i<mappedMostSignificantLow.length;i++) {
        let temp = mappedMostSignificantLow[i]
        let convert = temp.split('$').join("")
        let parse = parseFloat(convert)
        lowArr.push(parse)
    }
    //calculate difference
    let diff = highArr.map((a, i) => a - lowArr[i])

    //searching the largest difference
    let largest = 0
    function largestDiff(arr){
        for(let i=0; i<arr.length;i++){
            if(arr[i] > largest){
                largest = arr[i]
            }
        }
        return largest
    }

    largestDiff(diff)

    let largestIndex = diff.indexOf(largest)
   
    let largestDateObj = filteredDateRange[largestIndex]
    
    let date = filteredDateRange.map((a)=> {
        return a.Date
    })
    let largestDate = date[largestIndex]

    return (
        <div>
            The most significant stock price change : ${largest.toFixed(2)} on {largestDate}
        </div>
    )
}

export default QuestionB_b
