import { useState } from 'react'

const StatisticLine = (props)=>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good,bad,neutral}) => {
  const all = good + bad + neutral
  if (all === 0) {
    return(
      <div>
        <p>No feedback given</p>     
      </div>
    )
  }
  return (
    // <div>
    //   <h1>statistics</h1>
    //   <StatisticLine text={"good"} value={good}/>
    //   <StatisticLine text={"neutral"} value={neutral}/>
    //   <StatisticLine text={"bad"} value={bad}/>
    //   <StatisticLine text={"all"} value={all}/>
    //   <StatisticLine text={"average"} value={(good - bad)/all}/>
    //   <StatisticLine text={"positive"} value={(good*100/all).toString()+" %"}/>
    // </div>
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good}/>
        <StatisticLine text={"neutral"} value={neutral}/>
        <StatisticLine text={"bad"} value={bad}/>
        <StatisticLine text={"all"} value={all}/>
        <StatisticLine text={"average"} value={(good - bad)/all}/>
        <StatisticLine text={"positive"} value={(good*100/all).toString()+" %"}/>
      </tbody>    
    </table>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      props.text
    </button>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const Increase = (value,setValue) =>{
    const val = value + 1
    setValue(val)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div className="card">
        <Button onClick={() => Increase(good,setGood)} text="good"/>
        <Button onClick={() => Increase(neutral, setNeutral)} text="neutral"/>
        <Button onClick={() => Increase(bad, setBad)} text="bad"/>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

export default App
