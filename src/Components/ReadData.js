import React, {useEffect} from "react";
import "../App.css";
import List from "./List";

function ReadData({ error, isLoaded, setIsLoaded, setItems, setError, filteredDateRange }) {

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
        <div className="list">
          <List filteredDateRange={filteredDateRange}/>
        </div>
        )
      }
  }
  export default ReadData;
