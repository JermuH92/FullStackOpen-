import { useState } from 'react'

const MainHeader = (props) => {
  return (
    <div>
      <h1>{props.mainHeader}</h1>
    </div>
  )
}

const StatHeader = (props) => {
  return (
    <div>
      <h2>{props.statHeader}</h2>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick = {onClick}>
    {text}
  </button>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const mainHeader = 'Give Feedback'
  const statHeader = 'Statistics'

  const handleGoodClick = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setTotal(updateNeutral + good + bad)
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setTotal(updateBad + neutral + good)
  }


  return (
    <div>
      <MainHeader mainHeader={mainHeader}/>
      <Button onClick={handleGoodClick} text='Good'/>
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>
      <StatHeader statHeader={statHeader}/>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {avg}</p>
      <p>Positive: {positive} %</p>
    </div>
  )
}

export default App
