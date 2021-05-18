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
import React from 'react'

function QuestionB_a({ filteredDateRange }) {

    const mappedHighestTradingVolume = filteredDateRange.map((res)=> {
        return res.Volume
    })

    let highestVolumeArr = []
    
    function convertingToNumbers(obj) {
        for(let i=0;i<obj.length;i++){
            let temp = mappedHighestTradingVolume[i]
            let conv = temp.split('').join("")
            let volumeToNumber = parseFloat(conv)  
            highestVolumeArr.push(volumeToNumber)
        }
    }
    convertingToNumbers(mappedHighestTradingVolume)

    let theHighestVolume = Math.max(...highestVolumeArr)
    let theHighestVolumeToString = theHighestVolume.toString()

    let obj = filteredDateRange.find(o => o.Volume === theHighestVolumeToString);

    if (obj === undefined || null) return <h2>...Loading</h2>

    let theHighestVolumeDate = Object.values(obj)[0]

    return (

        <div>
            <h2>Question B:</h2>
            <p>The highest trading volume: <b>${theHighestVolume}</b> was on <b>{theHighestVolumeDate}</b></p>
        </div>
    )
}

export default QuestionB_a
