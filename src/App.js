import React, {useState} from 'react'
import ReadData from './ReadData'
import Header from './Header'
import QuestionA from './QuestionA'
import QuestionB_a from './QuestionB_a'
import QuestionB_b from './QuestionB_b'
import QuestionC from './QuestionC'

function App() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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
  
  console.log('atalakitott',convertedStartDate);
  console.log('atalakitott',convertedEndDate);


  //const convertedStartDate = "01/10/2021"
  //const convertedEndDate = "01/18/2021"
  let filteredDateRange = items.filter((item)=> {
    return item.Date >= convertedStartDate && item.Date <= convertedEndDate
  })
  console.log('filtered date range', filteredDateRange)
  
  //console.log('startDate',startDate)

  /*let dateMapedAndFilteredDateRange = filteredDateRange.map((item) => {
    return item.Date
  })
  console.log('dateMaped', dateMapedAndFilteredDateRange)
  
  let sortedAndFilteredDateRange = filteredDateRange.sort((a, b) => {
    return a - b
  })
  
  console.log('NEZZUK A SORRENDER', sortedAndFilteredDateRange)
  */



 


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
        filteredDateRange={filteredDateRange}
        items={items} 
        convertedStartDate={convertedStartDate}/>
      <QuestionB_a 
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
