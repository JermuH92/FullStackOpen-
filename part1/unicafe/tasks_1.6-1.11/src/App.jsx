import { useState } from 'react'
import './app.css'

const MainHeader = (props) => {
  return (
    <div className='mainHeader'>
      <h1>{props.mainHeader}</h1>
    </div>
  )
}

const StatHeader = (props) => {
  return (
    <div className='statHeader'>
      <h2>{props.statHeader}</h2>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button className='button' onClick = {onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <tr className='statTableRow'>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, total, average, percentage}) => {
  if (total === 0) {
    return (
      <div className='noFeedBack'>
        No feedback registered, please press one of the buttons above.
      </div>
    )
  }
  return (
    <div className='table-container'>
      <table className='stats'>
        <tbody className='statsBody'>
          <StatisticLine text="Good: " value={good}/>
          <StatisticLine text="Neutral: " value={neutral} />
          <StatisticLine text="Bad: " value={bad} />
          <StatisticLine text="Total: " value={total} />
          <StatisticLine text="Average: " value={average} />
          <StatisticLine text="Positive: " value={`${percentage}%`}/>
        </tbody> 
      </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const mainHeader = 'Give Feedback'
  const statHeader = 'Statistics'

  const handleGoodClick = () => {
    const updateGood = good + 1
    const updateTotal = updateGood + neutral + bad
    const updateAverage = (updateGood * 1 + neutral * 0 + bad * -1) / updateTotal
    const updatePercentage = (updateGood * 1.0 / updateTotal) * 100

    setGood(updateGood)
    setTotal(updateTotal)
    setAverage(updateAverage)
    setPercentage(updatePercentage)
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    const updateTotal = good + updateNeutral + bad
    const updateAverage = (good * 1 + updateNeutral * 0 + bad * -1) / updateTotal
    const updatePercentage = (good * 1.0 / updateTotal) * 100

    setNeutral(updateNeutral)
    setTotal(updateTotal)
    setAverage(updateAverage)
    setPercentage(updatePercentage)
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    const updateTotal = good + neutral + updateBad
    const updateAverage = (good * 1 + neutral * 0 + updateBad * -1) / updateTotal
    const updatePercentage = (good * 1.0 / updateTotal) * 100

    setBad(updateBad)
    setTotal(updateTotal)
    setAverage(updateAverage)
    setPercentage(updatePercentage)
  }


  return (
    <div>
      <MainHeader mainHeader={mainHeader}/>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <StatHeader statHeader={statHeader}/>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={avg}
        percentage={percentage}
      />     
    </div>
  )
}

export default App
