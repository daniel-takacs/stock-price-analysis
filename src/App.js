import React from 'react'
import ReadData from './ReadData'
import Header from './Header'

function App() {

  const [start, setStart] = React.useState("")
  const [end, setEnd] = React.useState("")

  return (
    <div>
      <Header start={start} setStart={setStart} end={end} setEnd={setEnd}/>
      <ReadData start={start} setStart={setStart} end={end} setEnd={setEnd}/>
    </div>
  )
}

export default App
