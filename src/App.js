import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const url = "https://www.nasdaq.com/api/v1/historical/AAPL/stocks/2020-01-20/2021-01-20"
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const request = new Request(url,
      {
        method: 'POST',
        headers: {
          'Accept-Encoding': 'deflate',
          'Connection': 'keep-alive',
          'User-Agent': 'Script',
        },
        mode: 'cors'
      }
    );
    fetch(request)
    .then(
    response => response.json()
    )
  }, [])

console.log(request)
  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
