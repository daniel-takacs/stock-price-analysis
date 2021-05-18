import React from 'react'
import BestOpeningDates from './BestOpeningDates'
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
    //map to filtered data and return "Open" value as a string 
    let mappedOpen = filteredDateRange.map((res) => {
        return res.Open
    })
    console.log('filtered', filteredDateRange)
    console.log('mappedopen', mappedOpen)

    //converting "Close/Last" values to number
    let closeLastConvertedToFloatNumber = []

    function convertingToNumbers(obj) {
        for(let i=0;i<obj.length;i++){
            let temp = mapped[i]
            let conv = temp.split('$').join("")
            let closeLastFloat = parseFloat(conv)  
            closeLastConvertedToFloatNumber.push(closeLastFloat)
        }
    }
    convertingToNumbers(mapped)
    
    //converting "Open" values to number
    let openConvertedToFloatNumber = []

    function convertingToNumbersOpen(obj) {
        for(let i=0;i<obj.length;i++){
            let temp = mappedOpen[i]
            let conv = temp.split('$').join("")
            let openFloat = parseFloat(conv)  
            openConvertedToFloatNumber.push(openFloat)
        }
    }
    convertingToNumbersOpen(mappedOpen)
    console.log('open',openConvertedToFloatNumber)

    //calculate simple moving average 5 days
    let sum = 0
    let avr = 0

    function avrCalc(){
        for(let i=0;i<5;i++){
            sum = sum + closeLastConvertedToFloatNumber[i]
        }
    return avr = (sum / 5).toFixed(2)
    }
    avrCalc()

    //pushing "Open" values those bigger than average to tempArr     
    let tempArr = []
    for(let i=0;i<openConvertedToFloatNumber.length; i++){
        if(openConvertedToFloatNumber[i] > avr) {
            tempArr.push(openConvertedToFloatNumber[i])
        }
    }
    

    let bestOpenConvertedToString = tempArr.map(String)

    for(let i=0;i<bestOpenConvertedToString.length;i++){
         bestOpenConvertedToString[i] = "$"+ bestOpenConvertedToString[i]
    }
    console.log('stringge', bestOpenConvertedToString)

    //find best open from tempArr and return Date of object
    let bestOpeningDatesObj = [];
    
        filteredDateRange.find(function(elem){
        for(let i=0;i<bestOpenConvertedToString.length;i++){
            if(elem.Open === bestOpenConvertedToString[i]){
            bestOpeningDatesObj.push(elem)
            }
        }
    })

    //calculating percentages
    let mappedBestOpenDates = bestOpeningDatesObj.map((date)=> {
        return date.Date
    })

    let percArr = []
    for(let i=0; i<tempArr.length; i++){
        percArr.push((100-(avr/tempArr[i]*100)).toFixed(2) +"%")
    }
    
    //elements from mappedBestOpenDates and percArr moving to newObj
    let newObj = [];
    mappedBestOpenDates.forEach((key, i) => {
        newObj[key] = percArr[i]
    });
    
    console.log('new obj',newObj);

    let sortable = [];
        for (let percentages in newObj) {
            sortable.push([percentages, newObj[percentages]]);
        }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    })

    debugger
        return (
            <div>
                <h2>Question C:</h2>
                <p>Average value of closing price between a given date range: ${avr}</p>
                <p>List of best opening price dates and price change percentages 
                    between the opening price of the day 
                    and the calculated SMA 5 price of the day.:</p>
                <BestOpeningDates bestOpeningDatesObj={bestOpeningDatesObj} newObj={newObj}/>
            </div>
        )
    }

    export default QuestionC
