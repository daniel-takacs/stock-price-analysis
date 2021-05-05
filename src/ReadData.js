import React, {useState, useEffect} from "react";
import "./App.css";

function ReadData({ start, setStart, end, setEnd }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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

  const startDate = "01/20/2020"
  const endDate = "01/24/2020"

  let result = items.filter((item) => {
    return item.Date >= start && item.Date <= end
  })
  console.log(result)

  let sum = result.map((res) => {
    return res['Close/Last']
  })
  console.log('sum of closelast', sum)

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
