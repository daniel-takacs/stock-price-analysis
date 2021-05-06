import React, {useState, useEffect} from "react";
import "./App.css";

function ReadData({ start, setStart, end, setEnd }) {

  //react hooks

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

//read data from data.json

useEffect(() => {
  fetch("./data.json")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [])

//filter to data in a given date range

const filtered = items.filter((item) => {
  return item.Date >= start && item.Date <= end
})

//map to filtered data and return close/last value as a string 
const mapped = filtered.map((res) => {
  return res['Close/Last']
})
//console.log('filter', filtered)
//console.log('map', mapped)


let arr = []
console.log('new arr', arr)
//
function printing(obj) {
    for(let i=0;i<obj.length;i++){
        let temp = mapped[i]
        let conv = temp.split('$').join("")
        let closeLastFloat = parseFloat(conv)  
        console.log('closeLastFloat', closeLastFloat)
        arr.push(closeLastFloat)
      }
    }
printing(mapped)
//function that take each element of array(close/last) 
//and check how many days was the increasing trend
function arrPrint(){
    let total = 0
    let k=0
    for(let j=0;j<arr.length;j++){
        //console.log('element',arr[j])
        if(arr[j] > arr[j-1]){
          k++
        }
      }
      console.log('total', k)
    }
arrPrint()

if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else {
  return(
    items.filter((item)=> {
      return item.Date >= start && item.Date <= end 
    }).map((item, id)=> (
    
      <ul key={id}> 
          <li>
            <div>Date:{item.Date}</div>
            <div>Close/Last:{item['Close/Last']}</div>
            <div>Volume:{item.Volume}</div>
            <div>Open:{item.Open}</div>
            <div>High:{item.High}</div>
            <div>Low:{item.Low}</div>
          </li>
      </ul>
      
      ))
      )
    }
}
export default ReadData;
