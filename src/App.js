import React, {useState} from 'react'
import ReadData from './Components/ReadData'
import Header from './Components/Header'
import QuestionA from './Components/QuestionA'
import QuestionB_a from './Components/QuestionB_a'
import QuestionB_b from './Components/QuestionB_b'
import QuestionC from './Components/QuestionC'

function App() {

  const [startDate, setStartDate] = useState(new Date("2020/01/21"));
  const [endDate, setEndDate] = useState(new Date("2020/01/21"));
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
      let d = new Date(inputFormat);
      return [ pad(d.getMonth()+1), pad(d.getDate()), d.getFullYear()].join('/');
  }
  
  let convertedStartDate = convertDate(startDate);
  let convertedEndDate = convertDate(endDate);
  
  let filteredDateRange = items.filter((item)=> {
    return item.Date >= convertedStartDate && item.Date <= convertedEndDate
  })
  filteredDateRange.reverse()
  
  return (
    <div>
      <Header 
        startDate={startDate} 
        setStartDate={setStartDate} 
        endDate={endDate} 
        setEndDate={setEndDate}/>
      <ReadData 
        filteredDateRange={filteredDateRange}
        error={error}
        setError={setError}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        items={items}
        setItems={setItems}/>
      <QuestionA 
        convertedEndDate={convertedEndDate}
        filteredDateRange={filteredDateRange}
        items={items} 
        convertedStartDate={convertedStartDate}/>
      <QuestionB_a 
        convertedEndDate={convertedEndDate}
        filteredDateRange={filteredDateRange}
        items={items} 
        startDate={startDate} 
        setEndDate={setEndDate}/>
      <QuestionB_b 
        filteredDateRange={filteredDateRange}
        items={items} 
        startDate={startDate} 
        setEndDate={setEndDate}/>
      <QuestionC 
        filteredDateRange={filteredDateRange}/>
    </div>
  )
}

export default App
