import React, {useState} from 'react'
import ReadData from './ReadData'
import Header from './Header'
import QuestionA from './QuestionA'
import QuestionB_a from './QuestionB_a'
import QuestionB_b from './QuestionB_b'
import QuestionC from './QuestionC'

function App() {

  const [start, setStart] = React.useState("")
  const [end, setEnd] = React.useState("")
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let filteredDateRange = items.filter((item)=> {
    return item.Date >= start && item.Date <= end
  })
  
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
        start={start} 
        setStart={setStart} 
        end={end} 
        setEnd={setEnd}/>
      <ReadData 
        filteredDateRange={filteredDateRange}
        start={start} 
        setStart={setStart} 
        end={end} 
        setEnd={setEnd}
        error={error}
        setError={setError}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        items={items}
        setItems={setItems}/>
      <QuestionA 
        filteredDateRange={filteredDateRange}
        items={items} 
        start={start} 
        end={end}/>
      <QuestionB_a 
        filteredDateRange={filteredDateRange}
        items={items} 
        start={start} 
        end={end}/>
      <QuestionB_b 
        filteredDateRange={filteredDateRange}
        items={items} 
        start={start} 
        end={end}/>
      <QuestionC 
        filteredDateRange={filteredDateRange}/>
    </div>
  )
}

export default App
