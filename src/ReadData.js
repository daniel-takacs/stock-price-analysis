import React, {useEffect} from "react";
import "./App.css";

function ReadData({ start, end, error, isLoaded, setIsLoaded, setItems, setError, items, filteredDateRange }) {

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

if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else {
  return(
   filteredDateRange.map((item, id)=> (
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
